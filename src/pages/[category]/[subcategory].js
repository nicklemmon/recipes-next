import React from 'react'
import { CATEGORIES } from 'src/constants'
import { titleToId, getAllRecipes } from 'src/helpers'
import { Page } from 'src/components/layouts'
import { PageLink } from 'src/components/links'

export default function SubcategoryPage({ category, subcategory, recipes }) {
  if (!subcategory || !category) return <p>Subcategory not found.</p>

  return (
    <Page title={subcategory.name}>
      {recipes.length === 0 && <p>No recipes here yet!</p>}

      {recipes.length > 0 ? (
        <div role="list">
          {recipes.map((recipe, index) => {
            return (
              <div role="listitem" key={`recipe-${index}`}>
                <PageLink
                  href={`/${category.id}/${subcategory.id}/${titleToId(
                    recipe.title
                  )}`}
                >
                  {recipe.title}
                </PageLink>
              </div>
            )
          })}
        </div>
      ) : null}
    </Page>
  )
}

export async function getStaticPaths() {
  let paths = []

  CATEGORIES.forEach(category => {
    category.subcategories.forEach(subcategory => {
      paths.push({
        params: {
          category: category.id,
          subcategory: subcategory.id,
        },
      })
    })
  })

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const currentCategory = CATEGORIES.find(
    category => category.id === params.category
  )
  const currentSubcategory = currentCategory.subcategories.find(
    subcategory => subcategory.id === params.subcategory
  )
  // Filter recipes based on the recipe category and subcategory referencing the core config
  const recipes = getAllRecipes().filter(
    recipe =>
      recipe.category === currentCategory.name &&
      recipe.subcategory === currentSubcategory.name
  )

  return {
    props: {
      category: currentCategory,
      subcategory: currentSubcategory,
      recipes,
    },
  }
}
