//轮播图
var slideIndex = 1;
show(slideIndex); //onload加载调用

function current(n) {
    show(slideIndex = n);
}

function show(n) {
    var i;
    var oMSon = document.getElementsByClassName("mySlides");
    var oDot = document.getElementsByClassName("dot");
    var len = oMSon.length; //len=4

    //为了清除样式
    for (i = 0; i < len; i++) {
        oMSon[i].style.display = "none";
    }
    for (i = 0; i < oDot.length; i++) {
        oDot[i].className = oDot[i].className.replace(" active", "");
    }

    //为了显示出盒子
    oMSon[slideIndex - 1].style.display = "block";
    oDot[slideIndex - 1].className += " active";

}
var slideIndex = 0;
show1(); //自动轮播

function show1() {
    var i;
    var oMSon1 = document.getElementsByClassName("mySlides");
    var oDot1 = document.getElementsByClassName("dot");
    for (i = 0; i < oMSon1.length; i++) {
        oMSon1[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > oMSon1.length) { slideIndex = 1 }
    for (i = 0; i < oDot1.length; i++) {
        oDot1[i].className = oDot1[i].className.replace(" active", "");
    }
    oMSon1[slideIndex - 1].style.display = "block";
    oDot1[slideIndex - 1].className += " active";
    setTimeout(show1, 2000); // 切换时间为 2 秒

}
//新闻页
var slideIndex2 = 1;
show2();

function current2(n) {
    show2(slideIndex2 = n);
}

function upperNext2(n) {
    show2(slideIndex2 += n);
}

function show2(n) {
    var oMButtom = document.getElementsByClassName("m_buttom");
    var oDot2 = document.getElementsByClassName("dot2");
    var oUpper2 = document.getElementsByClassName("upper2");
    if (n < 1) { slideIndex2 = 1 }
    if (n > 4) { slideIndex2 = 4 }
    for (i = 0; i < oMButtom.length; i++) {
        oMButtom[i].style.display = "none";
    }

    for (i = 0; i < oMButtom.length; i++) {
        oDot2[i].className = oDot2[i].className.replace(" active2", "");
    }

    oMButtom[slideIndex2 - 1].style.display = "block";
    oDot2[slideIndex2 - 1].className += " active2";
    if (slideIndex2 == 1) {
        oUpper2[0].style.color = "#ccc";
    } else {
        oUpper2[0].style.color = "";
    }
}

//作品展览页
var slideIndex3 = 1;
show3();

function current3(n) {
    show3(slideIndex3 = n);
}

function upperNext3(n) {
    show3(slideIndex3 += n);
}

function show3(n) {
    var oMButtom3 = document.getElementsByClassName("m_buttom3");
    var oDot3 = document.getElementsByClassName("dot3");
    var oUpper3 = document.getElementsByClassName("upper3");
    if (n < 1) { slideIndex3 = 1 }
    if (n > 4) { slideIndex3 = 4 }
    for (i = 0; i < oMButtom3.length; i++) {
        oMButtom3[i].style.display = "none";
    }

    for (i = 0; i < oMButtom3.length; i++) {
        oDot3[i].className = oDot3[i].className.replace(" active2", "");
    }

    oMButtom3[slideIndex3 - 1].style.display = "block";
    oDot3[slideIndex3 - 1].className += " active2";
    if (slideIndex3 == 1) {
        oUpper3[0].style.color = "#ccc";
    } else {
        oUpper3[0].style.color = "";
    }
}
//登录页
function show4() {
    var oLogin = document.getElementsByClassName("login");
    var oDiv4 = document.getElementsByClassName("c");
    var oBg = document.getElementById("bg");

    for (i = 0; i < oDiv4.length; i++) {
        oDiv4[i].style.display = "none";
    }
    oLogin[0].style.display = "block";

}

function close4() {
    var oLogin = document.getElementsByClassName("login");
    oLogin[0].style.display = "none";
}

// window.ondblclick = function hide4() {
//     var oDiv4 = document.getElementsByClassName("c");
//     var li = document.getElementById("c_show").getElementsByTagName("li");
//     for (i = 0; i < oDiv4.length; i++) {
//         oDiv4[i].style.display = "none";
//         li[i].style.opacity = ".5";
//     }
// }



//窗口滚动方法

// var scrollFunc = function() {
//         var oHeader = document.getElementsByClassName("header");
//         e = window.event;
//         if (e.wheelDelta) { //第一步：先判断浏览器IE，谷歌滑轮事件 
//             if (e.wheelDelta > 0) { //当滑轮向上滚动时 
//                 //console.log("滑轮向上滚动");
//                 oHeader[0].style.position = "relative";
//                 oHeader[0].style.top = "0px";
//                 oHeader[0].style.zIndex = "";

//             }
//             if (e.wheelDelta < 0) { //当滑轮向下滚动时
//                 //console.log("滑轮向下滚动");
//                 oHeader[0].style.position = "fixed";
//                 oHeader[0].style.top = "0px";
//                 oHeader[0].style.zIndex = "2";
//             }
//         } else if (e.detail) { //Firefox滑轮事件 
//             if (e.detail > 0) { //当滑轮向上滚动时 
//                 //console.log("滑轮向上滚动");
//                 oHeader[0].style.position = "relative";
//                 oHeader[0].style.top = "0px";
//                 oHeader[0].style.zIndex = "";
//             }
//             if (e.detail < 0) { //当滑轮向下滚动时
//                 //console.log("滑轮向下滚动");
//                 oHeader[0].style.position = "fixed";
//                 oHeader[0].style.top = "0px";
//                 oHeader[0].style.zIndex = "2";
//                 oHeader[0].style.transition = "2s";
//             }
//         }
//     }
//     //给页面绑定滑轮滚动事件
// if (document.addEventListener) { //firefox 
//     document.addEventListener('DOMMouseScroll', scrollFunc, false);
// }
// //滚动滑轮触发scrollFunc方法 //ie 谷歌 
// window.onmousewheel = document.onmousewheel = scrollFunc;


window.onscroll = function() {
    var oHeader = document.getElementsByClassName("header");
    var oScrollNum = document.documentElement.scrollTop || document.body.scrollTop;
    if (oScrollNum > 90) {
        oHeader[0].style.position = "fixed";
        oHeader[0].style.top = "0px";
        oHeader[0].style.zIndex = "2";
    } else {
        oHeader[0].style.position = "relative";
        oHeader[0].style.top = "0px";
        oHeader[0].style.zIndex = "";

    }
}