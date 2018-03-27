 $(function () {
	$('.left-nav-fixed .nav').mCustomScrollbar();

	//NAV SLIDE
	$('body').on('click', '.left-body-content .burger', function () {
		if ($(this).attr('check') === 'false') {
			
			$(this).attr('check', 'true'); 

			 $('.left-nav-fixed').fadeIn(200, function () {
				$('.left-nav-fixed').addClass('active');
			}); 
		} else {
			$(this).attr('check', 'false'); 

			 $('.left-nav-fixed').fadeOut(200, function () {
				$('.left-nav-fixed').removeClass('active');
			});			
		}
	});

	//NAV SLIDE
	$('body').on('click', '.left-nav-fixed', function (event) {
		var elem = event.target;

		if ($(elem).attr('self') === 'left-nav-fixed') {
			$('.left-body-content .burger').trigger('click');
		}
	});
}); 