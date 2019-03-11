$(document).on("scroll", function(){
    if
  ($(document).scrollTop() > ($(window).height() * .6)){
        $("header").css("background", "rgba(29,30,34, 1)");
        document.getElementById("logo").setAttribute("style", "max-height: 30px;");


        $(".tab").css({"background": "rgba(0, 0, 0, 1", "color": "white"});
        $(".active").css({"background": "rgba(224,0,0, 1)", "color": "black"});

        $(".container-menu").css({"background": "#2f3138"});

        $("header").css("opacity", "0.5");
    }
    else
    {
        $("header").css("background", "transparent");
        document.getElementById("logo").setAttribute("style", "max-height: 75px;");

        $(".tab").css({"background": "transparent", "color": "white"});
        $(".active").css({"background": "transparent", "color": "#E00000"});

        $(".container-menu").css({"background": "black"})     
        
        $("header").css("opacity", 1);
    }
});



$(document).on("scroll", function() { 
        $(".tab").hover(function() { 
            if ($(document).scrollTop() > ($(window).height() * .6)){
                $("header").css("opacity", "1");
            }
        },
        function() {
            if ($(document).scrollTop() > ($(window).height() * .6)){
                $("header").css("opacity", "0.5");
            }
        }); 
}); 