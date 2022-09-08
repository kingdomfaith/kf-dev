$(document).ready(function () {
    $(".menu-toggle").click(function(e){
        e.preventDefault()
        if ($(".menu").hasClass("active")) {
            $(".menu").removeClass("active");
        }
        else {
            $(".menu").addClass("active");
        }
      });
});