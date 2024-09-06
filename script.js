$(window).scroll(function() {
  var scrollPosition = $(window).scrollTop();
  if (scrollPosition > 0) {
    $('.navbar').addClass('scrolling');
  } else {
    $('.navbar').removeClass('scrolling');
  }
});




var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})