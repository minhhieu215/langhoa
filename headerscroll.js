window.addEventListener("load", function () {
    var headerFixed = document.querySelector(".header-fixed");
    if (window.innerWidth >= 769) {

        window.onscroll = function () {
            if (window.scrollY >= 32 || document.documentElement.scrollTop >= 32) {
                headerFixed.style.display = "block"
            } else {
                headerFixed.style.display = "none"

            }
        }
    }
    var mainSlide = document.querySelector(".main")
    var menuBtn = document.querySelector(".header__thongtinMenu")
    var menuRepsonse = document.querySelector("#spanmenu")
    var menuWidth = menuRepsonse.clientWidth
    var body = document.querySelector("body")
    var htmlElement = document.querySelector("html")
    menuBtn.onclick = function (event) {
        event.stopPropagation();
        menuRepsonse.style.transform = "translateX(0)"
        menuRepsonse.style.transtion = "all 0.5s linear;"
        mainSlide.style.transform = "translateX(" + (menuWidth) + "px)";
        mainSlide.style.transition = "all 0.5s linear;";
        // htmlElement.style.overflow = "hidden"
    }

    body.onclick = function (e) {
        menuRepsonse.style.transform = "translateX(-100%)"

        mainSlide.style.transform = "translateX(0)"
        menuRepsonse.style.transtion = "all 0.5s linear;"
        mainSlide.style.transition = "all 0.5s linear;";
        // htmlElement.style.overflow = "auto"

    }
    menuRepsonse.onclick = function (e) {
        e.stopPropagation();
    }

})