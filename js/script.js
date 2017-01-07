// A trick from CSS Tricks blog
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000);
        window.scrollBy(0, 100);
        return false;
      }
    }
  });
});

$(".navbar-nav li a").click(function () {
  $(".navbar-collapse").hide(1000);
});

$(".navbar-header button").click(function () {
  $(".navbar-collapse").show(1000);
});
