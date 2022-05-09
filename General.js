
let animationmenu = document.getElementsByClassName('lien_menu');
for (let i = 0; i < animationmenu.length; i++) {
    animationmenu[i].addEventListener('mouseover', () => {
        animationmenu[i].style.backgroundColor=''
    } );
}