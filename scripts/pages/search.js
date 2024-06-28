function simpleSearch() {
  const searchInput = document.querySelector('.search-input');
  console.log(searchInput);
  const searchButton = document.querySelector('.search-button');
  console.log(searchButton);

  searchButton.addEventListener('click', function() {
    event.preventDefault();
    const inputValue = searchInput.value
    console.log(inputValue);
    
    if (inputValue.length >= 3 ) {
      console.log("ok");
    } else {
      console.log("ko");
    }
  });
}