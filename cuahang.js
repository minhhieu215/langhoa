var webNums = document.querySelectorAll('.buttonSlide p');

var webNumIndex = 0;
var nextPageBtn = document.querySelector(".buttonSlide .ti-angle-right")
var prevPageBtn = document.querySelector(".buttonSlide .ti-angle-left")

checkBtn();
function checkBtn() {
    webNums[webNumIndex].textContent == "1" ? prevPageBtn.style.display = "none" : prevPageBtn.style.display = "block"
    webNums[webNumIndex].textContent == webNums.length ? nextPageBtn.style.display = "none" : nextPageBtn.style.display = "block"
}
// Kiem tra cuoi cung va dau tien

nextPageBtn.onclick = function () {
    webNums[webNumIndex].classList.remove("active");
    webNumIndex++;
    webNums[webNumIndex].classList.add("active");
    checkBtn()
}
prevPageBtn.onclick = function () {
    webNums[webNumIndex].classList.remove("active");
    webNumIndex--;
    webNums[webNumIndex].classList.add("active");
    checkBtn()

}