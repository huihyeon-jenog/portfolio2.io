$(function(){
    $(".animate").scrolla({
        mobile: true,
        once: false
    });
})
$(function(){
    $("header .open").on("click",function(){
        $("body").css({"overflow":"hidden"});
        $("header .open").css({"display":"none"})
        $("header .bg").css({"display":"block"});
        $("header nav").addClass("on");
    });
    $("header .close, header .bg").on("click",function(){
        $("body").css({"overflow":"auto"});
        $("header .open").css({"display":"block"});

        $("header .bg").css({"display":"none"});
        $("header nav").removeClass("on");
    });
});


$(document).ready(function(){
    $(".gnb li a").click(function(e){
        e.preventDefault();
        $("html,body").animate({scrollTop:$(this.hash).offset().top},500)
    })
})
    
