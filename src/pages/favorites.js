import React from 'react'
import Head from 'next/head'
import { CATEGORIES, SITE_TITLE } from 'src/constants'
import { titleToId, getAllRecipes } from 'src/helpers'
import { Page } from 'src/components/layouts'
import { PageLink } from 'src/components/links'
import { Table } from 'src/components'

export default function SubcategoryPage({ recipes }) {
  if (!recipes) return <p>No favorite recipes found</p>

  return (
    <>
      <Head>
        <title>Favorites | {SITE_TITLE}</title>
      </Head>
      <Page title="Favorites">
        <Table>
          <Table.Caption>Favorite Recipes</Table.Caption>

          <thead>
            <Table.Row>
              <Table.Cell as="th">Recipe</Table.Cell>
              <Table.Cell as="th">Review</Table.Cell>
            </Table.Row>
          </thead>

          <tbody>
            {recipes.map((recipe, index) => {
              return (
                <Table.Row key={`recipe-${index}`}>
                  <Table.Cell>
                    <PageLink
                      href={`/${recipe.category}/${recipe.subcategory}/${recipe.id}`}
                      className="text-blue-600"
                    >
                      {recipe.title}
                    </PageLink>
                  </Table.Cell>

                  <Table.Cell>5 out of 5</Table.Cell>
                </Table.Row>
              )
            })}
          </tbody>
        </Table>
      </Page>
    </>
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
