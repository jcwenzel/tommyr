// Document Ready Function & owlCarousel
$(document).ready(function() {
  $('#m-carousel').owlCarousel({
    baseClass: 'm-carousel',
    theme: 'm-carousel',

    autoPlay: true,
    slideSpeed : 1200,
    paginationSpeed : 600,

    items : 1,
    itemsDesktop : false,
    itemsDesktopSmall : false,
    itemsTablet: false,
    itemsMobile : false
  });
  $('#m-carousel--full').owlCarousel({
    baseClass: 'm-carousel--full',
    theme: 'm-carousel--full',

    autoPlay: true,
    slideSpeed : 2400,
    paginationSpeed : 1200,

    items : 1,
    itemsDesktop : false,
    itemsDesktopSmall : false,
    itemsTablet: false,
    itemsMobile : false
  });
});

// responsive nav
var navigation = responsiveNav("#nav-js", {
  animate: true,        // Boolean: Use CSS3 transitions, true or false
  transition: 400,      // Integer: Speed of the transition, in milliseconds
  label: "Menu",        // String: Label for the navigation toggle
  insert: "after",      // String: Insert the toggle before or after the navigation
  customToggle: "",     // Selector: Specify the ID of a custom toggle
  openPos: "relative",  // String: Position of the opened nav, relative or static
  jsClass: "js",        // String: 'JS enabled' class which is added to <html> el
  init: function(){},   // Function: Init callback
  open: function(){},   // Function: Open callback
  close: function(){}   // Function: Close callback
});

var $buoop = {
  vs:{ //Control Version Number of Browser
    i:8,    // IE 8- (Why would you do this?)
    f:20,   // Firefox 20-(Butterface)
    o:10.6, // Opera 10.6-(As boring as real Opera)
    s:5,    // Safari 5-(Meh...)
    n:9     // Netscape 9(You must really hate yourself)
  }
} 
$buoop.ol = window.onload; 
window.onload=function(){ 
  try {
    if ($buoop.ol) 
      $buoop.ol();
  }
  catch (e) {} 
  var e = document.createElement("script"); 
  e.setAttribute("type", "text/javascript"); 
  e.setAttribute("src", "http://browser-update.org/update.js"); 
  document.body.appendChild(e); 
} 

$('#menu-corporate').on({
  click: function(){
    $('#_corporate-menu, .m-overlay-wrapper').removeClass('s-is-hidden');
  }
});

$('.m-overlay').find('.m-button--close').on({
  click: function(){
    $('#_corporate-menu, .m-overlay-wrapper').addClass('s-is-hidden');
  }
});

$('.m-nav__link--dropdown').on({
  click: function(){
    $(this).parent().children('.m-nav--sub-nav').toggleClass('s-is-visible');
  }
});


