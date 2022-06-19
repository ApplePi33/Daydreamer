/* Loads Head Info */
document.getElementById("headInfo").innerHTML =
"<title>Daydreamer Music</title>" +
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
  "<li class='navbar__button'><a href='/Daydreamer/categories/login/login.html' class='button'> Log In </a></li>" +
  "</ul>" +
  "</div>" +
  "</nav>";

  /* Loads Footer */
document.getElementById("footer").innerHTML =
"<div class='footer__container'>" +
  "<div class='footer__cards'>" +
    "<div class='footer__cards--wrapper'>" +
      "<div class='footer__cards--items'>" +
        "<h2>About Us</h2>" +
        "<p>Our goal is to help small artists share their music with the world, by giving them a platform and connecting them with curators.</p>" +
        "</div>" +
        "<div class='footer__cards--items'>" +
        "<h2>Categories</h2>" +
        "<a href='/Daydreamer/categories/youtube.html'>Youtube</a>" +
        "<a href='/Daydreamer/categories/music.html'>Music</a>" +
        "<a href='/Daydreamer/categories/submissions.html'>Submissions</a>" +
        "<a href='/Daydreamer/categories/twitch.html'>Twitch</a>" +
        "</div>" +
        "</div>" +
        "<div class='footer__cards--wrapper'>" +
        "<div class='footer__cards--items'>" +
        "<h2>Socials</h2>" +
        "<a href='https://discord.gg/6bb24kFMas' target='_blank'>Discord</a>" +
        "<a href='https://www.submithub.com/blog/daydreamer-music' target='_blank'>Submit Hub</a>" +
        "<a href='https://www.youtube.com/DaydreamerMusicOfficial' target='_blank'>YouTube</a>" +
        "<a href='https://www.twitch.tv/applepi33' target='_blank'>Twitch</a>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='footer__copyright'>" +
        "<p>&copy;" +
        "<script>document.write(new Date().getFullYear());</script>" + 
        "Daydreamer Music All rights reserved" +
        "</p>" +
        "</div>" +
        "</div>";

/* Mobile Menu */
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})