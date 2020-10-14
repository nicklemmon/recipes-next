import fs from 'fs'
import { join } from 'path'
import yaml from 'js-yaml'

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

export function getAllRecipes() {
  const slugs = getRecipeSlugs()
  const recipes = slugs.map(slug => getRecipe(slug))

  return recipes
}

export function titleToId(title) {
  return title.toLowerCase().replace(/,/g, '').replace(/ /g, '-')
}

export function fetcher(url) {
  return fetch(url).then(res => res.json())
}
