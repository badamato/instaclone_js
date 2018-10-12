var THUMB_IMG = "[data-indiv-img]";
var MAIN_IMG = "[data-target-main]";  
var MY_MODAL = "[data-myModal]";
var IMG_01 = "[data-img01]";
var CAPTION = "[data-caption]";

var katImages = [
  "images/meerkat_mom.jpg",
  "images/meerkat_rocks.jpg",
  "images/meerkat_fam.jpg",
  "images/meerkat_lounging.jpg",
  "images/meerkat_group.jpg",
  "images/meerkat_pose.jpg",
];

var katAlt = [
  "get outta my way, YOU!",
  "dude, they can't see us",
  "why are your ears dirty",
  "Buuuuuuup!",
  "...and we're SMI-LING!",
  "THIS...is a meerkat"
];

var footWords = [
  "ABOUT US",
  "SUPPORT",
  "BLOG",
  "PRESS",
  "API",
  "JOBS",
  "PRIVACY",
  "TERMS",
  "DIRECTORY",
  "PROFILES",
  "HASHTAGS",
  "LANGUAGE"  
];

var headLinks = [
  "images/compass.png",
  "images/heart.png",
  "images/person.png"
];

var navItems = document.querySelectorAll(THUMB_IMG);
var imgTarget = document.querySelector(MAIN_IMG);
var modal = document.querySelector(MY_MODAL);
var modalImg = document.querySelector(IMG_01);
var captionText = document.querySelector(CAPTION);
var span = document.getElementsByClassName("close")[0];


function createHeader() { 
  //create header container
  var headerContainer = document.createElement("div");
  headerContainer.classList.add("headerCont"); 
  var headSpaceLeft = document.createElement("div");
  headSpaceLeft.classList.add("headerSpaceLeft"); 
  headerContainer.appendChild(headSpaceLeft);

  //create left block of header and add to container
  var headLeftA = document.createElement("a");
  headLeftA.setAttribute("href", "#");
  var headLeftImg = document.createElement("img");
  headLeftImg.setAttribute("src", "images/islogo.png");
  headLeftA.appendChild(headLeftImg);
  headSpaceLeft.appendChild(headLeftA);

  //create middle block of header and add to container
  var headSpaceMiddle = document.createElement("div");
  headSpaceMiddle.classList.add("headerSpaceMiddle"); 
  var headMiddleInput1 = document.createElement("input");
  headMiddleInput1.setAttribute("type", "text");
  headMiddleInput1.setAttribute("class", "searchTerm");
  headMiddleInput1.setAttribute("placeholder", "Search");
  headSpaceMiddle.appendChild(headMiddleInput1);
  var headMiddleInput2 = document.createElement("input");
  headMiddleInput2.setAttribute("type", "submit");
  headMiddleInput2.setAttribute("class", "searchButton");;
  headSpaceMiddle.appendChild(headMiddleInput2);
  headerContainer.appendChild(headSpaceMiddle);


  //creade right block of header and add to container
  var headSpaceRight = document.createElement("div");
  headSpaceRight.classList.add("headerSpaceRight");
  var headUlTag = document.createElement("ul");
  headSpaceRight.appendChild(headUlTag);

  for(var i = 0; i < headLinks.length; i++) {
    var headLiTag = document.createElement("li");
    var headATag = document.createElement("a");
    headATag.setAttribute("href", "#");
    var headImgs = document.createElement("img");
    headImgs.setAttribute("src", headLinks[i]);
    headATag.appendChild(headImgs);
    headLiTag.appendChild(headATag);
    headUlTag.appendChild(headLiTag);
  }

  headerContainer.appendChild(headSpaceRight);
  document.body.appendChild(headerContainer);
}

  function createMainImgContainer() {
    var mainImgCont = document.createElement("div");
    mainImgCont.classList.add("mainImageCont"); 
    var lgImgCont = document.createElement("div");
    lgImgCont.classList.add("lgImageCont");
    mainImgCont.appendChild(lgImgCont);

    //create large image container holding main image
    var lgImgContA = document.createElement("a");
    lgImgContA.setAttribute("href", "#");
    lgImgCont.appendChild(lgImgContA);

    var lgImgContImg = document.createElement("img");
    lgImgContImg.setAttribute(MAIN_IMG, "");
    lgImgContImg.setAttribute("src", "images/meerkat_mom.jpg");
    lgImgContImg.setAttribute("alt", "get outta my way, YOU!");
    lgImgCont.appendChild(lgImgContImg);

    var modal = document.createElement("div");
    modal.classList.add("modal");
    modal.setAttribute("[data-myModal]", "");
    var modalSpan = document.createElement("span");
    modalSpan.classList.add("close");
    modalSpan.innerHTML("X");
    var modalImg = document.createElement("img");
    modalImg.classList.add("modalContent"); 
    modalImg.setAttribute("[data-img01]", "");
    var modalCaption = document.createElement("div");
    modalCaption.classList.add("caption");
    modalCaption.setAttribute("[data-caption]", "");
    modal.appendChild(modalCaption);
    modal.appendChild(modalImg);
    modal.appendChild(modalSpan);

    mainImgCont.appendChild(modal);


    //create the central thumbnail container
    var thumbnailContainer = document.createElement("div");
    thumbnailContainer.classList.add("thumbCont");
    mainImgCont.appendChild(thumbnailContainer);

    //cycle over each nav item
    for(var i = 0; i < katImages.length; i++) {
      var thumbDiv = document.createElement("div");
      thumbDiv.classList.add("thumbItem");

      var thumbA = document.createElement("a");
      thumbA.setAttribute("[data-indiv-img]", "");
      thumbA.setAttribute("href", katImages[i]);
      thumbDiv.appendChild(thumbA);

      var thumbImg = document.createElement("img");
      thumbImg.setAttribute("src", katImages[i]);
    
      for (var i = 0; i < katAlt.length; i++) {
        thumbImg.setAttribute("alt", katAlt[i]);
      }

      thumbA.appendChild(thumbImg);
    }

    document.body.appendChild(mainImgCont);
  }
  


function createFooter() { 
  //create footer container
  var footerContainer = document.createElement("div");
  footerContainer.classList.add("footerCont");
  var footerMenu = document.createElement("ul");
  footerMenu.classList.add("footerMenu");
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

    document.body.appendChild(footerContainer);
}


function main() {
  createHeader();
  createFooter();
  createMainImgContainer();

  navItems.forEach(function (nav) {
    nav.addEventListener("click", function (event) {
      event.preventDefault();
      imgTarget.setAttribute("src", nav.getAttribute("href"));

      var imageInside = nav.querySelector("img");
      imgTarget.setAttribute("alt", imageInside.getAttribute("alt"))
    });
  });

  //the modal
  imgTarget.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  span.onclick = function() { 
    modal.style.display = "none";
  }
}
main();