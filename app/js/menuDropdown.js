/* Ce script va permettre de modifier la transparence du background en fonction de la distance avec le haut de la page */

//liaison avec la page html
let menuDropdown = document.getElementById("menuDropdown");
let html = document.getElementById("html");

window.addEventListener('scroll', function() {
    if(html.scrollTop > 600){
        menuDropdown.classList.add("bg-solid");
        menuDropdown.classList.remove("bg-transparent");
    }else{
        menuDropdown.classList.add("bg-transparent");
        menuDropdown.classList.remove("bg-solid");
    }

});
