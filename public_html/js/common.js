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

    // Действия Чекбоксов
    $('.custom-checkbox').change(function(){
        $(this).children('.custom-check').toggleClass('hoba');
    });

    // Появление и закрытие бокового меню
	$('.burger-menu-btn').on('click', function(e){
		e.preventDefault;
		$('.smart-filter').removeClass('smart-filter-visible-mobile');
		$('.catalog-list').toggleClass('catalog-list-visible-mobile');
		$('body').addClass('no-scroll');
	});

	$('.catalog-list__title-mobile-close').on('click', function(e){
		e.preventDefault;
		$('.catalog-list').toggleClass('catalog-list-visible-mobile');
		$('body').removeClass('no-scroll');
	});

	// hide_show catalog filters
	$('.products-filter__trigger').on('click', function(e){
		e.preventDefault;
		$('.catalog-list').removeClass('catalog-list-visible-mobile');
		$('.smart-filter').toggleClass('smart-filter-visible-mobile');
		$('body').toggleClass('no-scroll');
	});

	$('.smart-filter__mobile-close').on('click', function(e){
		e.preventDefault;
		$('.smart-filter').removeClass('smart-filter-visible-mobile');
		$('body').removeClass('no-scroll');
	});
	
	$('.smart-filter .bx-filter__submit-button_set').on('click', function(e){
		$('.smart-filter').removeClass('smart-filter-visible-mobile');
		$('body').removeClass('no-scroll');
	});
	
	$('main').on('click', function (e){ // событие клика по веб-документу
        var sideBarVisible = false;
        if ($('.catalog-list-visible-mobile').length ) {
            var div = $(".catalog-list"),
                targetActiveClass = 'catalog-list-visible-mobile';
            sideBarVisible = true;
        } else if ($('.smart-filter-visible-mobile').length ) {
            var div = $(".smart-filter"),
                targetActiveClass = 'smart-filter-visible-mobile';
            sideBarVisible = true;
        }
		if (sideBarVisible 
            && !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass(targetActiveClass); // скрываем его
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
    $('.gdb-map__type-switch-trigger').click(function(e){
        if(!$(this).hasClass('active')) {
            var parentItem = $(this).parent();
            var ind = parentItem.index();
            var mapBlockContent = $('.gdb-map__content-item');
            parentItem.siblings().find('.gdb-map__type-switch-trigger').removeClass('active');
            mapBlockContent.removeClass('active');
            $(this).addClass('active');
            mapBlockContent.eq(ind).addClass('active');
        }
        e.preventDefault();
    });
    $('.uoi-paysystem__choice').each(function(){
        var openSelect = function(selector){
            var element = selector[0], worked = false;
            if (document.createEvent) { // all browsers
                var e = document.createEvent("MouseEvents");
                e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                worked = element.dispatchEvent(e);
            } else if (element.fireEvent) { // ie
                worked = element.fireEvent("onmousedown");
            }
            console.log(element, worked)
        }
        var choiceParent = $(this),
            choiceTrigger = choiceParent.find('.uoi-paysystem__trigger'),
            choiceSelect = choiceParent.find('.uoi-paysystem__select');
        choiceTrigger.click(function(){
            choiceParent.addClass('active');
            openSelect(choiceSelect);
        });
        choiceSelect.change(function(){
            choiceTrigger.html($(this).find('option:selected').text());
            choiceParent.removeClass('active');
        });
    });
    $('.pid__order .btn-to-one-click').click(function(e){
        $('.pid__phone-form-wrap').slideToggle();
        e.preventDefault()
    });

    /* tel mask(extra digit 9 at the end) */
	$(".b-product-phoneblock__input[name='tel']").mask("+7(999)999-9999?9");	
	/* tel mask ..end; */
	
	$('.catalog-list__mibile-open-list').click(function(e){
		$(this).parent().toggleClass('mobile-list-visible');
		e.preventDefault();
	});

	$('.compare__option').click(function(e){
		$(this).addClass('active').siblings().removeClass('active');
		if($(this).hasClass('show-dif')) {
		    $(this).parents('.compare').addClass('dif-only');
        } else {
            $(this).parents('.compare').removeClass('dif-only');
        }
		e.preventDefault();
	});

});