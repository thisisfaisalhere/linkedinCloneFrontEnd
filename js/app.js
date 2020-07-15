const backdrop = document.querySelector(".backdrop");
const menuBtn = document.querySelector(".navbar-menu");
const sideMenu = document.querySelector(".navbar-mobile__side");
const sideBanner = document.querySelector(".banner-box");
const menu = document.querySelector(".menu-items");
const menuItem = document.querySelector(".menu-item");

menuBtn.addEventListener("click", () => {
    sideMenu.style.width = "80%";
    sideMenu.style.visibility = "visible";
    setTimeout( ()=> {
        sideBanner.style.display = "flex";
        menu.style.display = "block";
    }, 300);
    backdrop.style.display = "flex";
    menuItem.style.pointerEvents = "all";
    disableScrolling();
});

backdrop.addEventListener("click", ()=> {
    sideMenu.style.width = "0";
    sideMenu.style.visibility = "hidden";
    sideBanner.style.display = "none";
    menu.style.display = "none";
    backdrop.style.display = "none";
    menuItem.style.pointerEvents = "none";
    enableScrolling();
});

function disableScrolling() {
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}