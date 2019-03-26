*ScrolltoTop*
## How to use
```
Simply include the jquery.scrollUp.js file and place the following in the 
head of your document (make sure jQuery is included):
```

## *Call for html file*
```
jquery-1.12.4.min.js
jquery.scrollUp.js
main.js
```
### Customizable Css:
```
#scrollUp {
	background: #7DBA2F;
	height: 35px;
	width: 35px;
	right: 50px;
	bottom: 50px;
	color: #fff;
	font-size: 20px;
	text-align: center;
	border-radius: 50%;
	font-size: 20px;
	line-height: 34px;
}
#scrollUp:hover {
	background: #444;
}
```

## *Customizable main.js:*
```
 (function ($) {
"use strict";
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
```

## Demo Link: *https://alimranhung.github.io/ScrolltoTop/*
