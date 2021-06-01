import React from 'react'
import { useRouter } from 'next/router'
import { matchSorter } from 'match-sorter'
import Head from 'next/head'
import { titleToId, getAllRecipes } from 'src/helpers'
import { CATEGORIES, SITE_TITLE } from 'src/constants'
import { Page } from 'src/components/layouts'
import { Bold } from 'src/components/text'
import { PageLink } from 'src/components/links'
import { Table, Tag } from 'src/components'

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
              Searched <Bold>&ldquo;{search}&rdquo;</Bold>.
            </p>
          ) : (
            <p>No search provided - no recipes found.</p>
          )}
        </div>

        {filteredRecipes.length > 0 ? (
          <SearchedRecipesTable
            recipes={filteredRecipes}
            caption={`Recipes filtered by ${search}`}
          />
        ) : (
          <p>No matching recipes found.</p>
        )}
      </Page>
    </>
  )
}

function SearchedRecipesTable({ caption, recipes }) {
  return (
    <Table>
      <Table.Caption>{caption}</Table.Caption>

      <thead>
        <Table.Row>
          <Table.HeadCell as="th">Recipe</Table.HeadCell>

          <Table.HeadCell as="th">Category</Table.HeadCell>

          <Table.HeadCell as="th">Subcategory</Table.HeadCell>

          <Table.HeadCell as="th">Liked By</Table.HeadCell>

          <Table.HeadCell as="th">Review</Table.HeadCell>
        </Table.Row>
      </thead>

      <tbody>
        {recipes.map((recipe, index) => {
          return (
            <Table.Row key={`recipe-${index}`}>
              <Table.Cell>
                <PageLink
                  href={`/${recipe.category.id}/${recipe.subcategory.id}/${recipe.id}`}
                  query={{ source: 'favorites' }}
                  className="text-blue-600"
                >
                  {recipe.title}
                </PageLink>
              </Table.Cell>

              <Table.Cell>
                <Tag>{recipe.category.name}</Tag>
              </Table.Cell>

              <Table.Cell>
                <Tag>{recipe.subcategory.name}</Tag>
              </Table.Cell>

              <Table.Cell>
                {recipe.likedBy.map((familyMember, index) => {
                  return (
                    <Tag
                      key={`family-member-${familyMember.id}-${index}`}
                      color={familyMember.color}
                      className={index === 0 ? 'ml-0' : 'ml-3'}
                    >
                      {familyMember.name}
                    </Tag>
                  )
                })}
              </Table.Cell>

              <Table.Cell>{recipe.review} out of 5</Table.Cell>
            </Table.Row>
          )
        })}
      </tbody>
    </Table>
  )
}

export async function getStaticProps() {
  // Filter recipes based on the recipe category and subcategory referencing the core config
  const recipes = getAllRecipes().map(recipe => {
    const currentCategory = CATEGORIES.find(
      category => category.name === recipe.category
    )
    const currentSubcategory = currentCategory.subcategories.find(
      subcategory => subcategory.name === recipe.subcategory
    )

    return {
      ...recipe,
      id: titleToId(recipe.title),
      category: currentCategory,
      subcategory: currentSubcategory,
    }
  })

  return {
    props: { recipes },
  }
}
