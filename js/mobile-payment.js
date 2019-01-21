jQuery(document).ready(function($) {
  setTimeout(function() {
    $('.circle-loader').toggleClass('load-complete');
    $('.checkmark').toggle();
    $('.processing-in-progress').addClass('processing-done');
    $('.processing-successful').addClass('processing-successful-done');
    $('.processing-text').addClass('fade-out');
  }, 3000);
  document.ontouchmove = function(e){
    e.preventDefault();
    }

  input.onfocus = function () {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
});
