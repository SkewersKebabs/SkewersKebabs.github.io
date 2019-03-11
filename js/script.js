$(document).on("scroll", function(){
    if
  ($(document).scrollTop() > ($(window).height() * .5)){
        // $("header").css("background", "rgba(29,30,34, 1)");
        $("header").css("background", "black");

        // document.getElementById("logo").setAttribute("style", "max-height: 30px;");

        $(".tab").css({"background": "rgba(0, 0, 0, 1)", "color": "white"});
        $(".active").css({"background": "black", "color": "#E00000"});

        // $(".container-menu").css({"background": "#2f3138"});

        $("header").css("opacity", "0.5");
    }
    else
    {
        $("header").css("background", "transparent");
        // document.getElementById("logo").setAttribute("style", "max-height: 75px;");

        $(".tab").css({"background": "transparent", "color": "white"});
        $(".active").css({"background": "transparent", "color": "#E00000"});

        $(".container-menu").css({"background": "black"})     
        
        $("header").css("opacity", 1);
    }

    if ($(document).scrollTop() > 0) {
        document.getElementById("logo").setAttribute("style", "max-height: 30px;")
    }
    else {
        document.getElementById("logo").setAttribute("style", "max-height: 75px;")
    }
});



$(document).ready( function() { 
        $("header").hover(function() { 
            if ($(document).scrollTop() > ($(window).height() * .6)){
                $("header").css("opacity", "1");
            }
        },
        function() {
            if ($(document).scrollTop() > ($(window).height() * .6)){
                $("header").css("opacity", "0.5");
            }
        }); 

        // $("#tab-menu").hover(function() {
        //     $("#tab-menu").css("background", "green");

        // })
}); 