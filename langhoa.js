window.addEventListener("load", function () {
    var dotItems = document.querySelectorAll(".item_dot");
    var index = 0;
    var SliderImg = document.querySelectorAll("#slider img")
    // Xử lí slider
    // Xử lí dot 
    dotItems.forEach(function () {

        dotItems[index].onclick = function (e) {
            for (var i = 0; i < dotItems.length; i++) {
                if (dotItems[i].classList.contains("active")) {
                    dotItems[i].classList.remove("active")
                }
                e.target.classList.add("active")
            }
            var indexImg = Array.from(dotItems).indexOf(e.target);
            console.log(indexImg)
            for (var i = 0; i < SliderImg.length; i++) {
                SliderImg[i].style.transform = `translateX(calc(-100% * ${indexImg}))`
            }
        }
        index++;
    })

})