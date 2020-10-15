import React from 'react'
import { getAllRecipes, getRecipe } from 'src/helpers'
import { CATEGORIES } from 'src/constants'
import { Page } from 'src/components/layouts'

export default function RecipePage({ recipe }) {
  if (!recipe) return <p>Recipe not found</p>

  const {
    title,
    category,
    subcategory,
    review,
    cookTime,
    numberServed,
    source,
    ingredients,
    steps,
  } = recipe

  return (
    <Page title={title}>
      <h3>{category}</h3>

      <h4>{subcategory}</h4>

      <p>{review} out of 5 stars</p>

      <p>{cookTime} minutes to prepare</p>

      <p>Serves {numberServed} people.</p>

      <p>From {source}</p>

      <ul>
        {ingredients &&
          ingredients.map((ingredient, index) => {
            return <li key={`ingredient-${index}`}>{ingredient}</li>
          })}
      </ul>

      <ol>
        {steps &&
          steps.map((step, index) => {
            return <li key={`step-${index}`}>{step}</li>
          })}
      </ol>
    </Page>
  )
}

export async function getStaticPaths() {
  const recipes = getAllRecipes()
  let paths = []

  CATEGORIES.forEach(category => {
    category.subcategories.forEach(subcategory => {
      recipes.forEach(recipe => {
        paths.push({
          params: {
            category: category.id,
            subcategory: subcategory.id,
            recipe: recipe.slug,
          },
        })
      })
    })
  })

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const recipe = getRecipe(`${params.recipe}.yml`)

  return {
    props: {
      recipe,
    },
  }
}
