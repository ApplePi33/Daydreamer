/* Loads Head Info */
document.getElementById("headInfo").innerHTML =
"<title>Daydreamer</title>" +
"<link rel='shortcut icon' href='/Daydreamer/images/Logo.png' />" +
"<link rel='stylesheet' href='/Daydreamer/css/main.css' />" +
"<link rel='preconnect' href='https://fonts.googleapis.com' />" +
"<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />" +
"<link href='https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;600&display=swap' rel='stylesheet'/>";

/* Loads Navigation Bar */
document.getElementById("navBar").innerHTML =
  "<nav class='navbar'>" +
  "<div class='navbar__container'><a href='/Daydreamer/index.html'><img src='/Daydreamer/images/Logo.png' class='navbar__logo'/></a>" +
  "<div class='navbar__toggle' id='mobile-menu'>" +
  "<span class='bar'></span>" +
  "<span class='bar'></span>" +
  "<span class='bar'></span>" +
  "</div>" +
  "<ul class='navbar__menu'>" +
  "<li class='navbar__item'><a href='/Daydreamer/categories/music.html' class='navbar__links'> Music </a></li>" +
  "<li class='navbar__item'><a href='/Daydreamer/categories/twitch.html' class='navbar__links'>Twitch </a></li>" +
  "<li class='navbar__item'><a href='/Daydreamer/categories/youtube.html' class='navbar__links'>YouTube</a></li>" +
  "<li class='navbar__item'><a href='/Daydreamer/categories/submissions.html' class='navbar__links'>Submissions</a></li>" +
  "<li class='navbar__button'><a href='/Daydreamer/categories/Login/login.html' class='button'> Log In </a></li>" +
  "</ul>" +
  "</div>" +
  "</nav>";
/*document.getElementById("myFooter").innerHTML =
  "<p id='copyright'>Copyright &copy; " +
  new Date().getFullYear() +
  " You. All" +
  " rights reserved.</p>" +
  "<p id='credits'>Layout by You</p>" +
  "<p id='contact'><a href='mailto:you@you.com'>Contact Us</a> / " +
  "<a href='mailto:you@you.com'>Report a problem.</a></p>";*/

/* Mobile Menu */
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})