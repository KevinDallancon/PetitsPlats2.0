const searchInput = document.querySelector('.search-input');
const removeIcon = document.querySelector('.removeIcon');
const searchIcon = document.querySelector('.searchIcon');

searchInput.addEventListener('input', function(e){
  e.preventDefault();

  if(e.inputType == "deleteContentBackward")
  filtredRecipes = recipes;

  //Rajouter le controle necessaire pour executer la recherche simple
  if(this.value.length > 2){ 
    filtredRecipes = simpleSearch(this.value, filtredRecipes);
  }

  // Mettre à jour l'affichage avec les recettes filtrées
  displayData(filtredRecipes);
});

// Event listener pour l'icône de suppression
removeIcon.addEventListener('click', function() {
  searchInput.value = '';
  displayData(recipes);
});

function simpleSearch(inputValue, listRecipes) {
  
  const lowerCaseInput = inputValue.toLowerCase();

  // Filtrer les recettes qui correspondent à la requête
  const result = listRecipes.filter(recipe =>   
    // Vérifier si le nom de la recette correspond
    (recipe.name.toLowerCase().includes(lowerCaseInput) || 
      recipe.description.toLowerCase().includes(lowerCaseInput) ||
      recipe.ingredients.some(ingredient => 
      ingredient.ingredient.toLowerCase().includes(lowerCaseInput))
  ));

  return result;
}

function advancedSearch(inputIngredients, inputUstensiles, inputAppareil, listRecipes) {
  // Filtrer les recettes en fonction des critères de recherche avancée
  const result = listRecipes.filter(recipe => {
    // Vérifier si les ingrédients correspondent
    const ingredientsCheck = inputIngredients.every(ingredient =>
      recipe.ingredients.some(recipeIngredient =>
        recipeIngredient.toLowerCase().includes(ingredient.toLowerCase())
      )
    );

    // Vérifier si les ustensiles correspondent
    const ustensilesCheck = inputUstensiles.every(ustensile =>
      recipe.ustensiles.some(recipeUstensile =>
        recipeUstensile.toLowerCase().includes(ustensile.toLowerCase())
      )
    );

    // Vérifier si l'appareil correspond
    const appareilCheck = recipe.appareil.toLowerCase().includes(inputAppareil.toLowerCase());

    // Retourner true si tous les critères de recherche avancée correspondent
    return ingredientsCheck && ustensilesCheck && appareilCheck;
  });

  return result;
}