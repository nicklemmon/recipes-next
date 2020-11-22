import React from 'react'
import Head from 'next/head'
import { SITE_TITLE } from 'src/constants'
import { getAllRecipes, getRecipe } from 'src/helpers'
import { CATEGORIES } from 'src/constants'
import { Page } from 'src/components/layouts'

export default function RecipePage({ category, subcategory, recipe }) {
  if (!recipe) return <p>Recipe not found</p>

  const {
    title,
    category: recipeCategory,
    subcategory: recipeSubcategory,
    review,
    cookTime,
    numberServed,
    source,
    ingredients,
    steps,
  } = recipe

  return (
    <>
      <Head>
        <title>
          {title} | {recipeSubcategory} | {recipeCategory} | {SITE_TITLE}
        </title>
      </Head>

      <Page>
        <Page.Header>
          <Page.Title>{title}</Page.Title>

          <Page.Breadcrumbs href={`/${category}/${subcategory}`}>
            Back to {subcategory}
          </Page.Breadcrumbs>
        </Page.Header>

        <div className="grid grid-cols-3 gap-4">
          <article className="col-span-2 text-gray-600">
            <ul className="list-inside list-disc mb-8">
              {ingredients &&
                ingredients.map((ingredient, index) => {
                  return (
                    <li className="mb-1" key={`ingredient-${index}`}>
                      {ingredient}
                    </li>
                  )
                })}
            </ul>

            <ol className="list-inside list-decimal">
              {steps &&
                steps.map((step, index) => {
                  return (
                    <li className="mb-1" key={`step-${index}`}>
                      {step}
                    </li>
                  )
                })}
            </ol>
          </article>

          <div className="col-span-1">
            <aside className="bg-gray-100 text-gray-700 p-4 rounded-lg">
              <p>{review} out of 5 stars</p>

              <p>{cookTime} minutes to prepare</p>

              <p>Serves {numberServed} people.</p>

              <p>From {source}</p>
            </aside>
          </div>
        </div>
      </Page>
    </>
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
  console.log('params', params)
  const recipe = getRecipe(`${params.recipe}.yml`)

  return {
    props: {
      recipe,
      category: params.category,
      subcategory: params.subcategory,
    },
  }
}
