// function search() {
//   const searchInput = document.querySelector('.search-input');
//   console.log(searchInput);
//   const searchButton = document.querySelector('.search-button');
//   console.log(searchButton);

//   searchButton.addEventListener('change', function() {
//     // get the search input value
//     const inputValue = searchInput.target.value
//     console.log(inputValue);
    
//     if (inputValue >= 3 ) {
//       console.log("bien joué");
//     } else {
//       console.log("Erreur, j'ai pas trouvé la recette");
//     }
//   });

//   searchInput.addEventListener('keyup', function(event) {
//     if (event.keyCode === 13) {
//       // simulate a button click to trigger the search
//       searchButton.click();
//     }
//   });
// }