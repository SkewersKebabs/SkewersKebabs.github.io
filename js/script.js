$(document).on("scroll", function(){
    if
  ($(document).scrollTop() > 50){
      $("header").addClass("shrink");
      document.getElementById("logo").setAttribute("style", "max-height: 100%;");
    }
    else
    {
        $("header").removeClass("shrink");
        document.getElementById("logo").setAttribute("style", "max-height: 75px;");
    }
});