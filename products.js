
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

  var menuIcon = document.getElementById("menuicon");
  var sideNav = document.getElementById("sidenav");
  var closeNav = document.getElementById("close-nav");

  menuIcon.addEventListener("click", function () {
    sideNav.style.left = "0%";
  });

  closeNav.addEventListener("click", function () {
    sideNav.style.left = "-50%";
  });

