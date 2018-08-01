$(document).ready(function() {
    $("#burger").click(function () {
        $("#menupanel").slideDown();
        $(".top-nav li").css("display","block");
        $(".top-contacts").css("display","block");
        $("#burger").hide();
        $("#close").show();

    });
    $("#close").click(function () {
        $("#menupanel").slideUp();
        $(".top-nav li").css("display","none");
        $(".top-contacts").css("display","none");
        $("#burger").show();
        $("#close").hide();


    });





   $("#leftmenu li").eq(0).mouseover(function () {
       $('#img1 ').attr("src","images/features/1green.png");
       $('#leftmenu p').eq(0).css("color","black");
       $('#greenline').slideDown("slow",function () {
           $(this).css("top", "0");
           $(".preview").eq(0).addClass("active");
           $(".show").css("display","block");
       });
       });
       $("#leftmenu li").eq(0).mouseleave(function () {
           $('#img1 ').attr("src","images/features/1.png");
           $('#leftmenu p').eq(0).css("color","#99acac");
           $(".preview").eq(0).removeClass("active");
           $(".show").css("display","block");
       });


    $("#leftmenu li").eq(1).mouseover(function () {
        $('#img2 ').attr("src", "images/features/2.png");
        $('#leftmenu p').eq(1).css("color", "black");
        $('#greenline').slideDown("slow", function () {
            $(this).css("top", "110px");
        });
        $(".preview").eq(1).addClass("active");
        $(".show").css("display","none");
    });
        $("#leftmenu li").eq(1).mouseleave(function () {
            $('#img2 ').attr("src","images/features/2gray.png");
            $('#leftmenu p').eq(1).css("color","#99acac");
            $(".preview").eq(1).removeClass("active");
            $(".show").css("display","block");
        });


    $("#leftmenu li").eq(2).mouseover(function () {
        $('#img3 ').attr("src","images/features/3green.png");
        $('#leftmenu p').eq(2).css("color","black");
        $('#greenline').slideDown("slow", function () {
            $(this).css("top", "231px");
        });
        $(".preview").eq(2).addClass("active");
        $(".show").css("display","none");
        $("#leftmenu li").eq(2).mouseleave(function () {
            $('#img3 ').attr("src","images/features/3.png");
            $('#leftmenu p').eq(2).css("color","#99acac");
            $(".preview").removeClass("active");
            $(".show").css("display","block");
        });
    });

    $("#leftmenu li").eq(3).mouseover(function () {
        $('#img4 ').attr("src","images/features/4green.png");
        $('#leftmenu p').eq(3).css("color","black");
        $('#greenline').slideDown("slow", function () {
            $(this).css("top", "337px");
        });
        $(".preview").eq(3).addClass("active");
        $(".show").css("display","none");
        $("#leftmenu li").eq(3).mouseleave(function () {
            $('#img4 ').attr("src","images/features/4.png");
            $('#leftmenu p').eq(3).css("color","#99acac");
            $(".preview").eq(3).removeClass("active");
            $(".show").css("display","block");
        });
    });

    $("#leftmenu li").eq(4).mouseover(function () {
        $('#img5 ').attr("src","images/features/5green.png");
        $('#leftmenu p').eq(4).css("color","black");
        $('#greenline').slideDown("slow", function () {
            $(this).css("top", "463px");
        });
        $(".preview").eq(4).addClass("active");
        $(".show").css("display","none");
        $("#leftmenu li").eq(4).mouseleave(function () {
            $('#img5').attr("src","images/features/5.png");
            $('#leftmenu p').eq(4).css("color","#99acac");
            $(".preview").eq(4).removeClass("active");
            $(".show").css("display","block");
        });
    });








    $('.slider').bxSlider({

        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 350,
        auto: true,


    });
    $('.bx-pager').addClass('pager');
    $('.testimonials').bxSlider({
        auto: true,
        slideWidth:600,
        maxSlides:1,

    });

});

