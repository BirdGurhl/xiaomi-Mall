//header导航栏的购物车鼠标悬浮显示购物车
let div = null;
let time = {};
headerCar.onmouseenter = function () {


    div = document.createElement("div");
    div.classList.add("carHover")
    div.setAttribute("z-index", "2")
    let ul = $("<ul></ul>")
    let li = $("<li></li>").append($("<span>1888</span>"))
    for (let index = 0; index < 3; index++) { ul.append(li); }
    $(div).append(ul)
    // str = "<li><span></span></li>"
    // div.innerHTML = `<ul>${str}${str}${str}</ul>`
    this.appendChild(div);
    // $(div).find("span").css("background-color", "black")
    // div.querySelector("span").setAttribute("width", "20px");
    console.log(div);
    console.log($(div).find("span"));
    // $(div).find("span").css("width", "20px")

    time.Timeout = setTimeout(() => {
        window.clearInterval(time.Interval);
        // this.removeChild(div);
        // div = null
    }, 1000);
    let flag = true;
    time.Interval = setInterval(() => {
        console.log(flag);
        if (flag) {
            // console.log(div.querySelectorAll("span"));
            // div.querySelectorAll("span")[0].setAttribute("background-color", "black");
            // $(div).find("span").css("width", "20px")
            // div.querySelectorAll("span")[0].setAttribute("height", "10px");
            // div.querySelectorAll("span")[1].setAttribute("height", "20px");
            // div.querySelectorAll("span")[2].setAttribute("height", "10px");

        }
        else {
            // div.querySelectorAll("span")[0].setAttribute("height", "20px");
            // div.querySelectorAll("span")[1].setAttribute("height", "10px");
            // div.querySelectorAll("span")[2].setAttribute("height", "20px");
        }
        flag = !flag;
    }, 200);

    headerHover(this, "250%");
}
headerCar.onmouseleave = function () {
    // console.log(this);
    // console.log(div);
    // if (div) {
    //     this.removeChild(div);
    //     div = null;
    // }
    window.clearTimeout(time.Timeout);
    window.clearInterval(time.Interval);
    headerHover(this, "0");

}