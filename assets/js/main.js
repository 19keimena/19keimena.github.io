$(function() {
  if($('#scroll-placeholder').is(':visible')) {
    $('html, body').animate({
      scrollTop: $('#scroll-placeholder').offset().top - 60
    }, 1000);
  }
});
