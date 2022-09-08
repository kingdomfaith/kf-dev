$(document).ready(function () {
    $(".menu-toggle").click(function(e){
        if ($(".menu").hasClass("active")) {
            $(".menu").removeClass("active");
        }
        else {
            $(".menu").addClass("active");
            $(".dropdown-link").removeClass("active")
        }
      });

      $(".dropdown-link").click(function(e){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        }
        else {
            $(this).addClass("active");
        }       
      });

});