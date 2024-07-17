let filtredRecipes = recipes;

function displayData(recettes) {
  const recetteSection = document.querySelector(".recettes_section");
  recetteSection.innerHTML = "";

  recettes.forEach((recette) => {
    const recetteModel = recipeTemplate(recette);
    const userCardDOM = recetteModel.getCardDOM();
    recetteSection.appendChild(userCardDOM);
  });
  updateTotal(recettes.length);
}

function updateTotal(total) {
  const totalElement = document.getElementById("total-recettes");
  totalElement.textContent = total + " recettes";
}

function init() {
  displayData(filtredRecipes);
  //creer les 3 set des tags
  createSetTags(filtredRecipes);
  // Afficher les 3 set de tags sur le dom
  displaySetTags();
}

init();
