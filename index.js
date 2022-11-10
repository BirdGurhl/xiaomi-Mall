import data from "./js/data.js"
// import $ from "jquery"

// header的下载APP
let headerDownload = document.querySelector("header .letf a:nth-last-of-type(2)");
// header的购物车
let headerCar = document.querySelector("header .container .car");

// 添加过渡，直接写在css里会在刷新的时候出现这两个dom里面的元素的消失动画
$("header .container a .downLoad").css("transition", "all 0.3s")
$("header .container a .carHover").css("transition", "all 0.3s")

//header导航栏的下载APP鼠标悬浮触发显示下载二维码
headerDownload.onmouseenter = function () { headerHover(this, "300%"); }
headerDownload.onmouseleave = function () { headerHover(this, "0"); }

//header导航栏的购物车鼠标悬浮显示购物车
headerCar.onmouseenter = function () {
    headerHover(this, "250%");
    let img = document.querySelector("header .container .car img")
    img.src = "./images/天猫购物车hover.png"
}
headerCar.onmouseleave = function () {
    headerHover(this, "0");
    let img = document.querySelector("header .container .car img")
    img.src = "./images/天猫购物车.png"
}
function headerHover(dom, height) {
    // 设置可见/不可见
    let visibility = height == 0 ? "hidden" : "visible";
    // $(this).children().css("visibility", "visible");
    $(dom).find("div").css("visibility", visibility);
    $(dom).find("span").css("visibility", visibility);
    // 设置高
    $(dom).find("div").css("height", height);
}



// 导航栏
let nav = document.querySelector(".nav-container");
let navLists = document.querySelectorAll(".nav ul li");
let navActive = document.querySelector(".nav-active");
let searchIcon = document.querySelector(".nav .search .searhc-icon");

// 遍历li标签
$(navLists).each(function (index) {
    $(this).prop("index", index);
    // li标签鼠标悬浮悬浮
    $(this).mouseenter(function () {
        // 只有前5个标签有数据
        if (index > Object.keys(data.navLists).length - 1) {
            return;
        }

        $(navActive).css("height", "229px");

        // 把数据刷新到产品名称和价格
        // 图片没有数据，就不刷了
        let navActive_data = data.navLists[index]; //一个二维数组
        // 如果有该标签的数据，那么就刷新
        if (navActive_data) {
            $(navActive).find("img").each(function (index) {
                $(this).prop("src", navActive_data[index][0])
            });
            $(navActive).find(".title").each(function (index) {
                $(this).html(navActive_data[index][1]);
            });
            $(navActive).find(".price").each(function (index) {
                $(this).html(navActive_data[index][2]);
            });
        }
    })
});

nav.onmouseleave = function () { $(navActive).css("height", "0"); }

// 搜索icon悬浮
searchIcon.onmouseenter = function () {
    this.children[0].src = "./images/seachicon_active.png"
}
searchIcon.onmouseleave = function () {
    this.children[0].src = "./images/seachicon.png"
}


// 轮播图
let bannerImgs = document.querySelectorAll(".banner .bannerImg");
let preBtn = document.querySelector(".banner .pre");
let nextBtn = document.querySelector(".banner .next");
let circles = document.querySelectorAll(".banner .circle a")
let currentIndex = 0;
let bannerTime = {};

// 自动轮播
bannerImgs[currentIndex].style.opacity = "1";
autoCarousel();
function autoCarousel() {
    bannerTime.Interval = setInterval(() => {
        nextBannerImg(true);
    }, 3000);
}

// 上一张
preBtn.onclick = () => { preBannerImg() };
preBtn.onmouseenter = () => { clearbannerInterval() }
preBtn.onmouseleave = () => { clearbannerInterval() }
function preBannerImg() {
    let preIndex = currentIndex == 0 ? 2 : currentIndex - 1;
    changeImg(preIndex);
}

// 下一张
nextBtn.onclick = () => { nextBannerImg() };
nextBtn.onmouseenter = () => { clearbannerInterval() }
nextBtn.onmouseleave = () => { clearbannerInterval() }
function nextBannerImg(flag) {
    let nextIndex = currentIndex == 2 ? 0 : currentIndex + 1;
    changeImg(nextIndex);
    if (flag) {
        autoCarousel();
    }
}

// 轮播下标点击
for (const index in circles) {
    if (Object.hasOwnProperty.call(circles, index)) {
        const element = circles[index];
        element.onclick = function () {
            if (index != currentIndex) {
                changeImg(index);
            }
        }
    }
}

// 鼠标悬浮停止轮播
for (const bannerImg of bannerImgs) {
    bannerImg.onmouseenter = () => { clearbannerInterval() }
    bannerImg.onmouseleave = () => { autoCarousel() }
}

//切换图片
function changeImg(nextIndex) {
    nextIndex = parseInt(nextIndex);

    // 当前图片淡出
    bannerImgs[currentIndex].style.transition = "opacity 0.3s";
    bannerImgs[currentIndex].style.opacity = "0";
    // 下一张图片浮现
    bannerImgs[nextIndex].style.transition = "opacity 1s";
    bannerImgs[nextIndex].style.opacity = "1";
    currentIndex = nextIndex;
    for (const circle of circles) {
        circle.classList.remove("active");
    }
    circles[currentIndex].classList.add("active");
    clearbannerInterval()
}
function clearbannerInterval() {
    if (bannerTime.Interval) {
        clearInterval(bannerTime.Interval)
        bannerTime.Interval = null;
    }
}

// 轮播区域的导航标签
$(".banner .banner-nav ul li").mouseenter(function () {
    $(".banner .banner-nav-active").css("display", "flex");
});
$(".banner .banner-nav ul li").mouseleave(function () {
    $(".banner .banner-nav-active").css("display", "none");
});

//content内容区域
let titleSpans = document.querySelectorAll(".contentBox .phone .title span");
for (const titleSpan of titleSpans) {
    titleSpan.onmouseenter = function () {
        this.classList.add("active")
    }
}
$(".contentBox .phone .title span").mouseenter(function () {
    if (!$(this).hasClass("active")) {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    }
});


//右下角固定导航栏鼠标悬浮
$(".fixed-nav ul li").mouseenter(function () {
    let src = $(this).children("img").prop("src");
    src = src.substr(0, src.lastIndexOf(".png")) + "active.png"
    $(this).children("img").prop("src", src);
});
$(".fixed-nav ul li").mouseleave(function () {
    let src = $(this).children("img").prop("src");
    src = src.substr(0, src.lastIndexOf("active.png")) + ".png";
    $(this).children("img").prop("src", src);
});
// 屏幕滚动到主体部分时，弹出"回到顶部"
let backTopbox = document.querySelector(".fixed-nav ul li:last-of-type");
window.onload = () => {
    backTop();
    window.onscroll = backTop;
}
function backTop() {
    if (document.documentElement.scrollTop > document.querySelector("main").offsetTop) {
        backTopbox.style.display = "flex"
    }
    else {
        backTopbox.style.display = "none"
    }
}
backTopbox.onclick = () => {
    // document.documentElement.scrollTop = 0;
    // 设置滚动行为改为平滑的滚动
    // window.scrollTo({
    //     top: 0,
    //     behavior: "smooth"
    // });
    // 缓动动画
    let timer = setInterval(() => {
        let top = document.documentElement.scrollTop;
        let step = Math.ceil(parseInt(top) / 10);
        step =  step > 0 ?  top - step : 0;
        document.documentElement.scrollTop = step;
        if (document.documentElement.scrollTop == 0) {
            clearInterval(timer)
        }
    }, 10);
}
