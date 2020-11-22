import React from 'react'
import Head from 'next/head'
import { CATEGORIES, SITE_TITLE } from 'src/constants'
import { Default } from 'src/components/layouts'
import { CardLink } from 'src/components/links'
import { GridList } from 'src/components'

export default function Home() {
  const renderedCategories = [
    ...CATEGORIES,
    {
      id: 'favorites',
      name: 'Favorites',
    },
  ]

  return (
    <Default>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>

      <GridList>
        {renderedCategories.map((category, index) => {
          return (
            <GridList.Item key={`category-${index}`}>
              <CardLink href={`/${category.id}`}>{category.name}</CardLink>
            </GridList.Item>
          )
        })}
      </GridList>
    </Default>
  )
}
