$(function(){
    $(".animate").scrolla({
        mobile: true,
        once: false
    });
})
$(function(){
    $("header .open, #open").on("click",function(){
        $("body").css({"overflow":"hidden"});
        $("header .open").css({"display":"none"})
        $("header .bg").css({"display":"block"});
        $("header nav").addClass("on");
    });
    $("header .close, header .bg, header nav ul li a, .modal_overlay, .closeModal").on("click",function(){
        $("body").css({"overflow":"auto"});
        $("header .bg").css({"display":"none"});
        $("header .open").css({"display":"block"});
        $("header nav").removeClass("on");
    });
});


$(document).ready(function(){
    $(".gnb li a, #open a").click(function(e){
        e.preventDefault();
        $("html,body").animate({scrollTop:$(this.hash).offset().top},500)
    })
})
    
