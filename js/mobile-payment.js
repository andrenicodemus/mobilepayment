jQuery(document).ready(function($) {
  setTimeout(function() {
    $('.circle-loader').toggleClass('load-complete');
    $('.checkmark').toggle();
  }, 2000);
});
