jQuery(document).ready(function($) {
  $('.checkmark').hide();
  $('.error-x').hide();
  $('.btn-retry').hide();
  $('.selectpicker').selectpicker();
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $('.selectpicker').selectpicker('mobile');
  }

  setTimeout(function() {
    $('.circle-loader').toggleClass('load-complete');
    $('.checkmark').toggle();
    $('.error-x').toggle();
    $('.btn-retry').toggle();
    $('.processing-in-progress').addClass('processing-done');
    $('.processing-successful').addClass('processing-done');
    $('#amount-error').hide();
    $('.processing-text-error').attr('style','opacity:0');
    $('.processing-text').addClass('fade-out');
    $('.circle-loader-error').toggleClass('load-complete-error');
  }, 3000);

});
