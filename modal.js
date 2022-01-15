var modalImgs = document.querySelectorAll(".modalImg img")
var modalNexts = document.querySelectorAll(".modalImg .nextBtn")
var modalPrevs = document.querySelectorAll(".modalImg .prevBtn")
var indexModalIMg = 0;
var modalWidth = modalImgs[0].clientWidth;
var btnOns = document.querySelectorAll(".sp2ti.ti-search")
var modal = document.querySelector(".modal")
var modalDivs = document.querySelectorAll(".moda_div")
var htmls = document.querySelector("html")
var indexModal = 0;
// Check which modal is on
for (var btnOn of btnOns) {
    btnOn.onclick = function(e) {
        indexModal = Array.from(btnOns).indexOf(e.target);
        modal.style.display = "flex";
        modalDivs[indexModal].style.display = "flex";
        htmls.style.overflowY = "hidden"
        modalPrevs[indexModal].style.display = "none"
    }
}

function checkBtn() {
    if (indexModalIMg == 2) {
        modalNexts[indexModal].style.display = "none"
    } else {
        modalNexts[indexModal].style.display = "block"
    }
    if (indexModalIMg == 0) {
        modalPrevs[indexModal].style.display = "none"
    } else {
        modalPrevs[indexModal].style.display = "block"

    }
}
for (var modalNext of modalNexts) {

    modalNext.onclick = function() {

        if (indexModalIMg >= 2) {

            return
        };
        indexModalIMg++;
        checkBtn();
        for (var i = 0; i < modalImgs.length; i++) {
            modalImgs[i].style.transform = `translateX(calc(-100%*${indexModalIMg}))`
        }
    };
}
for (var modalPrev of modalPrevs) {

    modalPrev.onclick = function() {
        if (indexModalIMg <= 0) return
        indexModalIMg--;
        checkBtn()
        for (var i = 0; i < modalImgs.length; i++) {
            modalImgs[i].style.transform = `translateX(calc(-100%*${indexModalIMg}))`
        }
    }
}



for (var modalDiv of modalDivs) {
    modalDiv.onclick = function(e) {
        e.stopPropagation();
    }
}

modal.onclick = function() {
    modal.style.display = "none"
    indexModalIMg = 0;
    for (var i = 0; i < modalImgs.length; i++) {
        modalImgs[i].style.transform = `translateX(calc(-100%*${indexModalIMg}))`
    }
    checkBtn()
    htmls.style.overflowY = "unset"
    for (var modalDiv of modalDivs) {
        modalDiv.style.display = "none"
    }
}