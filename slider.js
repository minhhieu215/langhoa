window.addEventListener("load", function () {
    var dotItems = document.querySelectorAll(".item_dot");
    var index = 0;
    var SliderImg = document.querySelectorAll("#slider img")
    // Xử lí slider
    // Xử lí dot 
    function MoveToImg(index) {
        for (var i = 0; i < SliderImg.length; i++) {
            SliderImg[i].style.transform = `translateX(calc(-100% * ${index}))`
        }
    }
    function CheckActive() {
        if (dotItems[i].classList.contains("active")) {
            dotItems[i].classList.remove("active")
        }
    };
    dotItems.forEach(function () {

        dotItems[index].onclick = function (e) {
            for (var i = 0; i < dotItems.length; i++) {
                if (dotItems[i].classList.contains("active")) {
                    dotItems[i].classList.remove("active")
                }
                e.target.classList.add("active")
            }
            var indexImg = Array.from(dotItems).indexOf(e.target);
            MoveToImg(indexImg);
        }
        index++;
    })
    // Slider Mua do
    var items = document.querySelector(".list_sanpham")
    var itemLength = document.querySelectorAll(".sanpham").length
    var itemWidth = document.querySelector(".sanpham").clientWidth;
    // console.log(itemWidth)
    var itemsMargin = window.getComputedStyle(document.querySelector(".sanpham")).marginRight
    var indexSp = 0;
    var prevBtn = document.querySelector(".view .ti-angle-left")
    var nextBtn = document.querySelector(".view .ti-angle-right")
    var size = parseInt(itemsMargin) + parseInt(itemWidth);

    nextBtn.onclick = function () {
        if (indexSp >= itemLength - 4) {
            return;
        }
        items.style.transition = "all 0.25s linear"
        indexSp++;
        items.style.transform = "translateX(" + (-size * indexSp) + "px)";
    }
    prevBtn.onclick = function () {
        if (indexSp < -1) return
        // else {
        indexSp--;
        items.style.transition = "all 0.25s linear"
        items.style.transform = "translateX(" + (-size * indexSp) + "px)";
        console.log(indexSp)
        // }

    }
    items.addEventListener("transitionend", function () {
        if (indexSp == 4) {
            indexSp = 0;
            items.style.transform = "translateX(" + (-size * indexSp) + "px)";
            items.style.transition = "none"
        }
        if (indexSp < 0) {
            indexSp = 3;
            items.style.transform = "translateX(" + (-size * indexSp) + "px)";
            items.style.transition = "none"
        }


    })
    console.log(itemLength)
    // console.log(itemsMargin)
    var modalImgs = document.querySelectorAll(".modalImg img")
    var modalNext = document.querySelector(".nextBtn")
    var modalPrev = document.querySelector(".prevBtn")
    var indexModal = 0;
    var modalWidth = modalImgs[0].clientWidth;

    checkBtn();
    function checkBtn() {

        if (indexModal == modalImgs.length - 1) {
            modalNext.style.display = "none"
        } else {
            modalNext.style.display = "block"

        }
        if (indexModal == 0) {
            modalPrev.style.display = "none"
        } else {
            modalPrev.style.display = "block"

        }
    }
    modalNext.onclick = function () {

        if (indexModal >= modalImgs.length - 1) {

            return
        };
        indexModal++;
        checkBtn();
        for (var i = 0; i < modalImgs.length; i++) {
            modalImgs[i].style.transform = `translateX(calc(-100%*${indexModal}))`
        }
    };
    modalPrev.onclick = function () {
        if (indexModal <= 0) return
        indexModal--;
        checkBtn()
        for (var i = 0; i < modalImgs.length; i++) {
            modalImgs[i].style.transform = `translateX(calc(-100%*${indexModal}))`
        }
    }
    var btnOns = document.querySelectorAll(".sp2ti.ti-search")
    var modal = document.querySelector(".modal")
    var modalDiv = document.querySelector(".moda_div")
    var htmls = document.querySelector("html")
    for (var btnOn of btnOns) {
        btnOn.onclick = function () {
            modal.style.display = "flex";
            htmls.style.overflowY = "hidden"
        }
    }
    modalDiv.onclick = function (e) {
        e.stopPropagation();
    }
    modal.onclick = function () {
        modal.style.display = "none"
        indexModal = 0;
        for (var i = 0; i < modalImgs.length; i++) {
            modalImgs[i].style.transform = `translateX(calc(-100%*${indexModal}))`
        }
        checkBtn()
        htmls.style.overflowY = "unset"

    }
})