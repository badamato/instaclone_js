var THUMB_IMG = "[data-indiv-img]";
var MAIN_IMG = "[data-target-main]";  
var MY_MODAL = "[data-myModal]";
var IMG_01 = "[data-img01]";
var CAPTION = "[data-caption]";

var images = [
  "images/meerkat_mom.jpg",
  "images/meerkat_rocks.jpg",
  "images/meerkat_fam.jpg",
  "images/meerkat_lounging.jpg",
  "images/meerkat_group.jpg",
  "images/meerkat_pose.jpg",
];

var footWords = [
  'ABOUT US',
  'SUPPORT',
  'BLOG',
  'PRESS',
  'API',
  'JOBS',
  'PRIVACY',
  'TERMS',
  'DIRECTORY',
  'PROFILES',
  'HASHTAGS',
  'LANGUAGE'  
];

var navItems = document.querySelectorAll(THUMB_IMG);
var imgTarget = document.querySelector(MAIN_IMG);
var modal = document.querySelector(MY_MODAL);
var modalImg = document.querySelector(IMG_01);
var captionText = document.querySelector(CAPTION);
var span = document.getElementsByClassName("close")[0];


function createHeader() { 
  //create header container
  var footerContainer = document.createElement("div", 
  {class: "footerCont"});
  var footerMenu = document.createElement("ul",
  {class: "footerMenu"});
  footerContainer.appendChild(footerMenu);

  //cycle over each nav item
  for(var i = 0; i < footWords.length; i++) {

    //create fresh list item and anchor
    var liTag = document.createElement("li");
    var aTag = document.createElement("a");

    //set properties on anchor
    aTag.setAttribute("href", "#");
    aTag.innerHTML = footWords[i];

    //add anchor to list item, and list item to list
    liTag.appendChild(aTag);
    footerMenu.appendChild(liTag);
  }

  function appendFooterToBody(footdiv) {
    body.appendChild(footerContainer);
  }

}


  navItems.forEach(function (nav) {
    nav.addEventListener("click", function (event) {
      event.preventDefault();
      imgTarget.setAttribute("src", nav.getAttribute("href"));

      var imageInside = nav.querySelector("img");
      imgTarget.setAttribute("alt", imageInside.getAttribute("alt"))
    })
  });


  imgTarget.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  span.onclick = function() { 
    modal.style.display = "none";
  }
  


function createFooter() { 
  //create footer container
  var footerContainer = document.createElement("div", 
  {class: "footerCont"});
  var footerMenu = document.createElement("ul",
  {class: "footerMenu"});
  footerContainer.appendChild(footerMenu);

  //cycle over each nav item
  for(var i = 0; i < footWords.length; i++) {

    //create fresh list item and anchor
    var liTag = document.createElement("li");
    var aTag = document.createElement("a");

    //set properties on anchor
    aTag.setAttribute("href", "#");
    aTag.innerHTML = footWords[i];

    //add anchor to list item, and list item to list
    liTag.appendChild(aTag);
    footerMenu.appendChild(liTag);
  }

  // Add list to body (or anywhere else)
  window.onload = function () {
    document.body.appendChild(footerContainer);
  }

}


// function main() {
//   createHeader();
//   createFooter();
//   createMainImgContainer();
//   addTheModal();
// }

// main();