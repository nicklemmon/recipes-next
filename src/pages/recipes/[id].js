import React from 'react'
import recipes from '../../recipes/*.yml'
import { titleToId } from '../../helpers'

export default function RecipePage(props) {
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
  } = props

  return (
    <div>
      <h2>{title}</h2>

      <h3>{category}</h3>

      <h4>{subcategory}</h4>

      <p>{review} out of 5 stars</p>

      <p>{cookTime} minutes to prepare</p>

      <p>Serves {numberServed} people.</p>

      <p>From {source}</p>

      <ul>
        {ingredients.map((ingredient, index) => {
          return <li key={`ingredient-${index}`}>{ingredient}</li>
        })}
      </ul>

      <ol>
        {steps.map((step, index) => {
          return <li key={`step-${index}`}>{step}</li>
        })}
      </ol>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: recipes.map((recipe) => {
      const { title } = recipe
      const id = titleToId(title)

      return {
        params: { id },
      }
    }),
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const recipe = recipes.find((recipe) => titleToId(recipe.title) === params.id)

  return {
    props: { ...recipe },
  }
}
