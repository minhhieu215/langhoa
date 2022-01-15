var listSp = [{
        imgs: '<img src="/langhoa/polo-300x300.jpg" alt="">',
        link: "/langhoa/aopolo.html",
        name: "Áo polo",
        price: "220,000₫",
    },
    {
        imgs: '<img src="/langhoa/ah4-270x340.jpg" alt="">',
        link: "/langhoa/aosml.html",
        name: `Áo SML Boby Fit –Màu Gạch`,
        price: "270,000₫",
    }, {
        imgs: '   <img src="/langhoa/IMG_0394-300x300.jpg" alt="">',
        link: "/langhoa/aosml-xam.html",
        name: `Áo SML Boby Fit –Màu Xám`,
        price: "270,000₫",
    }, {
        imgs: `   <img src="/langhoa/222e61a8fc4f0811515e2-300x300.jpg" alt="">`,
        link: "/langhoa/bangcotay.html",
        name: `Băng Quấn Cổ Tay:WATCH ME! – 2021`,
        price: "180,000₫",
    }, {
        imgs: `<img src="/langhoa/SML-2021-4-270x340.jpg" alt="">
        `,
        link: "/langhoa/vongtay.html",
        name: "COMBO VÒNG SML 2021",
        price: "99,000₫",
    }, {
        imgs: `<img src="/langhoa/Dây-đỏ-1-300x300.jpg" alt="">
        `,
        link: "/langhoa/daynhay.html",
        name: "Dây Nhảy 50 Sắc Thái",
        price: "170,000₫",
    }, {
        imgs: `   <img src="/langhoa/tl-3-300x300.jpg" alt="">`,
        link: "/langhoa/daytroluc.html",
        name: `Dây Trợ Lực –Hành Bớt Cực (TÍM)`,
        price: "340,000₫",
    }, {
        imgs: `   <img src="/langhoa/tl-3-300x300.jpg" alt="">`,
        link: "/langhoa/daytroluc.html",
        name: `Dây Trợ Lực –Hành Bớt Cực (TÍM)`,
        price: "340,000₫",
    },
    {
        imgs: `   <img src="/langhoa/tl-3-300x300.jpg" alt="">`,
        link: "/langhoa/daytroluc.html",
        name: `Dây Trợ Lực –Hành Bớt Cực (TÍM)`,
        price: "340,000₫",
    },
]
var itemlistBlock = document.querySelector(".item_list")
listSp.render = function() {
    const htmls = listSp.map(function(sp) {
        return `<div class="item">
        <div class="item_img">
        <a href=${sp.link}>
            ${sp.imgs}
            </a>
        </div>
        <a href=${sp.link}>
            <h4>${sp.name}</h4 >
        </a >
        <h3>${sp.price}</h4>
            <i class="sp2ti ti-shopping-cart"></i>
            <i class="sp2ti ti-search"></i>
            <i class="sp2ti ti-eye"></i>
    </div > 
    `

    })
    itemlistBlock.innerHTML = htmls.join("");
}
listSp.render();
// Modall Render
var listMOdal = [{
        imgs: `<img src="/langhoa/polo-300x300.jpg" alt="">
        <img src="/langhoa/polo-300x300.jpg" alt="">
        <img src="/langhoa/polo-300x300.jpg" alt="">
    `,
        name: `Áo Polo`,
        price: `220,000đ`,
        des1: ``,
        des2: ``,
        des3: ``,
    },
    {
        imgs: `<img src="/langhoa/ah4-600x800.jpg" alt="">
        <img src="/langhoa/ah2-600x800.jpg" alt="">
        <img src="/langhoa/ah7-600x800.jpg" alt="">`,
        name: `Áo SML Boby Fit – Màu Gạch`,
        price: `439,000₫ – 459,000₫`,
        des1: ``,
        des2: ``,
        des3: ``,
    }, {
        imgs: `<img src="/langhoa/ah4-600x800.jpg" alt="">
        <img src="/langhoa/ah2-600x800.jpg" alt="">
        <img src="/langhoa/ah7-600x800.jpg" alt="">`,
        name: `Áo SML Boby Fit – Màu Xám`,
        price: `270,000đ`,
        des1: `Bộ sưu tập những chiếc áo SML Body Fit có 02 màu sắc để bạn lựa chọn – dưới đây là màu Gạch và màu
                Xám lông chuột là tone màu rất dễ mặc.`,
        des2: `Size M: Dành cho các bạn có bắp tay dưới 34cm. Nặng từ 50kg – 65 kg`,
        des3: `Size L: Dành cho các bạn có bắp tay dưới 37cm. Nặng từ 65kg – 78kg`,
    }, {
        imgs: `  <img src="/langhoa/222e61a8fc4f0811515e2-300x300.jpg" alt="">
        <img src="/langhoa/222e61a8fc4f0811515e2-300x300.jpg" alt="">
        <img src="/langhoa/222e61a8fc4f0811515e2-300x300.jpg" alt="">`,
        name: `Băng Quấn Cổ Tay: WATCH ME! – 2021`,
        price: `180,000đ`,
        des1: `Sức mạnh của bạn liệu có bị phong ấn do quá ĐAU CỔ TAY???`,
        des2: `Nếu bạn muốn cổ tay không “phế” dài hạn do chấn thương thì đây là sản phẩm đáng chú ý, bảo vệ bạn
                            xuyên suốt trong quá trình tập luyện.`,
        des3: ``,
    }, {
        imgs: `<img src="/langhoa/SML-2021-4-270x340.jpg" alt="">
        <img src="/langhoa/SML-2021-4-270x340.jpg" alt=""><img src="/langhoa/SML-2021-4-270x340.jpg" alt="">>`,
        name: `COMBO VÒNG SML 2021`,
        price: `99,000đ`,
        des1: `💥 Slogan chất hơn quả quất, giúp anh em không từ bỏ những bài khó, quyết tâm hơn
                                        với những cột mốc mới và ngày càng tiến bộ hơn trên chặng đường tập
                                        luyện?`,
        des2: `“If it’s easy, you’re doing it wrong!”.`,
        des3: `💥 Size vòng chuẩn kể cả những bạn cổ tay nhỏ tầm 14cm đeo vẫn vừa đẹp!`,
    }, {
        imgs: `<img src="/langhoa/Dây-đỏ-1-300x300.jpg" alt="">
        <img src="/langhoa/Dây-đỏ-1-300x300.jpg" alt=""><img src="/langhoa/Dây-đỏ-1-300x300.jpg" alt="">`,
        name: `Dây Nhảy 50 Sắc Thái`,
        price: `170,000đ`,
        des1: `Dây Nhảy 50 Sắc Thái (2m8) là sản phẩm cao cấp được sử dụng đặc thù trong các môn thể thao: Muay,
                                                    Boxing, Kick Boxing, Street Workout,….
                                                    Thích hợp cho các đối tượng vận động viên sử dụng trong tập luyện, rèn luyện phát triển các tố chất.`,
        des2: ``,
        des3: ``,
    }, {
        imgs: `  <img src="/langhoa/tl-3-300x300.jpg" alt=""> <img src="/langhoa/tl-3-300x300.jpg" alt=""> <img src="/langhoa/tl-3-300x300.jpg" alt="">`,
        name: `Dây Trợ Lực – Ăn Hành Bớt Cực (TÍM)`,
        price: `340,000đ`,
        des1: `BUỒN BỰC, CHÁN NẢN, MUỐN BỎ TẬP VÌ CÁC BÀI HÀNH QUÁ KHÓ???`,
        des2: `Băn khoăn không biết phải lên level như thế nào trong khi sức mình chưa đủ? 😰😓`,
        des3: `Anh em đừng lo, hãy sắm ngay DÂY TRỢ LỰC giúp các bài hành đỡ vất vả. 🌝`,
    }, {
        imgs: `  <img src="/langhoa/tl-3-300x300.jpg" alt=""> <img src="/langhoa/tl-3-300x300.jpg" alt=""> <img src="/langhoa/tl-3-300x300.jpg" alt="">`,
        name: `Dây Trợ Lực – Ăn Hành Bớt Cực (TÍM)`,
        price: `340,000đ`,
        des1: `BUỒN BỰC, CHÁN NẢN, MUỐN BỎ TẬP VÌ CÁC BÀI HÀNH QUÁ KHÓ???`,
        des2: `Băn khoăn không biết phải lên level như thế nào trong khi sức mình chưa đủ? 😰😓`,
        des3: `Anh em đừng lo, hãy sắm ngay DÂY TRỢ LỰC giúp các bài hành đỡ vất vả. 🌝`,
    }, {
        imgs: `  <img src="/langhoa/tl-3-300x300.jpg" alt=""> <img src="/langhoa/tl-3-300x300.jpg" alt=""> <img src="/langhoa/tl-3-300x300.jpg" alt="">`,
        name: `Dây Trợ Lực – Ăn Hành Bớt Cực (TÍM)`,
        price: `340,000đ`,
        des1: `BUỒN BỰC, CHÁN NẢN, MUỐN BỎ TẬP VÌ CÁC BÀI HÀNH QUÁ KHÓ???`,
        des2: `Băn khoăn không biết phải lên level như thế nào trong khi sức mình chưa đủ? 😰😓`,
        des3: `Anh em đừng lo, hãy sắm ngay DÂY TRỢ LỰC giúp các bài hành đỡ vất vả. 🌝`,
    },
]
var modalBlock = document.querySelector(".modal")
listMOdal.rendermodal = function() {
    const htmlsModal = listMOdal.map(function(modal) {
        return ` <div class="moda_div">
 <div class="modalImg">
        ${modal.imgs}
        <div class="nextBtn">
            <i class="ti-angle-right"></i>
        </div>
        <div class="prevBtn">

            <i class="ti-angle-left"></i>
        </div>
    </div>
    <div class="modal_des">
        <h1>${modal.name}
        </h1>
        <h2>${modal.price}</h2>
        <p>${modal.des1}
        </p>
        <p>${modal.des2}</p>
        <p>${modal.des3}</p>
        <div class="modal__btn">
            <a> <i class="ti-shopping-cart"></i> LỰA CHỌN CÁC TÙY CHỌN</a>
            <a><i class="ti-search"></i>VIEW DETAILS</a>
        </div>
    </div>
</div>`
    })
    modalBlock.innerHTML = htmlsModal.join("");
}
listMOdal.rendermodal();