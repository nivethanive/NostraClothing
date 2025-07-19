
  var searchInput = document.querySelector('.navbar-search input');
  var productCards = document.querySelectorAll('.product-section .products > div');

  searchInput.addEventListener('input', function () {
    var searchValue = this.value.toLowerCase();

    productCards.forEach(function (card) {
      var productName = card.querySelector('h1').textContent.toLowerCase();
      if (productName.includes(searchValue)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });

