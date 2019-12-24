$(function(){
	$('body').on('mouseover', '.catalog-list__items', function () {
		$(this).find('.catalog-list__hidden-menu').addClass('active-hidden-menu');
		$(this).mouseout(function () {
			$('.catalog-list__hidden-menu').removeClass('active-hidden-menu');
		});
	});
	$('body').on('mouseover', '.catalog-list__hidden-menu', function () {
		$(this).addClass('active-hidden-menu');
	});
});