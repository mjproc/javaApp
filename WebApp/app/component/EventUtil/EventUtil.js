/**
 * Created by Administrator on 2016/12/22.
 */
var EventUtil = {
    addHandler: function (oElement, sEvent, fnHandler) {  //sevent不带on
        oElement.addEventListener ? oElement.addEventListener(sEvent, fnHandler, false) : oElement.attachEvent("on" + sEvent, fnHandler)
    },
    removeHandler: function (oElement, sEvent, fnHandler) {
        oElement.removeEventListener ? oElement.removeEventListener(sEvent, fnHandler, false) : oElement.detachEvent("on" + sEvent, fnHandler)
    },
    addLoadHandler: function (fnHandler) {
        this.addHandler(window, "load", fnHandler)
    }
};
//例子
// EventUtil.addHandler(window,"scroll",function () {
//    var top = document.documentElement.scrollTop || document.body.scrollTop;
//    if(nav.className.indexOf('flexnav')===-1&&top>0)
//    {
//        //nav.addClass='flexnav';
//        //nav.setAttribute('class','flexnav');  //只能添加一个
//        //nav.setAttribute("class", ' flexnav'); //firefox
//        //nav.setAttribute("className", ' flexnav'); //ie
//        nav.className+=' flexnav';
//    }
//    else if(top==0){
//        //nav.removeClass='flexnav';
//        //nav.removeAttribute('class','flexnav');
//        nav.className='nav nav-top ';
//    }
//});
