
import { recipes } from '../../data/recipes.js';
import { recetteTemplate } from '../templates/recettes.js'


function getRecipes() {
  return recipes;
}

function displayData(recettes) {
 const recetteSection = document.querySelector('.recettes_section')
 recetteSection.innerHTML=""

 recettes.forEach(recette => {
    const recetteModel = recetteTemplate(recette)
    const userCardDOM = recetteModel.getCardDOM()
    recetteSection.appendChild(userCardDOM)
 })
 updateTotal(recettes.length)
}

function updateTotal(total) {
  const totalElement = document.getElementById('total-recettes')
  totalElement.textContent = total + " recettes"
}


async function init() {
  const recettes = await getRecipes()
  displayData(recettes)
  search(recettes)
  totalIngredient(recettes)
}

init()
