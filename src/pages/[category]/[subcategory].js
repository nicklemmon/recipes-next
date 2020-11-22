import React from 'react'
import Head from 'next/head'
import { CATEGORIES, SITE_TITLE } from 'src/constants'
import { getAllRecipes, titleToId } from 'src/helpers'
import { Page } from 'src/components/layouts'
import { PageLink } from 'src/components/links'
import { Table } from 'src/components'

export default function SubcategoryPage({ category, subcategory, recipes }) {
  if (!subcategory || !category) return <p>Subcategory not found.</p>

  return (
    <>
      <Head>
        <title>
          {subcategory.name} | {category.name} | {SITE_TITLE}
        </title>
      </Head>

      <Page title={subcategory.name}>
        {recipes.length === 0 && <p>No recipes here yet!</p>}

        {recipes.length > 0 ? (
          <Table>
            <Table.Caption>{subcategory.name} Recipes</Table.Caption>

            <thead>
              <Table.Row>
                <Table.HeadCell>Recipe</Table.HeadCell>

                <Table.HeadCell>Review</Table.HeadCell>
              </Table.Row>
            </thead>

            <tbody>
              {recipes.map((recipe, index) => {
                return (
                  <Table.Row key={`recipe-${index}`}>
                    <Table.Cell>
                      <PageLink
                        href={`/${category.id}/${subcategory.id}/${titleToId(
                          recipe.title
                        )}`}
                        className="text-blue-600"
                      >
                        {recipe.title}
                      </PageLink>
                    </Table.Cell>

                    <Table.Cell>{recipe.review} out of 5</Table.Cell>
                  </Table.Row>
                )
              })}
            </tbody>
          </Table>
        ) : null}
      </Page>
    </>
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
