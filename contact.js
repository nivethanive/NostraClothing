
var menuIcon = document.getElementById("menuicon");
  var sideNav = document.getElementById("sidenav");
  var closeNav = document.getElementById("close-nav");

  menuIcon.addEventListener("click", function () {
    sideNav.style.left = "0%";
  });

  closeNav.addEventListener("click", function () {
    sideNav.style.left = "-50%";
  });