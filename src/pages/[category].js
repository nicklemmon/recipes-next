import React from 'react'
import { CATEGORIES } from 'src/constants'
import { Page } from 'src/components/layouts'
import { PageLink } from 'src/components/links'

export default function CategoryPage({ category }) {
  if (!category) return <p>Category not found.</p>

  return (
    <Page title={category.name}>
      <div role="list">
        {category.subcategories.map((subcategory, index) => {
          return (
            <div role="listitem" key={`subcategory-${index}`}>
              <PageLink href={`/${category.id}/${subcategory.id}`}>
                {subcategory.name}
              </PageLink>
            </div>
          )
        })}
      </div>
    </Page>
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
