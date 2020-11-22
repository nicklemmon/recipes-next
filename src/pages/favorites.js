import React from 'react'
import { CATEGORIES } from 'src/constants'
import { titleToId, getAllRecipes } from 'src/helpers'
import { Page } from 'src/components/layouts'
import { CardLink } from 'src/components/links'
import { GridList } from 'src/components'

export default function SubcategoryPage({ recipes }) {
  if (!recipes) return <p>No favorite recipes found</p>

  return (
    <Page title="Favorites">
      <GridList>
        {recipes.map((recipe, index) => {
          return (
            <GridList.Item key={`favorite-${index}`}>
              <CardLink
                href={`/${recipe.category}/${recipe.subcategory}/${recipe.id}`}
              >
                {recipe.title}
              </CardLink>
            </GridList.Item>
          )
        })}
      </GridList>
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
