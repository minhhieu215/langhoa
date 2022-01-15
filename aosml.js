var selectElement = document.querySelector("select") || null;
var img2 = document.querySelector(".img2") || null
var img3 = document.querySelector(".img3") || null
var img1 = document.querySelector(".img1") || null
var mainIMG = document.querySelector("#mainIMG").outerHTML
var bigBill = []
var bigSoluong = []
var muahangbtn = document.querySelector(".btnGiohang") || null
var giaSanPham = document.querySelector("#giaSP").innerText || null
var isBuy = false;

if (img2)
    img2.style.display = 'none'
if (img3)
    img3.style.display = 'none'

muahangbtn.style.opacity = "0.5";
muahangbtn.style.cursor = "auto";
if (selectElement) {

    selectElement.onchange = function() {
        switch (selectElement.value) {
            case "tuychon":
                muahangbtn.style.opacity = "0.5";
                muahangbtn.style.cursor = "auto";
                img1.style.display = "block"
                img2.style.display = "none"
                img3.style.display = "none"
                isBuy = false;
                break;
            case "M":
                img2.style.display = "block"
                img1.style.display = "none"
                img3.style.display = "none"
                hienbutton()
                isBuy = true;

                break;
            case "L":
                img3.style.display = "block"
                img1.style.display = "none"
                img2.style.display = "none"
                hienbutton()
                isBuy = true;

                break;
        }
    }
} else {
    hienbutton();
    isBuy = true;
}

function hienbutton() {
    muahangbtn.style.opacity = "1";
    muahangbtn.style.cursor = "pointer";
}
// Shop
// Thêm sản phẩm 

muahangbtn.addEventListener("click", addCart)
var shopBlock = document.querySelector(".sanphamGioHang");
var tenSanPham = document.querySelector("#tenSp").innerText
var giaSanPham = document.querySelector("#giaSP").innerText
var soluongSP = 0
var bills = 0;



function addCart() {
    if (isBuy) {
        if (checkSpTrung(tenSanPham)) {
            soluongSP = JSON.parse(localStorage[`SP:${tenSanPham}`]).soluongSP;
            var tenSPs = shopBlock.querySelectorAll(".tenSP")
            var searchText = tenSanPham;
            for (var i = 0; i < tenSPs.length; i++) {
                if (tenSPs[i].innerText == searchText) {
                    tenSPs[i].closest(".hang").remove();
                    localStorage.removeItem(`SP:${tenSPs[i].innerText}`)
                }
            }
        }

        var soluongINPUT = parseInt(document.querySelector(".soluongmoiSP").value)
        soluongSP += soluongINPUT;
        var htmls = `<div class="hang"><i class="ti-close"></i>${mainIMG}<div class="hang_des"><p class="tenSP">${tenSanPham}</p><p style="display:inline">Số lượng :<p class="so" style="display:inline">${soluongSP}</p></p ><p class="giatien">${giaSanPham}</p>></div></div>`
        shopBlock.insertAdjacentHTML("afterbegin", htmls);
        console.log(soluongINPUT)
        changeTotal(soluongINPUT, giaSanPham);
        // Luu vao storage
        var dataSp = {
            tenSanPham: tenSanPham,
            giaSanPham: giaSanPham,
            mainIMG: mainIMG,
            soluongSP: soluongSP,
            bills: bills,
        }
        localStorage.setItem(`SP:${tenSanPham}`, JSON.stringify(dataSp))
        console.log("So luong sp hien tai: ", soluongSP)

        // Cho phep xoa
        deleteCart()

    }
};
// function deleteCart() {

function deleteCart() {
    var deleteBtns = document.querySelectorAll(".hang .ti-close")
    for (var i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].onclick = function(e) {
            e.target.closest(".hang").remove()
            var tenSpXoa = e.target.closest(".hang").querySelector(".tenSP").innerText;
            var sotienxoadi = parseInt(e.target.closest(".hang").querySelector(".giatien").innerText)
            var soluongXoadi = parseInt(e.target.closest(".hang").querySelector(".so").innerText)
            localStorage.removeItem(`SP:${tenSpXoa}`)
            changeTotal(-soluongXoadi, sotienxoadi)
        }
    }
}
var tongSoLuong = 0;

function changeTotal(soluongSP1, giaSanPham) {
    bills += soluongSP1 * parseInt(giaSanPham)
    tongSoLuong += soluongSP1
    var totalBlock = document.querySelector(".tongtien");
    var totalHTml = `<div class="total_item">${tongSoLuong} items</div><div class="subTotal">Subtotal:${bills},000đ</div>`;
    totalBlock.innerHTML = totalHTml;
}

function checkSpTrung(tenSanPham) {
    for (var key in localStorage) {
        if (key.includes("SP:")) {
            if (key.includes(`${tenSanPham}`)) {
                console.log("Sp ton tai r ne ")
                return true;
            }
        }
    }
    return false
}
var totalSp = 0
var localGiaSp = 0
    // var localSoLuongSP = 0
    // var localGiaSp = 0

function renderStorage() {
    if (localStorage.length > 0) {

        for (var key in localStorage) {
            if (key.includes("SP:")) {
                var localMainIMg = JSON.parse(localStorage[key]).mainIMG
                var localTenSp = JSON.parse(localStorage[key]).tenSanPham
                var localSoLuongSP = JSON.parse(localStorage[key]).soluongSP
                var localGiaSp = JSON.parse(localStorage[key]).giaSanPham
                console.log(localTenSp)
                var localHtmls = `<div class="hang"><i class="ti-close"></i>${localMainIMg}<div class="hang_des"><p class="tenSP">${localTenSp}</p><p style="display:inline">Số lượng :<p class="so" style="display:inline">${localSoLuongSP}</p></p ><p class="giatien">${localGiaSp}</p>></div></div>`
                shopBlock.insertAdjacentHTML("afterbegin", localHtmls);
                changeTotal(localSoLuongSP, localGiaSp)
            }
        }
        deleteCart()
    }
}
renderStorage();