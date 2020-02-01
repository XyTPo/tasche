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
    if($('.pid__slider').length){
        var pidOwl = $('.pid__slider');
        pidOwl.owlCarousel({
            loop:false,
            nav:false,
            margin:0,
            navText: ['',''],
            mouseDrag: false,
            touchDrag: true,
            items:1,
        })
        $('.pid__thumbnails-item').click(function(e){
            var index = $(this).index();
            $('.pid__slider').trigger('to.owl.carousel', [index, 200, true]);
            e.preventDefault();
        });
    }
});