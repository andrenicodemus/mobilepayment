jQuery(document).ready(function($) {
  setTimeout(function() {
    $('.circle-loader').toggleClass('load-complete');
    $('.checkmark').toggle();
    $('.processing-in-progress').addClass('processing-done');
    $('.processing-successful').addClass('processing-successful-done');
    $('.processing-text').addClass('fade-out');
  }, 5000);
});
