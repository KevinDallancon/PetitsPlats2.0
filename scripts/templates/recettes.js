export function recetteTemplate (data) {
  const { id, image, name, servings, ingredients, time, description, appliance, ustensils } = data

  const picture = `./assets/${image}`

  function getCardDOM () {

    const article = document.createElement('article')

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    
    // Creation de l'image de la recette
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.setAttribute('alt', name)

    // Creation du time
    const elementTime = document.createElement('span')
    elementTime.classList.add('time')
    elementTime.textContent = time + "min";

    // Creation d'une div container
    const divContainer = document.createElement('div')
    divContainer.classList.add('recette-container')

    // Creation du titre de la recette
    const h2 = document.createElement('h2')
    h2.textContent = name
    // Creation de la div Description
    const divDescription = document.createElement('div')
    divDescription.classList.add('recette-description')
    // Titre de la recette
    const titleDescription = document.createElement('h3')
    titleDescription.textContent = "RECETTE"
    // Description de la recette
    const descriptionRecette = document.createElement('p')
    descriptionRecette.textContent = description

    // Creation de la div Ingredient
    const divIngredient = document.createElement('div')
    divIngredient.classList.add('recette-ingredient')
    // Titre de l'ingredient 
    const titleIngredient = document.createElement('h3')
    titleIngredient.textContent = "INGREDIENTS"
    // Liste des ingrédients
    const ulIngredient = document.createElement('ul');
    ingredients.forEach(ingredient => {
      const li = document.createElement('li');

      // Créez un élément span pour le nom de l'ingrédient
      const ingredientName = document.createElement('span');
      ingredientName.textContent = ingredient.ingredient;
      ingredientName.classList.add('ingredient-name')

      // Créez un élément span pour la quantité
      const ingredientQuantity = document.createElement('span');
      ingredientQuantity.textContent = ingredient.quantity ? `${ingredient.quantity}` : '';
      ingredientQuantity.classList.add('ingredient-quantity')

      // Ajoutez les spans à l'élément li
      li.appendChild(ingredientName);
      li.appendChild(ingredientQuantity);

      // Ajoutez l'élément li à la liste ul
      ulIngredient.appendChild(li);
    });

    // // Ajout des elements au dom
    article.appendChild(imgContainer)
    article.appendChild(divContainer)
    divContainer.appendChild(h2)
    divContainer.appendChild(divDescription)
    divContainer.appendChild(divIngredient)
    imgContainer.appendChild(img)
    imgContainer.appendChild(elementTime)
    divDescription.appendChild(titleDescription)
    divDescription.appendChild(descriptionRecette)
    divIngredient.appendChild(titleIngredient)
    divIngredient.appendChild(ulIngredient)
    

    return (article)
  }
  return { getCardDOM }
}