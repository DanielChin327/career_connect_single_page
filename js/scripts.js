window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) { // When scrolled more than 50px, change navbar style
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
