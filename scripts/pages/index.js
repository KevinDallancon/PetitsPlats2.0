
import { recipes } from '../../data/recipes.js';
import { recetteTemplate } from '../templates/recettes.js'

function getRecipes() {
  return recipes;
}

function displayData(recettes) {
 const recetteSection = document.querySelector('.recettes_section')

 recettes.forEach(recette => {
    const recetteModel = recetteTemplate(recette)
    const userCardDOM = recetteModel.getCardDOM()
    recetteSection.appendChild(userCardDOM)
 })
}

async function init() {
  const recettes = await getRecipes()
  displayData(recettes)
}

init()