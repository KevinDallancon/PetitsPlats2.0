const searchInput = document.querySelector(".search-input");
const removeIcon = document.querySelector(".removeIcon");
const searchIcon = document.querySelector(".searchIcon");
const selectedList = document.querySelectorAll(".tag-style");

searchInput.addEventListener("input", function (e) {
  e.preventDefault();

  if (e.inputType == "deleteContentBackward") filtredRecipes = recipes;

  //Rajouter le controle necessaire pour executer la recherche simple
  if (this.value.length > 2) {
    filtredRecipes = simpleSearch(this.value, filtredRecipes);
  }
  filtredRecipes = advancedSearch(
    selectedIngredients,
    selectedUstensils,
    selectedAppliances,
    filtredRecipes
  );
  // Mettre à jour l'affichage avec les recettes filtrées
  displayData(filtredRecipes);
});

// Event listener pour l'icône de suppression
removeIcon.addEventListener("click", function () {
  searchInput.value = "";
  filtredRecipes = recipes;
  filtredRecipes = advancedSearch(
    selectedIngredients,
    selectedUstensils,
    selectedAppliances,
    filtredRecipes
  );
  displayData(filtredRecipes);
});

function simpleSearch(inputValue, listRecipes) {
  const lowerCaseInput = inputValue.toLowerCase();

  // Filtrer les recettes qui correspondent à la requête
  const result = listRecipes.filter(
    (recipe) =>
      // Vérifier si le nom de la recette correspond
      recipe.name.toLowerCase().includes(lowerCaseInput) ||
      recipe.description.toLowerCase().includes(lowerCaseInput) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(lowerCaseInput)
      )
  );
  return result;
}

function advancedSearch(
  listSelectedIngredients,
  listSelectedUstensiles,
  listSelectedAppareil,
  listRecipes
) {
  let listTemporaire = listRecipes;
  listSelectedIngredients.forEach((ingredient) => {
    // verifie si cet ingredient existe dans la list des recipe
    listTemporaire = searchByIngredients(ingredient, listTemporaire);
  });

  // checher les ustinsiles
  listSelectedUstensiles.forEach((ustinsile) => {
    // verifie si cet ustinsile existe dans la list des recipe
    listTemporaire = searchByUstinsiles(ustinsile, listTemporaire);
  });
  //chercher les appliances
  listSelectedAppareil.forEach((appliance) => {
    listTemporaire = searchByAppliances(appliance, listTemporaire);
  });

  // Mettre à jour les champs de recherche avancée
  updateAdvancedSearchFields(listTemporaire);

  return listTemporaire;
}

// Nouvelle fonction pour mettre à jour les champs de recherche avancée
function updateAdvancedSearchFields(recipes) {
  // Réinitialiser les ensembles
  ingredientsSet.clear();
  ustensilesSet.clear();
  appliancesSet.clear();

  // Remplir les ensembles avec les données des recettes filtrées
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ing) =>
      ingredientsSet.add(ing.ingredient.toLowerCase())
    );
    recipe.ustensils.forEach((ust) => ustensilesSet.add(ust.toLowerCase()));
    appliancesSet.add(recipe.appliance.toLowerCase());
  });

  // Mettre à jour l'affichage des tags
  displaySetTags();
}

function searchByIngredients(stringStr, listRecipes) {
  const lowerCaseInput = stringStr.toLowerCase();
  // Filtrer les recettes qui correspondent à la requête
  const result = listRecipes.filter((recipe) =>
    recipe.ingredients.some((ingredient) =>
      ingredient.ingredient.toLowerCase().includes(lowerCaseInput)
    )
  );

  return result;
}

function searchByAppliances(stringStr, listRecipes) {
  const lowerCaseInput = stringStr.toLowerCase();
  // Filtrer les recettes qui correspondent à la requête
  const result = listRecipes.filter((recipe) =>
    recipe.appliance.toLowerCase().includes(lowerCaseInput)
  );

  return result;
}

function searchByUstinsiles(stringStr, listRecipes) {
  const lowerCaseInput = stringStr.toLowerCase();
  // Filtrer les recettes qui correspondent à la requête
  const result = listRecipes.filter((recipe) =>
    recipe.ustensils.some((ustinsil) =>
      ustinsil.toLowerCase().includes(lowerCaseInput)
    )
  );

  return result;
}

function updateSelectedList(list, item) {
  const lowerCaseItem = item.toLowerCase();
  const index = list.findIndex(
    (listItem) => listItem.toLowerCase() === lowerCaseItem
  );
  if (index === -1) {
    list.push(item);
  } else {
    list.splice(index, 1);
  }
}
