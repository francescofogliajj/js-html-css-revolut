$(document).ready(

  function() {

    $(".position-relative").mouseenter(
      function() {
        $(this).children(".dropdown").toggle();
      }
    );

    $(".position-relative").mouseleave(
      function() {
        $(this).children(".dropdown").toggle();
      }
    );

  }

);
