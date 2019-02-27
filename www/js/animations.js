// Mobile navigation menu

var mobMenu = false;

function removeMenu(){
    $(".nav").removeAttr("style"); //set to default css value
    $(".mob-nav-toggle").attr("class", "mob-nav-toggle");
    $("h1").attr("class", "logo");
    $(".overlay").remove();
    mobMenu = false;
}

$(".mob-nav").on("click", "button", function(){

    if(mobMenu == false){
        $(".nav").css("top", 0);
        $(".mob-nav-toggle").addClass("mob-nav-on");
        $("h1").addClass("dark");
        $("h1").addClass("fixed");
        $("#wrapper").prepend("<div class='overlay' aria-hidden='true'></div>");
        mobMenu = true;
    } else {
        removeMenu();
    }
});

$("#wrapper").on("click", ".overlay", removeMenu);

$(window).resize(function(){
    if(mobMenu==true){
        removeMenu();
    }
});

// Click to top

var topButton = document.getElementById("to-top");
var hideFromBottom = topButton.style.bottom;

function scrollFunction(){
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    topButton.style.bottom = "20px";
    topButton.setAttribute("aria-hidden", "false")
  } else {
    topButton.style.bottom = hideFromBottom;
    topButton.setAttribute("aria-hidden", "true")
  }
}

function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

topButton.children[0].addEventListener("click",
  function(event){event.preventDefault()}
);
window.addEventListener("scroll", scrollFunction);
topButton.addEventListener("click", topFunction);

// Accordion

if(document.getElementsByClassName("accordion")[0]){

  let allNodes = document.getElementsByClassName("accordion")[0].childNodes;
  let h3Nodes = [];
  let textNodes = [];
  let vertraging = 0;

  // arrays for headings en paragraphs maken
  for(let i=0;i<allNodes.length;i++){
    if(allNodes[i].nodeName == "H3"){
      h3Nodes.push(allNodes[i]);
    } else if(allNodes[i].nodeName == "P"){
      textNodes.push(allNodes[i]);
    }
  }

  let blocks = h3Nodes.length;

  // click event op headings
  for(let j=0;j<blocks;j++){
    h3Nodes[j].addEventListener("click", function(){

      // wordt er op een heading geklikt waarvan tekst al actief is?
      if(textNodes[j].className == "active"){
        textNodes[j].setAttribute("class", "");
      } else {

        // verberg alle teksten
        for(let k=0;k<blocks;k++){
          textNodes[k].setAttribute("class", "")
        }

        // laat tekst uitklappen
        textNodes[j].classList.add("active");

      }

    });
  }

}

//animate headers fade in
let delayFirst = 25;
let delaySecond = 500;

//animations for hero element
if(document.getElementById("hero")){

  // slow scroll effect Hero
  $(function(){
    $(window).scroll(function(){
        $('.hero-container').first().css("top", $(window).scrollTop() / 2.5);
    });
  })


  // Hero section fade in titles
  let heroHeading = $('#hero h2')[0];
  let heroButton = $('#hero .btn')[0];

  setTimeout(function(){
    heroHeading.style.top = "0px";
    heroHeading.style.opacity = "1";
  }, delayFirst);

  setTimeout(function(){
    heroButton.style.top = "0px";
    heroButton.style.opacity = "0.9";
  }, delaySecond);

}

//animations for single pages
if(document.getElementsByClassName("singlePageHeading")[0]){
  let singleHeading = $('.singlePageHeading h2')[0];
  let singlePar = $('.singlePageHeading p')[0];

  setTimeout(function(){
    singleHeading.style.top = "0px";
    singleHeading.style.opacity = "1";
  }, delayFirst);

  setTimeout(function(){
    singlePar.style.top = "0px";
    singlePar.style.opacity = "1";
  }, delaySecond);

}

// footer animation
// const footer = document.querySelector("footer");
// footer.style.position = "fixed";
// footer.style.zIndex = "-1";
// footer.style.bottom = "0";
// const body = document.querySelector("body");
// let scrolledBottom = window.scrollY;
// window.addEventListener("scroll", function(){
//   let bodyHeight = parseInt(window.getComputedStyle(body).getPropertyValue("height"));
//   let footerHeight = parseInt(window.getComputedStyle(footer).getPropertyValue("height")) + 60;
//   let scrolledBottom = window.scrollY + window.innerHeight;
//   if(bodyHeight == scrolledBottom) {
//     body.style.height = bodyHeight + footerHeight + "px";
//   }
// })


// copyright year
let date = new Date();
let copyright = document.getElementsByClassName("footer-copyright")[0];
copyright.innerHTML = '<p>' + date.getFullYear() + ' &copy; Zonnemeting.nl</p>';
