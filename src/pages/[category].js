import React from 'react'
import Head from 'next/head'
import { CATEGORIES, SITE_TITLE } from 'src/constants'
import { Page } from 'src/components/layouts'
import { CardLink } from 'src/components/links'
import { Icon, GridList } from 'src/components'

export default function CategoryPage({ category }) {
  if (!category) return <p>Category not found.</p>

  return (
    <>
      <Head>
        <title>
          {category.name} | {SITE_TITLE}
        </title>
      </Head>

      <Page>
        <Page.Header>
          <Page.Title>{category.name}</Page.Title>

          <Page.Breadcrumbs href="/">Back to Landing</Page.Breadcrumbs>
        </Page.Header>

        <GridList>
          {category.subcategories.map((subcategory, index) => {
            return (
              <GridList.Item key={`subcategory-${index}`}>
                <CardLink href={`/${category.id}/${subcategory.id}`}>
                  <Icon as={subcategory.icon} size="1.5rem" />

                  {subcategory.name}
                </CardLink>
              </GridList.Item>
            )
          })}
        </GridList>
      </Page>
    </>
  )
}

export async function getStaticPaths() {
  let paths = []

  CATEGORIES.forEach(category => {
    paths.push({
      params: {
        category: category.id,
      },
    })
  })

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const currentCategory = CATEGORIES.find(
    category => category.id === params.category
  )

  return {
    props: {
      category: currentCategory,
    },
  }
}
