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
var bills = 0;
var shopBlock = document.querySelector(".sanphamGioHang")

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