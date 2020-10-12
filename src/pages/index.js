import React from 'react'
import Head from 'next/head'
import recipes from '../recipes/*.yml'
import { titleToId } from 'src/helpers'

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
              <a href={`/recipes/${titleToId(recipe.title)}`}>{recipe.title}</a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
