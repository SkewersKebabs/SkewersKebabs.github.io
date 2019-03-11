$(document).on("scroll", function(){
    if
  ($(document).scrollTop() > 20){
      $("header").addClass("shrink");
      document.getElementById("logo").setAttribute("style", "max-height: 30px;");

      var tabs = document.getElementsByClassName("tab");
      for (var i = 0; i < tabs.length; i++) {
          tabs[i].setAttribute("style", "background: #1d1e22; color: white; box-shadow: 0px 0px 2px 2px black;");
      }

      var activeTab = document.getElementsByClassName("active");
      for (var i = 0; i < activeTab.length; i++) {
          activeTab[i].setAttribute("style", "background: red; color: black; box-shadow: 0px 0px 2px 2px black;");
      }
    }
    else
    {
        $("header").removeClass("shrink");
        document.getElementById("logo").setAttribute("style", "max-height: 75px;");

        var tabs = document.getElementsByClassName("tab");
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].setAttribute("style", "background: transparent; color: white; box-shadow: ;");
        }

        var activeTab = document.getElementsByClassName("active");
        for (var i = 0; i < activeTab.length; i++) {
            activeTab[i].setAttribute("style", "background: transparent; color: red; box-shadow: ;");
        }
    }
});