import fs from 'fs'
import { join } from 'path'
import yaml from 'js-yaml'
import { FAMILY_MEMBERS } from 'src/constants'

const recipesDirectory = join(process.cwd(), 'src/_recipes')

function getRecipeSlugs() {
  return fs.readdirSync(recipesDirectory)
}

export function getRecipe(id) {
  const filePath = join(recipesDirectory, id)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const data = yaml.safeLoad(fileContent)
  const slug = id.replace('.yml', '')

  return { ...data, slug }
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
