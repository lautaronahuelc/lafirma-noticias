const buttonMenu = document.querySelector('#button-menu');
const menuOculto = document.querySelector('#menu-oculto');

buttonMenu.addEventListener('click', (event) => {
    menuOculto.classList.toggle('nav-visibled');
    if(buttonMenu.getAttribute('src') === 'images/icon-menu.png'){
        buttonMenu.setAttribute('src','images/close-button.png');
    } else {
        buttonMenu.setAttribute('src','images/icon-menu.png');
    }
});