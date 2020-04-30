/* ##### SIDEBAR MENU ##### */

$(document).ready(function () {

  function toggleSidebar() {
    $(".button").toggleClass("active");
    $("main").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");
  }

  $(".button").on("click tap", function () {
    toggleSidebar();
  });

  $(".sidebar-item").on("click tap", function () {
    toggleSidebar();
  });

  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });

});

/* ###################################### */

/* ##### INTRODUCTION TEXT ##### */

const introContent = document.querySelector("#introduction__text");

introContent.innerHTML = "< HELLO ! />";

/* ###################################### */


/* ##### SCROLL UP ##### */


// ########## GET SCROLL UP BUTTON ########## //

// const scrollupBtn = document.querySelector('.scrollup-btn');

// window.addEventListener('scroll', () => 
// {          
//     const scrolled = window.scrollY;    

//     if (Math.ceil(scrolled) === 0)
//     {
//         document.querySelector('.scrollup-btn').style.opacity = "0";

//     } else {
//         document.querySelector('.scrollup-btn').style.opacity = "1";
//     }   
// });


// const scrollUp = scrollupBtn.addEventListener('click', () => 
// {
//     let anchorTop = document.querySelector("#scrolltop-anchor");
//     anchorTop.getAttribute("#top-anchor");
//     anchorTop.scrollIntoView({ behavior: 'smooth' });
//     return anchorTop;
// });


// ########## MENU SECTION SCROLL ########## //

const introLink = document.querySelector("#intro-link");
const graduationLink = document.querySelector("#graduation-link");
const skillsLink = document.querySelector("#skills-link");
const portfolioLink = document.querySelector("#portfolio-link");
const contactLink = document.querySelector("#contact-link");


introLink.addEventListener("click", () => {
  const introAnchor = document.querySelector("#intro-anchor");
  introAnchor.getAttribute("#intro");
  introAnchor.scrollIntoView({ behavior: 'smooth' });
});

graduationLink.addEventListener("click", () => {
  const graduationAnchor = document.querySelector("#graduation-anchor");
  graduationAnchor.getAttribute("#graduation");
  graduationAnchor.scrollIntoView({ behavior: 'smooth' });
});

skillsLink.addEventListener("click", () => {
  const skillsAnchor = document.querySelector("#skills-anchor");
  skillsAnchor.getAttribute("#skills");
  skillsAnchor.scrollIntoView({ behavior: 'smooth' });
});

portfolioLink.addEventListener("click", () => {
  const portfolioAnchor = document.querySelector("#portfolio-anchor");
  portfolioAnchor.getAttribute("#portfolio");
  portfolioAnchor.scrollIntoView({ behavior: 'smooth' });
});

contactLink.addEventListener("click", () => {
  const contactAnchor = document.querySelector("#contact-anchor");
  contactAnchor.getAttribute("#contact");
  contactAnchor.scrollIntoView({ behavior: 'smooth' });
});

/* ###################################### */
