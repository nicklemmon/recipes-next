import React from 'react'
import Head from 'next/head'
import { CATEGORIES, SITE_TITLE } from 'src/constants'
import { titleToId, getAllRecipes } from 'src/helpers'
import { Page } from 'src/components/layouts'
import { PageLink } from 'src/components/links'
import { Table, Tag } from 'src/components'

export default function SubcategoryPage({ recipes }) {
  if (!recipes) return <p>No favorite recipes found</p>

  return (
    <>
      <Head>
        <title>Favorites | {SITE_TITLE}</title>
      </Head>

      <Page>
        <Page.Header>
          <Page.Title>Favorites</Page.Title>
        </Page.Header>

        <Table>
          <Table.Caption>Favorite Recipes</Table.Caption>

          <thead>
            <Table.Row>
              <Table.HeadCell as="th">Recipe</Table.HeadCell>

              <Table.HeadCell as="th">Liked By</Table.HeadCell>

              <Table.HeadCell as="th">Category</Table.HeadCell>

              <Table.HeadCell as="th">Subcategory</Table.HeadCell>
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

                  <Table.Cell>
                    <Tag>{recipe.category.name}</Tag>
                  </Table.Cell>

                  <Table.Cell>
                    <Tag>{recipe.subcategory.name}</Tag>
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </tbody>
        </Table>
      </Page>
    </>
  )
}

export async function getStaticProps() {
  // Filter recipes based on the recipe category and subcategory referencing the core config
  const recipes = getAllRecipes()
    .filter(recipe => recipe.review === 5)
    .map(recipe => {
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
