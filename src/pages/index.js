import React from 'react'
import Head from 'next/head'
import { CATEGORIES } from 'src/constants'
import { Default } from 'src/components/layouts'
import { PageLink } from 'src/components/links'

export default function Home() {
  // const { data, error } = useSWR('/api/recipes', fetcher)

  return (
    <Default>
      <Head>Nick &amp; Laurie&rsquo;s Recipe Collection</Head>

      <div role="list">
        {CATEGORIES.map((category, index) => {
          return (
            <div role="listitem" key={`category-${index}`}>
              <PageLink href={`/${category.id}`}>{category.name}</PageLink>
            </div>
          )
        })}
      </div>

      {/* {error && <p>D&rsquo;oh! Recipes failed to load.</p>}

      {!data && <p>Loading...</p>}

      <ul>
        {data &&
          data.map((recipe, index) => {
            return (
              <li key={`recipe-${index}`}>
                <PageLink
                  href={`/recipes/${titleToId(recipe.title)}`}
                  className="flex w-full py-1 px-3"
                >
                  {recipe.title}
                </PageLink>
              </li>
            )
          })}
      </ul> */}
    </Default>
  )
}
