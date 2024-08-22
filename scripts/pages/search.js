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
  const result = [];

  for (let i = 0; i < listRecipes.length; i++) {
    const recipe = listRecipes[i];

    // Vérifier si le nom ou la description de la recette correspond
    if (
      recipe.name.toLowerCase().includes(lowerCaseInput) ||
      recipe.description.toLowerCase().includes(lowerCaseInput)
    ) {
      result.push(recipe);
      continue; // Passer à la recette suivante
    }

    // Vérifier les ingrédients
    let ingredientFound = false;
    for (let j = 0; j < recipe.ingredients.length; j++) {
      if (
        recipe.ingredients[j].ingredient.toLowerCase().includes(lowerCaseInput)
      ) {
        ingredientFound = true;
        break; // Sortir de la boucle des ingrédients
      }
    }

    if (ingredientFound) {
      result.push(recipe);
    }
  }

  return result;
}

function updateAdvancedSearchFields(filteredRecipes) {
  ingredientsSet.clear();
  ustensilesSet.clear();
  appliancesSet.clear();

  for (let i = 0; i < filteredRecipes.length; i++) {
    const recipe = filteredRecipes[i];
    for (let j = 0; j < recipe.ingredients.length; j++) {
      const ingredient = recipe.ingredients[j];
      ingredientsSet.add(ingredient.ingredient.toLowerCase());
    }
    for (let j = 0; j < recipe.ustensils.length; j++) {
      ustensilesSet.add(recipe.ustensils[j].toLowerCase());
    }
    appliancesSet.add(recipe.appliance.toLowerCase());
  }

  displaySetTags();
}

function advancedSearch(
  listSelectedIngredients,
  listSelectedUstensiles,
  listSelectedAppareil,
  listRecipes
) {
  let listTemporaire = listRecipes;

  for (let i = 0; i < listSelectedIngredients.length; i++) {
    const ingredient = listSelectedIngredients[i];
    // Vérifie si cet ingrédient existe dans la liste des recettes
    listTemporaire = searchByIngredients(ingredient, listTemporaire);
  }
  for (let i = 0; i < listSelectedUstensiles.length; i++) {
    const ustensile = listSelectedUstensiles[i];
    // Vérifie si cet ustensile existe dans la liste des recettes
    listTemporaire = searchByUstinsiles(ustensile, listTemporaire);
  }

  for (let i = 0; i < listSelectedAppareil.length; i++) {
    const appareil = listSelectedAppareil[i];
    // Vérifie si cet appareil existe dans la liste des recettes
    listTemporaire = searchByAppliances(appareil, listTemporaire);
  }
  updateAdvancedSearchFields(listTemporaire);
  return listTemporaire;
}

function searchByIngredients(stringStr, listRecipes) {
  const lowerCaseInput = stringStr.toLowerCase();
  const result = [];

  for (let i = 0; i < listRecipes.length; i++) {
    const recipe = listRecipes[i];
    let ingredientFound = false;

    for (let j = 0; j < recipe.ingredients.length; j++) {
      if (
        recipe.ingredients[j].ingredient.toLowerCase().includes(lowerCaseInput)
      ) {
        ingredientFound = true;
        break;
      }
    }

    if (ingredientFound) {
      result.push(recipe);
    }
  }

  return result;
}

function searchByAppliances(stringStr, listRecipes) {
  const lowerCaseInput = stringStr.toLowerCase();
  const result = [];

  for (let i = 0; i < listRecipes.length; i++) {
    const recipe = listRecipes[i];

    if (recipe.appliance.toLowerCase().includes(lowerCaseInput)) {
      result.push(recipe);
    }
  }

  return result;
}

function searchByUstinsiles(stringStr, listRecipes) {
  const lowerCaseInput = stringStr.toLowerCase();
  const result = [];

  for (let i = 0; i < listRecipes.length; i++) {
    const recipe = listRecipes[i];
    let ustensilFound = false;

    for (let j = 0; j < recipe.ustensils.length; j++) {
      if (recipe.ustensils[j].toLowerCase().includes(lowerCaseInput)) {
        ustensilFound = true;
        break;
      }
    }

    if (ustensilFound) {
      result.push(recipe);
    }
  }

  return result;
}

function updateSelectedList(list, item) {
  const index = list.indexOf(item);
  if (index === -1) {
    list.push(item);
  } else {
    list.splice(index, 1);
  }
}
