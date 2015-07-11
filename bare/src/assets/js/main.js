window.jQuery = window.$ = require('./vendor/jquery.min.js');

$(document).ready(function() {
  var menuSelector, mobileMenuSelector;

  if ($('body').attr('id') === 'main-document') {
    menuSelector = '#js-centered-navigation-menu';
    mobileMenuSelector = '#js-centered-navigation-mobile-menu';
  }
  else {
    menuSelector = '#js-navigation-menu';
    mobileMenuSelector = '#js-mobile-menu';
  }

  var menuToggle = $(mobileMenuSelector).unbind();
  $(menuSelector).removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $(menuSelector).slideToggle(function(){
      if($(menuSelector).is(':hidden')) {
        $(menuSelector).removeAttr('style');
      }
    });
  });
});
