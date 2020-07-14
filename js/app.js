const backdrop = document.querySelector(".backdrop");
const menuBtn = document.querySelector(".navbar-menu");
const sideMenu = document.querySelector(".navbar-mobile__side");

menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
    backdrop.style.display = "flex";
    disableScrolling();
});

backdrop.addEventListener("click", ()=> {
    sideMenu.style.display = "none";
    backdrop.style.display = "none";
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