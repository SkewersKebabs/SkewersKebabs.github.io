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
$(document).ready(function() {
    $(".nav-icon").on("click touchstart", function() {
        $(".nav-icon").toggleClass("clicked");
        $(".nav-strip").toggleClass("slide");
        return false;
    })
});



$(window).on("scroll", function() { 

    var increment = $(window).scrollTop() / 600; // ORIGINAL INCREMENT AMOUNT

    var zoom = $(window).scrollTop() * .00045; // ZOOM
    var zoomIncrement = zoom + 1;
    
    var titleShift = $(window).scrollTop() * .2; // SPEED OF MOVING TITLE TEXT
    var titleShiftIncrement = titleShift + 1;

    return $('.shader').css('opacity', increment),
        $(".background").css("transform", "scale(" + zoomIncrement + ")"),
        $(".videoContainer").css("transform", "scale(" + titleShift + ")"),
        $(".banner").css("margin-top", "-" + titleShiftIncrement + "px");
}).call(this);



