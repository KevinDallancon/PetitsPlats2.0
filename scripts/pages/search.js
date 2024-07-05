const searchInput = document.querySelector('.search-input');
const removeIcon = document.querySelector('.removeIcon');
const searchIcon = document.querySelector('.searchIcon');

searchInput.addEventListener('input', function(e){
  e.preventDefault();
  //Rajouter le controle necessaire pour executer la recherche simple
  if(this.value.length > 2){
    const filteredRecipes = simpleSearch(this.value);
    // Mettre à jour l'affichage avec les recettes filtrées
    displayData(filteredRecipes);
  }
});

// Event listener pour l'icône de suppression
removeIcon.addEventListener('click', function() {
  searchInput.value = '';
  displayData(recipes);
});

function simpleSearch(inputValue) {
  
  const lowerCaseInput = inputValue.toLowerCase();

  // Filtrer les recettes qui correspondent à la requête
  const filteredRecipes = recipes.filter(recipe => {
    // Vérifier si le nom de la recette correspond
    if (recipe.name.toLowerCase().includes(lowerCaseInput)) {
      return true;
    }

    // Vérifier si la description correspond
    if (recipe.description.toLowerCase().includes(lowerCaseInput)) {
      return true;
    }

    // Vérifier si l'un des ingrédients correspond
    return recipe.ingredients.some(ingredient => 
      ingredient.ingredient.toLowerCase().includes(lowerCaseInput)
    );
  });
  return filteredRecipes;
}

