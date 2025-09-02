let menuBurger = document.querySelector('#menu-burger');
let sideBar = document.querySelector('#side-bar');

menuBurger.addEventListener('click', function(e){
    sideBar.classList.toggle("ligado");
})


