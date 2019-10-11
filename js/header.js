$(function(){
    $.ajax({
        url:"http://127.0.0.1:5500/html/head.html",
        type:"get",
        success:function(result){
            $(result).replaceAll("header");
            $(`<link rel="stylesheet" href="../css/header.css">`)
            .appendTo("head");
            $("#head2>nav:last>ul")
            .on("click",".headnav2>.head-a",function(){
                $(this).next()
                .slideToggle(200).parent().siblings(".headnav2")
                .children("ul").slideUp();
                if($(this).hasClass("bian")){
                    $(this).removeClass("bian")
                    $(".head-a").removeClass("aftershang")
                }else{
                    $(".head-a").removeClass("bian")
                    $(".head-a").removeClass("aftershang")
                    $(this).addClass("bian")
                    $(this).addClass("aftershang")
                }
            })
            $("#head3>a:first-child").click(function(){
                $("#head2").slideToggle();
            })
            $("#head2>div").click(function(){
                $("#head2").slideToggle();
            }) 

            $(document).scroll(function() {
                var scroH = $(document).scrollTop();
                if(scroH >10){
                    $("#head2").css("top","0px");
                    $("#head2>nav").css("width","100%")
                }else if(scroH<10){
                    $("#head2").css("top","80px");
                    $("#head2>nav").removeAttr("style");
                }
            });
        }
    })
})
