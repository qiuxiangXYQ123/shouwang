//视频进度条效果
(function(){
    var v=document.querySelectorAll("#video>video")


})();


//视频轮播效果
(function(){
    var v=document.querySelectorAll("#video>video")
    var i=0;
    function m(to){
        //如果用户没有传入要跳到第几张图，就默认跳到当前图的下一个张
        if(to==undefined){
            to=i+1;
        }    
        i=to;//先将表示第几张图片的变量i变为目标位置
        //再用i计算ulimgs的marginLeft距离
        for(var key of v){
            key.style.display="none"
        }
        v[i].style.display="block"
        v[i].play();
        
        //先删除所有小圆点的class
        if(i==4){
            i=-1;
            //当transition动画播放完之后，才        
        }
        //再给当前位置的小圆点添加class active
    }
    for(var key of v){
        key.onpause=function(){
            m();
        }
    }
})();

    
    
    
    
    
    
    