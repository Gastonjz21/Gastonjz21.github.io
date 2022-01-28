function AnimacionLogo(pxPantalla){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        var logo = document.getElementById('logo');
        
        if(scroll > pxPantalla){
            logo.style.marginTop = `${10}px`, logo.style.width = `${60}px`, logo.style.height = `${60}px`;
        } else{
            logo.style.marginTop = `${120}px`, logo.style.width = `${350}px`, logo.style.height = `${350}px`;
        }
    })
}

AnimacionLogo(100);


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
const navMenu = document.querySelector("nav")
const nosotrosA = document.querySelector(".nos")
const marcasA = document.querySelector(".mar")
const productsA = document.querySelector(".pro")
const contactoA = document.querySelector(".con")

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

nosotrosA.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    navDeg.classList.toggle("animacion");
});

marcasA.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    navDeg.classList.toggle("animacion");
});

productsA.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    navDeg.classList.toggle("animacion");
});

contactoA.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    navDeg.classList.toggle("animacion");
});




