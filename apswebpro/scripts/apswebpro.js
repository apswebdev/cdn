/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

(function(){
	var parallax = document.querySelectorAll(".parallax"),
	speed = 0.5;
	window.onscroll = function(){
	[].slice.call(parallax).forEach(function(el,i){
	  var windowYOffset = window.pageYOffset,
		  elBackgrounPos = "0 " + (windowYOffset * speed) + "px";
	  el.style.backgroundPosition = elBackgrounPos;
	});
  };
})();
$(function() {
  $('progress').each(function() {
	var max = $(this).val();
	$(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
  });
}); 
jQuery("body").on("click",".portfolio-box", function(){
	jQuery(".allport").hide();
	var ths = jQuery(this);
	var cls = "." + ths.attr("id");
	jQuery(cls).show();
	jQuery('html, body').animate({
		scrollTop: jQuery(cls).offset().top
	}, 1000);
});

