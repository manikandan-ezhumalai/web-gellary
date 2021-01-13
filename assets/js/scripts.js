

jQuery(document).ready(function() {
	/*
	    Wow
	*/
	new WOW().init();
	
	/*
	    Stop video playing when the MODAL is being closed (has finished closing)
	*/
	$('#myModal').on('hidden.bs.modal', function(e) {
		$('#myModal iframe').each(function() {
			var videoURL = $(this).attr('src');
			$(this).attr('src', videoURL);
		});
	});
	
	/*
        Stop video playing when the CAROUSEL slides to another element
	*/
	$('#myCarousel').on('slid.bs.carousel', function(e) {
		var currentSlide = $('#myCarousel .carousel-item').eq(e.from);
		var currentSlideEmbed = currentSlide.children('.embed-responsive');
		if(currentSlideEmbed.length > 0) {
			var videoIFrame = currentSlideEmbed.children('iframe');
			var videoURL = videoIFrame.attr('src');
			videoIFrame.attr('src', videoURL);
		}
	});
	
	
});
