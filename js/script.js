$(document).on("scroll", function(){
    if
  ($(document).scrollTop() > 50){
      $("header").addClass("shrink");
      document.getElementById("logo").setAttribute("style", "max-height: 100%;");

      var tabs = document.getElementsByClassName("tab");
      for (var i = 0; i < tabs.length; i++) {
          tabs[i].setAttribute("style", "background: white; color: black;");
      }

      var activeTab = document.getElementsByClassName("active");
      for (var i = 0; i < activeTab.length; i++) {
          activeTab[i].setAttribute("style", "background: red; color: black;");
      }
    }
    else
    {
        $("header").removeClass("shrink");
        document.getElementById("logo").setAttribute("style", "max-height: 75px;");

        var tabs = document.getElementsByClassName("tab");
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].setAttribute("style", "background: transparent; color: white;");
        }

        var activeTab = document.getElementsByClassName("active");
        for (var i = 0; i < activeTab.length; i++) {
            activeTab[i].setAttribute("style", "background: transparent; color: red;");
        }
    }
});