const buttonMenu = document.querySelector('#button-menu');
const menuOculto = document.querySelector('#menu-oculto');
const enlacesMenu = document.querySelectorAll('#menu-oculto a');
const contAll = document.querySelector('#cont-all');

buttonMenu.addEventListener('click', (event) => {
    menuOculto.classList.toggle('nav-visibled');
    contAll.classList.toggle('cont-all--move');
    if(buttonMenu.getAttribute('src') === 'images/icon-menu.png') {
        buttonMenu.setAttribute('src','images/close-button.png');
    } else {
        buttonMenu.setAttribute('src','images/icon-menu.png');
    }
});

enlacesMenu.forEach(element => element.addEventListener('click', (event) => {
    buttonMenu.setAttribute('src','images/icon-menu.png');
    menuOculto.classList.remove('nav-visibled');
    contAll.classList.remove('cont-all--move');
}));