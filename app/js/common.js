// Плавающая шапка и боковое меню
window.onscroll = function showHeader() {
    var header = document.querySelector('.fixed-head');
    var list = document.querySelector('.location');

    if(window.pageYOffset > 75){
        header.classList.add('header-fixed');
        list.classList.add('list-padding');
    } else{
        header.classList.remove('header-fixed');
        list.classList.remove('list-padding');
    }
};


$(function(){
	// Скрытие первой сортировки по клику на любую область
	$(document).mouseup(function (e){
		var re = $(".sorting-sale");
		var ry = $(".hidden-sale");
		if (!re.is(e.target)
		    && re.has(e.target).length === 0) {
			ry.slideUp();
			re.removeClass("open-sorting");
		}
	});
	
	// Скрытие второй сортировки по клику на любую область
	$(document).mouseup(function (e){
		var ri = $(".sorting-sum");
		var ro = $(".hidden-sum");
		if (!ri.is(e.target)
		    && ri.has(e.target).length === 0) {
			ro.slideUp();
			ri.removeClass("open-sorting");
		}
	});

	//Аккордион фильтров
	$('.filter__name').click(function(e){
		e.preventDefault;
		$(this).toggleClass('angle-down');
		$(this).next().slideToggle();
	});

	//Аккордеон бокового меню
	$('.main-category').on('click', f_acc);
	function f_acc(){
		$(this).toggleClass('active');
		$('.level-1').not($(this).next()).slideUp();
		$(this).next().slideToggle();
	};

	// Всплывающие меню
	$('.catalog-list__items').mouseover(function(){
		$(this).find('.catalog-list__hidden-menu').addClass('active-hidden-menu');
		$(this).mouseout(function(){
			$('.catalog-list__hidden-menu').removeClass('active-hidden-menu');
		});
	});

	$('.catalog-list__hidden-menu').mouseover(function(){
		$(this).addClass('active-hidden-menu');
	})

	// Появление корзины
	$('.shop-cart').mouseover(function(){
		$('.opened-sc').addClass('db');
	});

	$('.shop-cart').mouseout(function(){
		$('.opened-sc').removeClass('db');
	});

	$('.opened-sc').mouseover(function(){
		$('.opened-sc').addClass('db');
	});

	$('.opened-sc').mouseout(function(){
		$('.opened-sc').removeClass('db');
	});

	$('.sorting-sale').click(function(e){
		e.preventDefault;
		$(this).toggleClass('open-sorting');
		$('.hidden-sale').slideToggle();
	});

	$('.sorting-sum').click(function(e){
		e.preventDefault;
		$(this).toggleClass('open-sorting');
		$('.hidden-sum').slideToggle();
	});

	$('.region__city').click(function(e){
		e.preventDefault;
		var citiesPopup = $('.city-window');
		if (citiesPopup.hasClass('city-open')) {
			citiesPopup.removeClass('city-open');
		} else {
			if(!$(this).parent().hasClass('region')){
				citiesPopup.css('top', $(window).scrollTop() + 120);
			} else {
				citiesPopup.removeAttr("style");
			}
			citiesPopup.addClass('city-open');
		}
		$('.overley').toggleClass('overley-open');

	});

	$('.city-window__closed').click(function(e){
		$('.city-window').toggleClass('city-open');
		$('.overley').toggleClass('overley-open');
        e.preventDefault();
	});

	// Действия Чекбоксов
	$('.custom-checkbox').change(function(){
		$(this).children('.custom-check').toggleClass('hoba');
	});

	// Появление и закрытие бокового меню
	$('.burger-menu-btn').on('click', function(e){
		e.preventDefault;
		$('.main-sidebar').toggleClass('active-sidebar');
		$('body').addClass('no-scroll');
	});

	$('.fa-times').on('click', function(e){
		e.preventDefault;
		$('.main-sidebar').toggleClass('active-sidebar');
		$('body').removeClass('no-scroll');
	});

	$('main').on('click', function (e){ // событие клика по веб-документу
		var div = $(".main-sidebar"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass('active-sidebar'); // скрываем его
			$('body').removeClass('no-scroll');
		}
	});

	// Слайдер цены
	$(".polzunok-5").slider({
		min: 0,
		max: 15000,
		values: [1000, 8000],
		range: true,
		animate: "fast",
		slide : function(event, ui) {    
			$(".polzunok-input-5-left").val(ui.values[ 0 ]);   
			$(".polzunok-input-5-right").val(ui.values[ 1 ]);  
		}    
	});
	$(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
	$(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
	$(document).focusout(function() {
		if ($('.polzunok-5').length) {
            var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),
                opt_left = $(".polzunok-5").slider("option", "min"),
                where_right = $(".polzunok-5").slider("values", 1),
                input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),
                opt_right = $(".polzunok-5").slider("option", "max"),
                where_left = $(".polzunok-5").slider("values", 0);
            if (input_left > where_right) {
                input_left = where_right;
            }
            if (input_left < opt_left) {
                input_left = opt_left;
            }
            if (input_left == "") {
                input_left = 0;
            }
            if (input_right < where_left) {
                input_right = where_left;
            }
            if (input_right > opt_right) {
                input_right = opt_right;
            }
            if (input_right == "") {
                input_right = 0;
            }
            $(".polzunok-input-5-left").val(input_left);
            $(".polzunok-input-5-right").val(input_right);
            $(".polzunok-5").slider( "values", [ input_left, input_right ] );
        }
    });

    // Список телефонов на моб. устройствах
    $('.mobile-phones-icon').click(function(e){
        e.preventDefault;
        $('.mobile-phones-hidden').toggleClass('mobile-phones-hidden-active');
    });

    $(document).mouseup(function (e) {
        var container = $(".mobile-phones-hidden");
        if (container.has(e.target).length === 0){
            container.removeClass('mobile-phones-hidden-active');
        }
    });

    // Активность иконки к сравнению
    $('.products-icons__list').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('products-icons__list-active');
    });

    // Активность иконки в избранное
    $('.products-icons__heart').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('products-icons__heart-active');
    });

    // Смена фотографии и появление обводки у цвета
    $('.colors-pic').on('click', function () {
        $(this).closest('.products-wrap').find('.product-img').removeClass("ch-img").eq($(this).index()).addClass("ch-img");
        $(this).closest('.products-wrap').find('.colors-pic').removeClass("colors-pic-active").eq($(this).index()).addClass("colors-pic-active");
    });


    $('.pid__thumbnails-more').click(function(e){
        $(this).parent().siblings('.pid__thumbnails').addClass('show-all');
        e.preventDefault();
    });
    $('.pcs__title-label').click(function(e){
        var titleCol = $(this).parents('.pcs__title-col');
        var titleColIndex = titleCol.index();
        var contentCol = $(this).parents('.pcs__wrap').find('.pcs__col');
        titleCol.addClass('active').siblings().removeClass('active');
        contentCol.eq(titleColIndex).addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
    $('.ranking-stars').each(function(){
        if($(this).hasClass('js-interactive')) {
            var rStarsParent = $(this), rStars =  rStarsParent.find('.ranking-stars__icon'), rStarsCurrent, rStarsTarget;
            rStars.hover(function() {
                rStarsCurrent = rStarsParent.attr("data-rating") || 0;
                rStarsTarget = $(this).index()+1;
                rStarsParent.attr("data-rating", "" + rStarsTarget).removeClass("clicked");
            }, function() {
                rStarsParent.hasClass("clicked") || rStarsParent.attr("data-rating", rStarsCurrent);
            });
            rStars.click(function() {
                rStarsParent.attr("data-rating", "" + rStarsTarget).addClass("clicked");
            });
        }
    });
    if($('.psg__slider').length){
        $('.psg__slider').owlCarousel({
            loop:true,
            nav:true,
            margin:0,
            responsiveClass:true,
            navText: ['',''],
            responsive:{
                0:{
                    items:2
                },
                1346:{
                    items:3
                },
                1451:{
                    items:4
                }
            }
        })
    }
    if($('.prv__slider').length){
        $('.prv__slider').owlCarousel({
            loop:true,
            nav:true,
            margin:0,
            responsiveClass:true,
            navText: ['',''],
            responsive:{
                0:{
                    items:3,
                    nav:false
                },
                768:{
                    items:3
                },
                993:{
                    items:4
                },
                1346:{
                    items:6
                },
                1451:{
                    items:7
                },
                1700:{
                    items:8
                }
            }
        })
    }

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
	$('.itmc__inc, .itmc__dec').click(function(){
		var amountBlock = $(this).siblings('.itmc__amount');
		var amount = parseInt(amountBlock.text());
		var maxAmount = $(this).parent().data('max-value');
		if($(this).hasClass('itmc__inc')){
			if (amount < maxAmount) amount++;
		} else {
			if (amount > 1) amount--;
		}
		amountBlock.text(amount);
		if($(this).parents('.gcb-table').length) {
			$(this).parents('.gcb-table').trigger('cart:recount')
		}
	});
	function addGapToNumber(num){		
		if (num % 1 != 0) {
			num = num.toFixed(2);
		}
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
	}
	$('.gcb-table').on('cart:recount', function () {
		var cartTotalPrice = 0;
		var cartRow = $(this).find('.gcb-item');
		cartRow.each(function(){
			var amount = parseInt($(this).find('.itmc__amount').text());
			var singlePrice = parseFloat($(this).find('.gcb-item__price-regular .digits').text().replace(/\s+/g,''));
			var rowTotalPrice = singlePrice * amount;
			$(this).find('.gcb-item__price-total .digits').text(addGapToNumber(rowTotalPrice));
			cartTotalPrice += rowTotalPrice;
		});
		$(this).find('.gcb-total__price-value .digits').text(addGapToNumber(cartTotalPrice));
	});
    $('.gobi__radio-item').click(function(e){
    	if(!$(this).hasClass('active')) {
    		$(this).addClass('active').siblings().removeClass('active');
		}
        e.preventDefault();
    });
    $('.gob-terms__icon').click(function(e){
    	$(this).parent().toggleClass('active');
        e.preventDefault();
    });
});