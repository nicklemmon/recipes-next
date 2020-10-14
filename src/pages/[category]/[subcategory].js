import React from 'react'
import { CATEGORIES } from 'src/constants'
import { titleToId, getAllRecipes } from 'src/helpers'
import { Default } from 'src/components/layouts'
import { Heading } from 'src/components/text'
import { PageLink } from 'src/components/links'

export default function SubcategoryPage({ category, subcategory, recipes }) {
  return (
    <Default>
      <Heading as="h1">{subcategory.name}</Heading>

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
    </Default>
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
