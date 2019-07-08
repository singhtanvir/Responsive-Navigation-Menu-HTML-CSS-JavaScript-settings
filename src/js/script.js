const navMenu = document.getElementById('nav-menu');
function openNav(){
    document.querySelector('body').style.overflow = "hidden";
    navMenu.style.left = "50%";
}
function closeNav(){
    document.querySelector('body').style.overflow = "visible";
    navMenu.style.left = "-50%";
}
