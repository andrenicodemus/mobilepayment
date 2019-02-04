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
    $('.processing-successful').addClass('processing-done');
    $('.post-error-message').removeClass('hidden');
    $('.sliding-canvas').addClass('slide-away');
    $('.processing-text-error').attr('style','display:none');
    $('.processing-amount').addClass('fade-out');
    $('.processing-text').addClass('fade-out');
    $('.circle-loader-error').toggleClass('load-complete-error');
  }, 2000);

});
