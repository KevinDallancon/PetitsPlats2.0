function totalIngredient(dataIngredients) {
  const filterSection = document.getElementById('ingredientList');
  filterSection.innerHTML = ''; // Vider le contenu précédent

  // Utiliser un Set pour s'assurer que les ingrédients sont uniques
  const ingredientsSet = new Set();

  // Parcourir chaque recette pour extraire les ingrédients
  dataIngredients.forEach(dataIngredient => {
    dataIngredient.ingredients.forEach(ing => {
      const ingredientName = ing.ingredient.trim().toLowerCase();
      ingredientsSet.add(ingredientName);
    });
  });

  // Parcourir l'ensemble des ingrédients uniques et les ajouter à la liste déroulante
  ingredientsSet.forEach(ingredient => {
    const a = document.createElement('a');
    a.textContent = capitalizeFirstLetter(ingredient);
    a.href = "#";

        // Créez une icône de croix
    const icon = document.createElement('i');
    icon.className = 'fa fa-times'; // Utilise Font Awesome pour l'icône de croix
    icon.style.marginLeft = '10px'; // Optionnel : ajoutez un peu d'espace avant l'icône

    icon.addEventListener('click', function(event) {
      event.preventDefault(); 
      filterSection.removeChild(a); 
    });

    a.appendChild(icon);
    filterSection.appendChild(a);
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function toggleDropdown() {
  
  const dropdown = document.getElementById("myDropdown");
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
