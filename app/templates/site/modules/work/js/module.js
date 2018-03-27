$(function () {
	$('.more').on('click', function (event) {
			console.log('af');
		$('.more-content').slideToggle();
		event.preventDefault();
	});
});