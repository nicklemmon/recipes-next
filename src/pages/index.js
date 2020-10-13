import React from 'react'
import Head from 'next/head'
import recipes from '../recipes/*.yml'
import { titleToId } from 'src/helpers'
import { PageLink } from 'src/components/links'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nick and Laurie&rsquo;s Recipe Collection</title>
      </Head>

      <ul>
        {recipes.map((recipe, index) => {
          return (
            <li key={`recipe-${index}`}>
              <PageLink href={`/recipes/${titleToId(recipe.title)}`}>
                {recipe.title}
              </PageLink>
            </li>
          )
        })}
      </ul>
    </>
  )
}
