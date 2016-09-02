$(function () {
	$('.jcarousel').jcarousel({
        // Core configuration goes here
    });
	
	$('.jcarousel')
		.on('jcarousel:create jcarousel:reload', function () {
			var element = $(this),
				width = element.innerWidth();

			// This shows 1 item at a time.
			// Divide `width` to the number of items you want to display,
			// eg. `width = width / 3` to display 3 items at a time.
			element.jcarousel('items').css('width', width + 'px');
		})
		.jcarousel({
			// Your configurations options
		});
	
	$('.jcarousel-pagination').jcarouselPagination({
		item: function (page) {
			return '<a href="#' + page + '">' + page + '</a>';
		}
	});
	
});