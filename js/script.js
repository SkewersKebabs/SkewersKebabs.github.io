$(document).on("scroll", function(){
    if
  ($(document).scrollTop() > ($(window).height() * .4)){
        // $("header").css("background", "rgba(29,30,34, 1)");
        $("header").css("background", "black");

        document.getElementById("logo").setAttribute("style", "max-height: 30px;");

        $(".tab").css({"background": "rgba(0, 0, 0, 1)", "color": "white"});
        $(".active").css({"background": "black", "color": "#E00000"});

        // $(".container-menu").css({"background": "#2f3138"});

        // $("header").css("opacity", "0.3");
        $(".tab").css("opacity", "0.5");
        $("header").css({"background": "rgba(0, 0, 0, 0.5"});
        $("#logo").css({"opacity": "0.5"});



        $(".text").css("opacity", "0");
        $(".title").css({"opacity": "1"});

    }
    else
    {
        $("header").css("background", "transparent");
        document.getElementById("logo").setAttribute("style", "max-height: 75px;");

        $(".tab").css({"background": "transparent", "color": "white"});
        $(".active").css({"background": "transparent", "color": "#E00000"});

        // $(".container-menu").css({"background": "black"})     
        
        // $("header").css("opacity", 1);
        $(".tab").css("opacity", "1");
        $("header").css({"background": "rgba(0, 0, 0, 0"});
        $("#logo").css({"opacity": "1"});


        $(".text").css("opacity", "1");
        $(".title").css({"opacity": "0"});
    }




    // if ($(document).scrollTop() > 0) {
    //     document.getElementById("logo").setAttribute("style", "max-height: 30px;")
    // }
    // else {
    //     document.getElementById("logo").setAttribute("style", "max-height: 75px;")
    // }
});

// $(document).on("scroll", function() {
//     if ($(document).scrollTop() > ($(window).height() * .4)) {
//         $(".text").text("");
//         $(".title").css({"color": "white", "border-bottom": "1px solid white"});
//     }

//     else {
//         $(".text").text("Menu");
//         $(".title").css({"color": "#2a2e35",  "border-bottom": "1px solid #2A2E35"});
//     }
// });


// ON-HOVER FOR ENTIRE HEADER BLOCK

// $(document).ready( function() { 
//         $("header").hover(function() { 
//             if ($(document).scrollTop() > ($(window).height() * .5)){
//                 $("header").css({"opacity": "1"});
//                 // $(".tab").css({"background": "white", "color": "black", "box-shadow": "inset 0px 0px 2px 2px black"});
//                 $(".tab").css({"box-shadow": "inset 0px 0px 2px 2px white"});
//                 // $(".active").css("color", "#E00000");
//             }
//         },
//         function() {
//             if ($(document).scrollTop() > ($(window).height() * .5)){
//                 $("header").css({"opacity": "0.5"});
//                 // $(".tab").css({"background": "black", "color": "white", "box-shadow": ""});
//                 $(".tab").css({"box-shadow": ""});
//                 // $(".active").css("color", "#E00000");
//             }
//         }); 

//         // $("#tab-menu").hover(function() {
//         //     $("#tab-menu").css("background", "green");

//         // })
// }); 



// HERO HEADER COPIED FROM ERIC PORTER: https://codepen.io/EricPorter/pen/rLJVNv
(function () {
    $(window).scroll(function () { 
        var Num = $(window).scrollTop() / 500;
        var Num2 = $(window).scrollTop() * .0004; // higher number for more zoom
        var Num2mod = Num2 + 1;
        var Num3 = $(window).scrollTop() * .2; // Title speed
        var Num3mod = Num3 + 1;
        return $('.shader').css('opacity', Num),
        $(".background").css({"transform":"scale(" + Num2mod + ")"}),
        $(".videoContainer").css({"transform":"scale(" + Num2mod + ")"}),
        $(".banner").css({"margin-top":"-" + Num3mod + "px"});
    });
}.call(this));



$(document).ready(function() {
    $(".nav-icon").on("click touchstart", function() {
        $(".nav-icon").toggleClass("clicked");
        $(".nav-strip").toggleClass("slide");
    })
});