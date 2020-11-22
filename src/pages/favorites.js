import React from 'react'
import { CATEGORIES } from 'src/constants'
import { titleToId, getAllRecipes } from 'src/helpers'
import { Page } from 'src/components/layouts'
import { PageLink } from 'src/components/links'

export default function SubcategoryPage({ recipes }) {
  if (!recipes) return <p>No favorite recipes found</p>

  return (
    <Page title="Favorites">
      <div role="list">
        {recipes.map((recipe, index) => {
          return (
            <div role="listitem" key={`favorite-${index}`}>
              <PageLink
                href={`/${recipe.category}/${recipe.subcategory}/${recipe.id}`}
              >
                {recipe.title}
              </PageLink>
            </div>
          )
        })}
      </div>
    </Page>
  )
}

export async function getStaticProps() {
  // Filter recipes based on the recipe category and subcategory referencing the core config
  const recipes = getAllRecipes()
    .filter(recipe => recipe.review === 5)
    .map(recipe => {
      const currentCategory = CATEGORIES.find(
        category => category.name === recipe.category
      )
      const currentSubcategory = currentCategory.subcategories.find(
        subcategory => subcategory.name === recipe.subcategory
      )

      return {
        title: recipe.title,
        id: titleToId(recipe.title),
        category: currentCategory.id,
        subcategory: currentSubcategory.id,
      }
    })

  return {
    props: {
      recipes,
    },
  }
}
