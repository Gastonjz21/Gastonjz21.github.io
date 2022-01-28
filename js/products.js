document.addEventListener('DOMContentLoaded', () => {
    const imgLightBox = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(imgLightBox, {
        inDuration: 500,
        outDuration: 700
    });
});

//scrollUp

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp (){
    
   var courrentScroll = document.documentElement.scrollTop || document.body.scrollTop;
   
   if (courrentScroll > 0){
       window.scrollTo (0, 0);
   }
};

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;
    
    if (scroll > 600){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 600){
        buttonUp.style.transform = "scale(0)";
    }

}

///

const navToggle = document.querySelector(".nav-toggle")
const navDeg = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".navegacion")
const vrinkA = document.querySelector(".vr")
const nuestrosSabores = document.querySelector(".ns")
const muecasS = document.querySelector(".mc")
const crowieS = document.querySelector(".cw")
const puraFruta = document.querySelector(".pf")

navDeg.addEventListener("click", () => {
    navDeg.classList.toggle("animacion")
});



navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
      } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
      }
});

vrinkA.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    navDeg.classList.toggle("animacion");
});

nuestrosSabores.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    navDeg.classList.toggle("animacion");
});

muecasS.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    navDeg.classList.toggle("animacion");
});

crowieS.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    navDeg.classList.toggle("animacion");
});

puraFruta.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    navDeg.classList.toggle("animacion");
});
