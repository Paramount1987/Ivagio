$(document).ready(function(){


  $( ".close-fast-review" ).click(function() {
       $('#fastReview').modal('hide');
  });
///////////////////////////////////

  $(".table-size tbody tr:nth-child(even)").addClass("even");
  $(".table-size tbody tr:last-child").addClass("last-tr");
  ///////////////////////////////////
    $(".select-type").chosen({
      width: "245px",
      disable_search: true
    });

    $(".select-size").chosen({
      width: "65px",
      disable_search: true
    });

    $(".select-pay").chosen({
      width: "410px",
      disable_search: true
    });

    $(".select-city").chosen({
      width: "410px",
      disable_search: true
    });

    $(".choice-city").chosen({
      width: "300px",
      disable_search: true
    });
  //////////////////////////////////

  $( ".arrow" ).click(function() {

    $(this).siblings(".accordion-inner").slideToggle();
  });

  $( ".accordion-question" ).click(function() {
    $(this).next(".accordion-answer").slideToggle();
    $(this).toggleClass("active");
  });

  $( ".form-size input[type='radio']" ).click(function() {
      if($("#male").is(":checked")){
         $(".man-pic").attr("src", "i/man.png");
    }else{
      $(".man-pic").attr("src", "i/woman.jpg");
    }
  });
//////////////////////////
  $( ".form-control-size" ).click(function() {
    $(".size").find(".active").removeClass("active");
    $(this).addClass("active");
    
  });


});