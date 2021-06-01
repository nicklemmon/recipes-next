import fs from 'fs'
import { join } from 'path'
import yaml from 'js-yaml'
import { CATEGORIES, FAMILY_MEMBERS } from 'src/constants'

const recipesDirectory = join(process.cwd(), 'src/_recipes')

function getRecipeSlugs() {
  return fs.readdirSync(recipesDirectory)
}

export function getRecipe(id) {
  const filePath = join(recipesDirectory, id)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const data = yaml.safeLoad(fileContent)
  const slug = id.replace('.yml', '')
  const { category, subcategory } = data
  const categoryId = getCategoryId(category)
  const subcategoryId = getSubcategoryId(category, subcategory)
  const likedBy = data.likedBy
    ? data.likedBy.map(id => getFamilyMember(id))
    : []

  return { ...data, categoryId, subcategoryId, slug, likedBy }
}

/**
 * Returns the category ID from its name
 * @param {string} categoryName
 */
export function getCategoryId(categoryName) {
  const { id } = CATEGORIES.find(category => category.name === categoryName)

  return id
}

/**
 * Returns the subcategory ID from its name
 * @param {string} categoryName
 * @param {string} subcategoryName
 */
export function getSubcategoryId(categoryName, subcategoryName) {
  const categoryObj = CATEGORIES.find(
    category => category.name === categoryName
  )
  const subcategoryObj = categoryObj.subcategories.find(
    subcategory => subcategory.name === subcategoryName
  )

  return subcategoryObj.id
}

export function getFamilyMember(id) {
  return FAMILY_MEMBERS.find(familyMember => {
    return familyMember.id === id
  })
}

export function getAllRecipes() {
  const slugs = getRecipeSlugs()
  const recipes = slugs.map(slug => getRecipe(slug))

  return recipes
}

export function titleToId(title) {
  return title
    .toLowerCase()
    .replace(/,/g, '') // Remove commas
    .replace(/'/g, '') // Remove apostrophes
    .replace(/ /g, '-') // Replace spaces with -
}

export function fetcher(url) {
  return fetch(url).then(res => res.json())
}
