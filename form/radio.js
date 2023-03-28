$("img").click(function () {
    //this is change select value 1
    var currentValue = ($(this).attr("alt"));
    /* change select menu */
    $('#fruits').val(currentValue).trigger('change');
    /* change radio button */
    $('input:radio[value="' + currentValue + '"]').prop('checked', true).trigger('change');
  });
  
  /* set first radio as active */
  $("img:first").addClass("active");
  
  /* change Active State on click/select */
  $("img").click(function () {
    $("img").removeClass("active");
    $(this).addClass("active");     
  });
  
  /* on select change the active state */
  $("#fruits").change(function () {
    var currentValue = $(this).val();
    $("img").removeClass("active");
    $('img[alt="' + currentValue + '"]').addClass("active");
    $('input:radio[value="' + currentValue + '"]').prop('checked', true).trigger('change');
  });
  
  /* on radio change the active state */
  $("input[type=radio]").change(function () {
    var currentValue = $(this).val();
    $("img").removeClass("active");
    $('img[alt="' + currentValue + '"]').addClass("active");
    $('#fruits').val(currentValue).trigger('change');
  });
  