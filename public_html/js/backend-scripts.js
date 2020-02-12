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
    if($('.hmp__brand__slider').length){
        $('.hmp__brand__slider').owlCarousel({
            loop:true,
            nav:true,
            margin:0,
            responsiveClass:true,
            navText: ['',''],
            responsive:{
                0:{
                    items:1
                },
                500:{
                    items:2
                },
                680:{
                    items:3

                },
                992:{
                    items:5

                },
                1346:{
                    items:6

                },
                1451:{
                    items:7

                },
                1600:{
                    items:8

                }

            }
        })
    }
});