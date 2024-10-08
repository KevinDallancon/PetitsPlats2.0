// Utiliser un Set pour s'assurer que les ingrédients sont uniques
const ingredientsSet = new Set();
const ustensilesSet = new Set();
const appliancesSet = new Set();

// Tableaux pour stocker les éléments sélectionnés par l'utilisateur
let selectedIngredients = [];
let selectedUstensils = [];
let selectedAppliances = [];

// Function pour mettre en majascule la premiere lettre
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function createSetTags(listRecipes) {
  for (let i = 0; i < listRecipes.length; i++) {
    const recipe = listRecipes[i];
    for (let i = 0; i < recipe.ingredients.length; i++) {
      const ingredient = recipe.ingredients[i];
      const ingredientName = ingredient.ingredient.trim().toLowerCase();
      ingredientsSet.add(ingredientName);
    }
    for (let i = 0; i < recipe.ustensils.length; i++) {
      const ustensile = recipe.ustensils[i];
      const ustensileName = ustensile.trim().toLowerCase();
      ustensilesSet.add(ustensileName);
    }
    const appareilName = recipe.appliance.trim().toLowerCase();
    appliancesSet.add(appareilName);
  }
}
// Fonction pour afficher tous les ensembles de tags
function displaySetTags() {
  const ingredientList = document.getElementById("ingredientList");
  const ingredientsSelectedList = document.getElementById(
    "ingredientsSelectedList"
  );
  const ingredientsSelected = document.getElementById("tagSelected");
  displaySetTag(
    ingredientList,
    ingredientsSet,
    ingredientsSelectedList,
    ingredientsSelected,
    "ingredient"
  );

  const appareilsList = document.getElementById("appareilsList");
  const appareilsSelectedList = document.getElementById(
    "appareilsSelectedList"
  );
  const appareilsSelected = document.getElementById("tagSelected");
  displaySetTag(
    appareilsList,
    appliancesSet,
    appareilsSelectedList,
    appareilsSelected,
    "appliance"
  );

  const ustensilesList = document.getElementById("ustensilesList");
  const ustensilesSelectedList = document.getElementById(
    "ustensilesSelectedList"
  );
  const ustensilesSelected = document.getElementById("tagSelected");
  displaySetTag(
    ustensilesList,
    ustensilesSet,
    ustensilesSelectedList,
    ustensilesSelected,
    "ustensil"
  );

  // Ecouteur d'evenement pour filtrer les inputs
  document
    .getElementById("ingredientInput")
    .addEventListener("input", function () {
      const filteredIngredients = filterTags(this.value, ingredientsSet);
      displaySetTag(
        ingredientList,
        filteredIngredients,
        ingredientsSelectedList,
        ingredientsSelected,
        "ingredient"
      );
    });

  document
    .getElementById("appareilInput")
    .addEventListener("input", function () {
      const filteredAppliances = filterTags(this.value, appliancesSet);
      displaySetTag(
        appareilsList,
        filteredAppliances,
        appareilsSelectedList,
        appareilsSelected,
        "appliance"
      );
    });

  document
    .getElementById("ustensileInput")
    .addEventListener("input", function () {
      const filteredUstensils = filterTags(this.value, ustensilesSet);
      displaySetTag(
        ustensilesList,
        filteredUstensils,
        ustensilesSelectedList,
        ustensilesSelected,
        "ustensil"
      );
    });
}

function displaySetTag(
  listTagDom,
  tagSet,
  tagSelectedList,
  tagSelected,
  tagType
) {
  listTagDom.innerHTML = ""; // Vider le contenu précédent

  for (const tag of tagSet) {
    // Vérifier si le tag est déjà sélectionné
    const isAlreadySelected =
      (tagType === "ingredient" &&
        selectedIngredients.some(
          (item) => item.toLowerCase() === tag.toLowerCase()
        )) ||
      (tagType === "ustensil" &&
        selectedUstensils.some(
          (item) => item.toLowerCase() === tag.toLowerCase()
        )) ||
      (tagType === "appliance" &&
        selectedAppliances.some(
          (item) => item.toLowerCase() === tag.toLowerCase()
        ));

    // Ne créer l'élément que si le tag n'est pas déjà sélectionné
    if (!isAlreadySelected) {
      const div = document.createElement("div");
      div.classList.add("tag-style");
      div.textContent = capitalizeFirstLetter(tag);
      div.setAttribute("data-tag-type", tagType); // Ajout de l'attribut data-tag-type

      // rendre la div cliquable et ajouter l'element dans tagSelectedList
      div.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(`Tag cliqué: ${this.textContent}, Type: ${tagType}`);
        // cacher l'element selectionné de la liste
        this.style.display = "none";

        // ajouter le tag en jaune au top
        const divSelected = document.createElement("div");
        divSelected.classList.add("tag-selected");
        divSelected.textContent = this.textContent;
        divSelected.setAttribute("data-tag-type", tagType); // Ajout de l'attribut data-tag-type

        // Créez une icône de croix
        const icon = document.createElement("i");
        icon.className = "fa fa-times";
        divSelected.appendChild(icon);

        icon.addEventListener("click", function () {
          deleteTag(divSelectedG, divSelected, div, tagType);
        });

        tagSelectedList.appendChild(divSelected);

        const divSelectedG = document.createElement("div");
        divSelectedG.classList.add("tag-selectedGeneral");
        divSelectedG.textContent = this.textContent;
        divSelectedG.setAttribute("data-tag-type", tagType); // Ajout de l'attribut data-tag-type

        // Créez une icône de croix
        const iconTag = document.createElement("i");
        iconTag.className = "fa fa-times";
        divSelectedG.appendChild(iconTag);

        iconTag.addEventListener("click", function () {
          deleteTag(divSelectedG, divSelected, div, tagType);
        });

        tagSelected.appendChild(divSelectedG);

        ///
        if (this.textContent.trim() !== "") {
          const tagContent = this.textContent.trim();
          const tagType = this.getAttribute("data-tag-type");

          // Ajouter ou retirer le tag de la liste appropriée
          switch (tagType) {
            case "ingredient":
              updateSelectedList(selectedIngredients, tagContent);
              break;
            case "ustensil":
              updateSelectedList(selectedUstensils, tagContent);
              break;
            case "appliance":
              updateSelectedList(selectedAppliances, tagContent);
              break;
            default:
              console.error(`Type de tag non reconnu : ${tagType}`);
              return;
          }
          searchRecipes();
        }

        ///
      });

      listTagDom.appendChild(div);
    }
  }
}

// Fonction pour supprimer un tag sélectionné
function deleteTag(divSelectedG, divSelected, div, tagType) {
  const tagContent = divSelectedG.textContent.trim();
  switch (tagType) {
    case "ingredient":
      updateSelectedList(selectedIngredients, tagContent);
      break;
    case "ustensil":
      updateSelectedList(selectedUstensils, tagContent);
      break;
    case "appliance":
      updateSelectedList(selectedAppliances, tagContent);
      break;
    default:
      console.error(`Type de tag non reconnu : ${tagType}`);
      return;
  }
  divSelected.remove();
  divSelectedG.remove();
  div.style.display = "block"; // Rendre l'élément d'origine à nouveau visible
  searchRecipes();
}

// Fonction pour rechercher des recettes basées sur les filtres actuels
function searchRecipes() {
  filtredRecipes = recipes;
  if (document.querySelector(".search-input").value.length > 2)
    filtredRecipes = simpleSearch(
      document.querySelector(".search-input").value,
      filtredRecipes
    );
  filtredRecipes = advancedSearch(
    selectedIngredients,
    selectedUstensils,
    selectedAppliances,
    filtredRecipes
  );
  displayData(filtredRecipes);
  // Ajout de cette ligne pour mettre à jour les champs de recherche avancée
  updateAdvancedSearchFields(filtredRecipes);
}

// Fonction pour basculer l'affichage d'un dropdown
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const button = dropdown.previousElementSibling;
  const icon = button.querySelector("i");

  dropdown.classList.toggle("show");

  if (dropdown.classList.contains("show")) {
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
    button.classList.add("button-radius");
  } else {
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
    button.classList.remove("button-radius");
  }
}

// Fonction pour filtrer les tags
function filterTags(inputValue, tagSet) {
  const lowerCaseInput = inputValue.toLowerCase();
  return Array.from(tagSet).filter((tag) =>
    tag.toLowerCase().includes(lowerCaseInput)
  );
}
