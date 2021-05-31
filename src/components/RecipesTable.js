import React from 'react'
import { PageLink } from 'src/components/links'
import { Table, Tag } from 'src/components'

export function RecipesTable({ className, caption, recipes }) {
  console.log('recipes', recipes)
  return (
    <Table className={className}>
      <Table.Caption>{caption}</Table.Caption>

      <thead>
        <Table.Row>
          <Table.HeadCell>Recipe</Table.HeadCell>

          <Table.HeadCell>Liked By</Table.HeadCell>

          <Table.HeadCell>Review</Table.HeadCell>
        </Table.Row>
      </thead>

      <tbody>
        {recipes.map((recipe, index) => {
          return (
            <Table.Row key={`recipe-${index}`}>
              <Table.Cell>
                <PageLink
                  href={`/${recipe.categoryId}/${recipe.subcategoryId}/${recipe.slug}`}
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

              <Table.Cell>{recipe.review} out of 5</Table.Cell>
            </Table.Row>
          )
        })}
      </tbody>
    </Table>
  )
}
