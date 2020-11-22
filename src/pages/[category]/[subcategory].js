import React from 'react'
import Head from 'next/head'
import { CATEGORIES, SITE_TITLE } from 'src/constants'
import { titleToId, getAllRecipes } from 'src/helpers'
import { Page } from 'src/components/layouts'
import { CardLink } from 'src/components/links'
import { GridList } from 'src/components'

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
          <GridList>
            {recipes.map((recipe, index) => {
              return (
                <GridList.Item key={`recipe-${index}`}>
                  <CardLink
                    href={`/${category.id}/${subcategory.id}/${titleToId(
                      recipe.title
                    )}`}
                  >
                    {recipe.title}
                  </CardLink>
                </GridList.Item>
              )
            })}
          </GridList>
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
