$(document).ready(function () {
  var menuSelector = '#js-navigation-menu';
  var mobileMenuSelector = '#js-mobile-menu';
  var menuToggle = $(mobileMenuSelector).unbind();

  $(menuSelector).removeClass('show');

  menuToggle.on('click', function (e) {
    e.preventDefault();

    $(menuSelector).slideToggle(function () {
      if ($(menuSelector).is(':hidden')) {
        $(menuSelector).removeAttr('style');
      }
    });
  });
});
