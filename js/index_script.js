$(document).ready(function() {
    $(".nav-icon").on("click touchstart", function() {
        $(".nav-icon").toggleClass("clicked");
        $(".nav-strip").toggleClass("slide");
        return false;
    })
});
