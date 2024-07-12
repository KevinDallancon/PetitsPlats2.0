function totalIngredient(recipes) {
  const filterSection = document.getElementById('ingredientList');
  filterSection.innerHTML = ''; // Vider le contenu précédent

  // Utiliser un Set pour s'assurer que les ingrédients sont uniques
  const ingredientsSet = new Set();


  // Parcourir chaque recette pour extraire les ingrédients
  recipes.forEach(recipesIngredients => {
    recipesIngredients.ingredients.forEach(ingredient => {
      const ingredientName = ingredient.ingredient.trim().toLowerCase();
      ingredientsSet.add(ingredientName);
    });
  });

  // Convertir le Set en tableau pour un filtrage plus facile
  const ingredientsArray = Array.from(ingredientsSet);

  // Fonction pour afficher les ingrédients filtrés
  function displayIngredients(filteredIngredients) {
    filterSection.innerHTML = '';
    filteredIngredients.forEach(ingredient => {
      const a = document.createElement('a');
      a.textContent = capitalizeFirstLetter(ingredient);
      a.href = "#";

      // Créez une icône de croix
      const icon = document.createElement('i');
      icon.className = 'fa fa-times'; 
      icon.style.marginLeft = '10px'; 

      icon.addEventListener('click', function(event) {
        event.preventDefault(); 
        filterSection.removeChild(a); 
      });

      a.appendChild(icon);
      filterSection.appendChild(a);
    });
  }

  // Afficher tous les ingrédients au départ
  displayIngredients(ingredientsArray);

  // Ajouter un événement input pour filtrer les ingrédients
  const input = document.getElementById('ingredientInput');
  input.addEventListener('input', function() {
    const query = input.value.trim().toLowerCase();
    const filteredIngredients = ingredientsArray.filter(ingredient => ingredient.includes(query));
    displayIngredients(filteredIngredients);
  });
}

function totalAppareil(recipes) {
  const filterSection = document.getElementById('appareilsList');
  filterSection.innerHTML = ''; // Vider le contenu précédent

  // Utiliser un Set pour s'assurer que les ingrédients sont uniques
  const appareilSet = new Set();


  // Parcourir chaque recette pour extraire les ingrédients
  recipes.forEach(recipesAppareils => {
    const appareilName = recipesAppareils.appliance.trim().toLowerCase();
      appareilSet.add(appareilName);
    });
  ;

  // Convertir le Set en tableau pour un filtrage plus facile
  const appareilArray = Array.from(appareilSet);

  // Fonction pour afficher les ingrédients filtrés
  function displayAppareils(filteredAppareils) {
    filterSection.innerHTML = '';
    filteredAppareils.forEach(appareil => {
      const a = document.createElement('a');
      a.textContent = capitalizeFirstLetter(appareil);
      a.href = "#";

      // Créez une icône de croix
      const icon = document.createElement('i');
      icon.className = 'fa fa-times'; 
      icon.style.marginLeft = '10px'; 

      icon.addEventListener('click', function(event) {
        event.preventDefault(); 
        filterSection.removeChild(a); 
      });

      a.appendChild(icon);
      filterSection.appendChild(a);
    });
  }

  // Afficher tous les ingrédients au départ
  displayAppareils(appareilArray);

  // Ajouter un événement input pour filtrer les ingrédients
  const input = document.getElementById('appareilInput');
  input.addEventListener('input', function() {
    const query = input.value.trim().toLowerCase();
    const filteredAppareils = appareilArray.filter(appareil => appareil.includes(query));
    displayAppareils(filteredAppareils);
  });
}

function totalUstensile(recipes) {
  const filterSection = document.getElementById('ustensilesList');
  filterSection.innerHTML = ''; // Vider le contenu précédent

  // Utiliser un Set pour s'assurer que les ingrédients sont uniques
  const ustensileSet = new Set();

  // Parcourir chaque recette pour extraire les ustensiles
  recipes.forEach(recipe => {
  recipe.ustensils.forEach(ustensile => {
    const ustensileName = ustensile.trim().toLowerCase();
    ustensileSet.add(ustensileName);
  });
});

  // Convertir le Set en tableau pour un filtrage plus facile
  const ustensilArray = Array.from(ustensileSet);

  // Fonction pour afficher les ingrédients filtrés
  function displayUstensiles(filteredUstensiles) {
    filterSection.innerHTML = '';
    filteredUstensiles.forEach(ustensile => {
      const a = document.createElement('a');
      a.textContent = capitalizeFirstLetter(ustensile);
      a.href = "#";

      // Créez une icône de croix
      const icon = document.createElement('i');
      icon.className = 'fa fa-times'; 
      icon.style.marginLeft = '10px'; 

      icon.addEventListener('click', function(event) {
        event.preventDefault(); 
        filterSection.removeChild(a); 
      });

      a.appendChild(icon);
      filterSection.appendChild(a);
    });
  }

  // Afficher tous les ingrédients au départ
  displayUstensiles(ustensilArray);

  // Ajouter un événement input pour filtrer les ingrédients
  const input = document.getElementById('ustensileInput');
  input.addEventListener('input', function() {
    const query = input.value.trim().toLowerCase();
    const filteredUstensiles = ustensilArray.filter(ustensile => ustensile.includes(query));
    displayUstensiles(filteredUstensiles);
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const icon = document.getElementById("dropdownIcon");
  const button = document.querySelector('.dropbtn')

  dropdown.classList.toggle("show");

  if (dropdown.classList.contains("show")) {
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
    button.classList.add("button-radius");
  } else {
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
    button.classList.remove("button-radius")
  }
}
