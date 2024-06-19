export function recetteTemplate (data) {
  const { id, image, name, servings, ingredients, time, description, appliance, ustensils } = data

  const picture = `assets/${image}`

  function getCardDOM () {

    const article = document.createElement('article')
    // Creation de l'image de la recette
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.setAttribute('alt', name)
    // Creation du titre de la recette
    const h2 = document.createElement('h2')
    h2.textContent = name

    // Creation de la div Description
    const divDescription = document.createElement('div')
    // Titre de la recette
    const titleDescription = document.createElement('h3')
    titleDescription.textContent = "RECETTE"
    // Description de la recette
    const descriptionRecette = document.createElement('p')
    descriptionRecette.textContent = description

    // Creation de la div Ingredient
    const divIngredient = document.createElement('div')
    // Titre de l'ingredient 
    const titleIngredient = document.createElement('h3')
    titleIngredient.textContent = "INGREDIENTS"
    // Liste des ingrédients
    const ulIngredient = document.createElement('ul');
    ingredients.forEach(ingredient => {
      const li = document.createElement('li')
      li.textContent = `${ingredient.ingredient} ${ingredient.quantity}`;
      ulIngredient.appendChild(li)
    });

    // // Ajout des elements au dom
    article.appendChild(img)
    article.appendChild(h2)
    article.appendChild(divDescription)
    article.appendChild(divIngredient)
    divDescription.appendChild(titleDescription)
    divDescription.appendChild(descriptionRecette)
    divIngredient.appendChild(titleIngredient)
    divIngredient.appendChild(ulIngredient)

    return (article)
  }
  return { getCardDOM }
}