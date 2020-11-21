import React from 'react'
import Head from 'next/head'
import { CATEGORIES } from 'src/constants'
import { Default } from 'src/components/layouts'
import { PageLink } from 'src/components/links'

export default function Home() {
  return (
    <Default>
      <Head>
        <title>Nick &amp; Laurie&rsquo;s Recipe Collection</title>
      </Head>

      <div role="list">
        {CATEGORIES.map((category, index) => {
          return (
            <div role="listitem" key={`category-${index}`}>
              <PageLink href={`/${category.id}`}>{category.name}</PageLink>
            </div>
          )
        })}

        <div role="listitem">
          <PageLink href="/favorites">Favorites</PageLink>
        </div>
      </div>
    </Default>
  )
}
