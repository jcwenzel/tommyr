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

// owl carousel
$(document).ready(function() {
  $('#m-carousel').owlCarousel({
  baseClass: 'm-carousel',
  theme: 'm-carousel',

  autoPlay: false,
	slideSpeed : 600,
  paginationSpeed : 400,

  items : 1,
  itemsDesktop : false,
  itemsDesktopSmall : false,
  itemsTablet: false,
  itemsMobile : false
  });
});

$(document).ready(function() {
  $('#m-carousel--full').owlCarousel({
  baseClass: 'm-carousel--full',
  theme: 'm-carousel--full',

  autoPlay: false,
  slideSpeed : 600,
  paginationSpeed : 400,

  items : 1,
  itemsDesktop : false,
  itemsDesktopSmall : false,
  itemsTablet: false,
  itemsMobile : false
  });
});