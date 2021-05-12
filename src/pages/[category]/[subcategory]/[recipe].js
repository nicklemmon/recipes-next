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

        <div className="grid md:grid-cols-3 gap-4">
          <article className="md:col-span-2 bg-white p-6 text-gray-500">
            <h2 className="text-xl font-bold mb-4 text-gray-600">
              Ingredients
            </h2>

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

            <h2 className="text-xl font-bold mb-4 text-gray-600">Steps</h2>

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

          <div className="md:col-span-1">
            <aside className="bg-indigo-100 text-indigo-700 p-4 rounded-lg">
              <div className="mb-3">
                <h3 className="text-base font-semibold">Review</h3>

                <p>{review} out of 5 stars</p>
              </div>

              <div className="mb-3">
                <h3 className="text-base font-semibold">Cook Time</h3>

                <p>{cookTime}</p>
              </div>

              <div className="mb-3">
                <h3 className="text-base font-semibold">Number Served</h3>

                <p>Serves {numberServed}</p>
              </div>

              <div>
                <h3 className="text-base font-semibold">Source</h3>

                <p>From {source}</p>
              </div>
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
  const recipe = getRecipe(`${params.recipe}.yml`)

  return {
    props: {
      recipe,
      category: params.category,
      subcategory: params.subcategory,
    },
  }
}
