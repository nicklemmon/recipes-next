import React from 'react'
import { titleToId } from 'src/helpers'
import { Table } from 'src/components'
import { PageLink } from 'src/components/links'

export default function RecipeTable({ category, subcategory, recipes }) {
  return (
    <Table>
      <Table.Caption>{subcategory.name} Recipes</Table.Caption>

      <thead>
        <Table.Row>
          <Table.Cell as="th">Recipe</Table.Cell>
          <Table.Cell as="th">Review</Table.Cell>
        </Table.Row>
      </thead>

      <tbody>
        {recipes.map((recipe, index) => {
          return (
            <Table.Row key={`recipe-${index}`}>
              <Table.Cell>
                <PageLink
                  href={`/${category.id}/${subcategory.id}/${titleToId(
                    recipe.title
                  )}`}
                  className="text-blue-600"
                >
                  {recipe.title}
                </PageLink>
              </Table.Cell>

              <Table.Cell>{recipe.review} out of 5</Table.Cell>
            </Table.Row>
          )
        })}
      </tbody>
    </Table>
  )
}
