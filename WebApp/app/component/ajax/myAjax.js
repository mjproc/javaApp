/**
 * Created by Administrator on 2016/12/17.
 */

function myAjax(){
}
//urls:string datas:Object
myAjax.prototype.post=function(urls,datas,colback) {
    $.ajax({
        type:"post",
        url:urls,
        data:datas,
        success:function(data){
            colback(data);
        },
        error:function(data){
            layer.msg('系统错误');
            return null;
        }
    });
    return null;
}
//原型模式
var myAjaxs=new myAjax();
console.log(myAjaxs);