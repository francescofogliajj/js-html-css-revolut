$(document).ready(

  function() {

    $("#abbonamenti").mouseenter(
      function() {
        $(".abbonamenti").toggle();
      }
    ).mouseleave(
      function() {
        $(".abbonamenti").toggle();
      }
    )

    $("#chi-siamo").mouseenter(
      function() {
        $(".chi-siamo").toggle();
      }
    ).mouseleave(
      function() {
        $(".chi-siamo").toggle();
      }
    )

    $("#aiuto").mouseenter(
      function() {
        $(".aiuto").toggle();
      }
    ).mouseleave(
      function() {
        $(".aiuto").toggle();
      }
    )

  }

);
