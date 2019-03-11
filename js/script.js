$(document).on("scroll", function(){
    if
  ($(document).scrollTop() > ($(window).height() * .6)){
      $("header").addClass("shrink");
      document.getElementById("logo").setAttribute("style", "max-height: 30px;");


    $(".tab").css({"background": "black", "color": "white"});
    $(".active").css({"background": "#E00000", "color": "black"});

    $(".container-menu").css({"background": "#2f3138"})

    }
    else
    {
        $("header").removeClass("shrink");
        document.getElementById("logo").setAttribute("style", "max-height: 75px;");

        $(".tab").css({"background": "transparent", "color": "white"});
        $(".active").css({"background": "transparent", "color": "#E00000"});

        $(".container-menu").css({"background": "black"})
    }
});

$(".tab").on("mouseover", function () {
    $(".tab").css("background", "red");
});