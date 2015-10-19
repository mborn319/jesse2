$(document).on("ready", function() {
    if ($(".masthead").is(".fixed")) {
    	shrinkHeaderOnScroll("180");
    }
});


var shrinkHeaderOnScroll = function(triggerAmount) {
	var headerDiv = $(".masthead");

	//instead of window.onscroll, just check the position of window.pageYOffset every 200ms.
	//See: http://ejohn.org/blog/learning-from-twitter/#postcomment
	var checkScroll = function() {
			if (window.scrollY > triggerAmount) {
				headerDiv.addClass("scrolled");
			} else {
				headerDiv.removeClass("scrolled");
			}
	};
	setInterval(checkScroll, 150);
};
