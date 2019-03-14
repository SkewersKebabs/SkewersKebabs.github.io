$(document).on("scroll", function(){
    if
  ($(document).scrollTop() > ($(window).height() * .9)){
      $("header").addClass("shrink");
      document.getElementById("logo").setAttribute("style", "max-height: 30px;");

    //   var tabs = document.getElementsByClassName("tab");
    //   for (var i = 0; i < tabs.length; i++) {
    //       tabs[i].setAttribute("style", "background: #1d1e22; color: white; box-shadow: 0px 0px 2px 2px black;");
    //   }

    $(".tab").css({"background": "black", "color": "white"});

    //   var activeTab = document.getElementsByClassName("active");
    //   for (var i = 0; i < activeTab.length; i++) {
    //       activeTab[i].setAttribute("style", "background: #E00000; color: black; box-shadow: 0px 0px 2px 2px black;");
    //   }

    $(".active").css({"background": "#E00000", "color": "black"});

    }
    else
    {
        $("header").removeClass("shrink");
        document.getElementById("logo").setAttribute("style", "max-height: 75px;");

        // var tabs = document.getElementsByClassName("tab");
        // for (var i = 0; i < tabs.length; i++) {
        //     tabs[i].setAttribute("style", "background: transparent; color: white; box-shadow: ;");
        // }

        $(".tab").css({"background": "transparent", "color": "white"});

        // var activeTab = document.getElementsByClassName("active");
        // for (var i = 0; i < activeTab.length; i++) {
        //     activeTab[i].setAttribute("style", "background: transparent; color: #E00000; box-shadow: ;");
        // }

        $(".active").css({"background": "transparent", "color": "#E00000"});
    }
});

$(".tab").on("mouseover", function () {
    $(".tab").css("background", "red");
});

// $(document).ready(function() {
// var angle = Math.atan2($(window).width(),$(window).height()); // in radians
// $('.index-banner-background1').css('transform','translate(-50%, -50%) skew('+angle+'rad)');
// $('.index-banner-background2').css('transform','translate(-50%, -50%) skew(-'+angle+'rad)');
// });