(function ($) {
"use strict";
// scrollToTop
//alert('please scroll to bottom')
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '100', // Distance from top before showing element (px)
	topSpeed: 7100, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	scrollSpeed: 2000, //Scroll speed
	animationInSpeed: 400, // Animation in speed (ms)
	animationOutSpeed: 400, // Animation out speed (ms)
	scrollText: '<i class="icon-up-open"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});
})(jQuery);