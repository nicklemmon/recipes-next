import React from 'react'
import { useRouter } from 'next/router'
import { matchSorter } from 'match-sorter'
import Head from 'next/head'
import { Page } from 'src/components/layouts'
import { Bold } from 'src/components/text'
import { getAllRecipes } from 'src/helpers'
import { SITE_TITLE } from 'src/constants'
import { RecipesTable } from 'src/components'

export default function SearchResultsPage({ recipes }) {
  const router = useRouter()
  const { search } = router.query
  const filteredRecipes = matchSorter(recipes, search, {
    keys: ['title', 'category', 'subcategory'],
  })

  return (
    <>
      <Head>
        <title>Search Results | {SITE_TITLE}</title>
      </Head>

      <Page>
        <Page.Header>
          <Page.Title>Search Results</Page.Title>
        </Page.Header>

        <div className="mb-8">
          {search ? (
            <p>
              Recipes matching <Bold>&ldquo;{search}&rdquo;</Bold>.
            </p>
          ) : (
            <p>No search provided - no results.</p>
          )}
        </div>

        {filteredRecipes.length > 0 ? (
          <RecipesTable
            caption={`Recipes filtered by ${search}`}
            recipes={filteredRecipes}
          />
        ) : null}
      </Page>
    </>
  )
}

export async function getStaticProps() {
  const recipes = getAllRecipes()

  return {
    props: { recipes },
  }
}
