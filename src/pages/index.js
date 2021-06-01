import React from 'react'
import Head from 'next/head'
import { CATEGORIES, SITE_TITLE } from 'src/constants'
import { CardLink } from 'src/components/links'
import { Icon, GridList } from 'src/components'
import { Page } from 'src/components/layouts'

export default function Home() {
  const renderedCategories = [
    ...CATEGORIES,
    {
      id: 'favorites',
      name: 'Favorites',
      icon: '⭐',
    },
  ]

  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>

      <Page>
        <Page.Header>
          <Page.Title>Categories</Page.Title>
        </Page.Header>

        <GridList>
          {renderedCategories.map((category, index) => {
            return (
              <GridList.Item key={`category-${index}`}>
                <CardLink href={`/${category.id}`}>
                  <Icon as={category.icon} size="1.5rem" />

                  {category.name}
                </CardLink>
              </GridList.Item>
            )
          })}
        </GridList>
      </Page>
    </>
  )
}
