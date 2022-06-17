/* Loads Navigation Bar And Footer On Every Page */
document.getElementById("navBar").innerHTML =
  "<nav class='navbar'>" +
  "<div class='navbar__container'><a href='index.html'><img src='images/Logo.png' class='navbar__logo'/></a>" +
  "<div class='navbar__toggle' id='mobile-menu'>" +
  "<span class='bar'></span>" +
  "<span class='bar'></span>" +
  "<span class='bar'></span>" +
  "</div>" +
  "<ul class='navbar__menu'>" +
  "<li class='navbar__item'><a href='categories/music.html' class='navbar__links'> Music </a></li>" +
  "<li class='navbar__item'><a href='categories/twitch.html' class='navbar__links'>Twitch </a></li>" +
  "<li class='navbar__item'><a href='categories/youtube.html' class='navbar__links'>YouTube</a></li>" +
  "<li class='navbar__item'><a href='categories/submissions.html' class='navbar__links'>Submissions</a></li>" +
  "<li class='navbar__button'><a href='categories/Login/login.html' class='button'> Log In </a></li>" +
  "</ul>" +
  "</div>" +
  "</nav>";
document.getElementById("myFooter").innerHTML =
  "<p id='copyright'>Copyright &copy; " +
  new Date().getFullYear() +
  " You. All" +
  " rights reserved.</p>" +
  "<p id='credits'>Layout by You</p>" +
  "<p id='contact'><a href='mailto:you@you.com'>Contact Us</a> / " +
  "<a href='mailto:you@you.com'>Report a problem.</a></p>";