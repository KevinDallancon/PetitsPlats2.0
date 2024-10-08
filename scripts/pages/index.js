let filtredRecipes = recipes;

function displayData(recettes) {
  const recetteSection = document.querySelector(".recettes_section");
  recetteSection.innerHTML = "";

  if (recettes.length === 0) {
    const searchInput = document.querySelector(".search-input");
    const searchTerm = searchInput.value;
    const noResultMessage = document.createElement("p");
    noResultMessage.classList.add("no-result-message");
    noResultMessage.textContent = `Aucune recette ne contient '${searchTerm}'. Vous pouvez chercher « tarte aux pommes », « poisson », etc.`;
    recetteSection.appendChild(noResultMessage);
  } else {
    recettes.forEach((recette) => {
      const recetteModel = recipeTemplate(recette);
      const userCardDOM = recetteModel.getCardDOM();
      recetteSection.appendChild(userCardDOM);
    });
  }
  updateTotal(recettes.length);
}

function updateTotal(total) {
  const totalElement = document.getElementById("total-recettes");
  if (total <= 1) {
    totalElement.textContent = total + " recette";
  } else {
    totalElement.textContent = total + " recettes";
  }
}

function init() {
  displayData(filtredRecipes);
  //creer les 3 set des tags
  createSetTags(filtredRecipes);
  // Afficher les 3 set de tags sur le dom
  displaySetTags();
}

init();
