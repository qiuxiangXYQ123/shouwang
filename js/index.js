// 英雄展示
$(function(){
    $("#app div a img").mouseover(function(){
        var src=$(this).attr("src")
        console.log(src)
        var s=src.split("");
        s.splice(8,1,1);
        s=s.join("");
        $("#heroDetail>div>img").attr({src:`${s}`});
    })
})
