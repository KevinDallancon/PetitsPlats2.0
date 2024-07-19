// Utiliser un Set pour s'assurer que les ingrédients sont uniques
const ingredientsSet = new Set();
const ustensilesSet = new Set();
const appliancesSet = new Set();

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function createSetTags(listRecipes) {
  // Parcourir chaque recette pour extraire les ingrédients
  listRecipes.forEach((recipe) => {
    // remplir le set des ingredients
    recipe.ingredients.forEach((ingredient) => {
      const ingredientName = ingredient.ingredient.trim().toLowerCase();
      ingredientsSet.add(ingredientName);
    });
    // remplir le set des ustensils
    recipe.ustensils.forEach((ustensile) => {
      const ustensileName = ustensile.trim().toLowerCase();
      ustensilesSet.add(ustensileName);
    });

    const appareilName = recipe.appliance.trim().toLowerCase();
    appliancesSet.add(appareilName);
  });
}

function displaySetTags() {
  const ingredientList = document.getElementById("ingredientList");
  const ingredientsSelectedList = document.getElementById(
    "ingredientsSelectedList"
  );
  const ingredientsSelected = document.getElementById("ingredientsSelected");
  displaySetTag(
    ingredientList,
    ingredientsSet,
    ingredientsSelectedList,
    ingredientsSelected
  );

  const appareilsList = document.getElementById("appareilsList");
  const appareilsSelectedList = document.getElementById(
    "appareilsSelectedList"
  );
  const appareilsSelected = document.getElementById("appareilsSelected");
  displaySetTag(
    appareilsList,
    appliancesSet,
    appareilsSelectedList,
    appareilsSelected
  );

  const ustensilesList = document.getElementById("ustensilesList");
  const ustensilesSelectedList = document.getElementById(
    "ustensilesSelectedList"
  );
  const ustensilesSelected = document.getElementById("ustensilesSelected");
  displaySetTag(
    ustensilesList,
    ustensilesSet,
    ustensilesSelectedList,
    ustensilesSelected
  );
}

function displaySetTag(listTagDom, tagSet, tagSelectedList, tagSelected) {
  listTagDom.innerHTML = ""; // Vider le contenu précédent

  tagSet.forEach((ingredient) => {
    const div = document.createElement("div");
    div.classList.add("tag-style");
    div.textContent = capitalizeFirstLetter(ingredient);

    // rendre la div cliquable et ajuter l'element dans tagSelectedList
    div.addEventListener("click", function (e) {
      e.preventDefault();
      const divSelected = document.createElement("div");
      divSelected.classList.add("tag-selected");
      divSelected.textContent = this.textContent;

      // Créez une icône de croix
      const icon = document.createElement("i");
      icon.className = "fa fa-times";
      divSelected.appendChild(icon);

      icon.addEventListener("click", function () {
        divSelected.remove();
        divSelectedCopy.remove();
        div.style.display = ""; // Rendre l'élément d'origine à nouveau visible
      });

      tagSelectedList.appendChild(divSelected);

      const divSelectedCopy = document.createElement("div");
      divSelectedCopy.classList.add("tag-selected-copy");
      divSelectedCopy.textContent = this.textContent;

      // Créez une icône de croix
      const iconTag = document.createElement("i");
      iconTag.className = "fa fa-times";
      divSelectedCopy.appendChild(iconTag);

      iconTag.addEventListener("click", function () {
        divSelected.remove();
        divSelectedCopy.remove();
        div.style.display = ""; // Rendre l'élément d'origine à nouveau visible
      });

      tagSelected.appendChild(divSelectedCopy);

      this.style.display = "none";
    });

    listTagDom.appendChild(div);
  });
}

// function totalIngredient(recipes) {
//   // Créez une icône de croix
//   const icon = document.createElement("i");
//   icon.className = "fa fa-times";
//   icon.style.marginLeft = "10px";

//   icon.addEventListener("click", function (event) {
//     event.preventDefault();
//     filterSection.removeChild(a);
//   });

//   a.appendChild(icon);
// }

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
