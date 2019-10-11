(function(){
    var v=document.querySelectorAll("#video>video")
    var v1=document.getElementById("v1")
    var v2=document.getElementById("v2")
    var v3=document.getElementById("v3")
    var v4=document.getElementById("v4")
    var v5=document.getElementById("v5")
    for(let i=0;i<v.length;i++){
        v[i].onpause=function(){
            for(var key of v){
                key.style.display="none"
            }
            v[i+1].style.display="block"
        }
      
            
    }
})();