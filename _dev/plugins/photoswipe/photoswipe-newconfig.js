$(function () { 

    function openPhotoSwipe(items,index,toCartBtnId,buyPrice,buyPriceOld) {

        var pswpDom = '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">'+
            '<div class="pswp__bg"></div>'+
            '<div class="pswp__scroll-wrap">'+
            '<div class="pswp__container">'+
            '<div class="pswp__item"></div>'+
            '<div class="pswp__item"></div>'+
            '<div class="pswp__item"></div>'+
            '</div>'+
            '<div class="pswp__ui pswp__ui--hidden">'+
            '<div class="pswp__top-bar">'+
            '<div class="pswp__counter"></div>'+
            '<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>'+
            '<button class="pswp__button pswp__button--share" title="Share"></button>'+
            '<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>'+
            '<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>'+
            '<div class="pswp__preloader">'+
            '<div class="pswp__preloader__icn">'+
            '<div class="pswp__preloader__cut">'+
            '<div class="pswp__preloader__donut"></div>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">'+
            '<div class="pswp__share-tooltip"></div>'+
            '</div>'+
            '<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">'+
            '</button>'+
            '<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">'+
            '</button>'+
            '<div class="pswp__caption">'+
            '<div class="pswp__caption__center"></div>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>';
        $('body').append(pswpDom);
        var pswpElement = document.querySelectorAll('.pswp')[0];

        // define options (if needed)
        var options = {
            // optionName: 'option value'
            // for example:
            index: index,
            fullscreenEl: false,
            zoomEl: false,
            history: false,
            shareEl: false,
            closeOnScroll: false,
            closeOnVerticalDrag: false,
			modal: false,
			isClickableElement: function(el) {
				if(el.tagName === 'BUTTON'){
					return true;
				}
				if(el.tagName === 'LI'){
					return true;
				}
                if(el.tagName === 'DIV'){
                    return true;
                }
			},
			preload: [1,3],
            getDoubleTapZoom: function(isMouseClick, item) {
                if(isMouseClick) {
                    return 0.6;
                } else {
                    return item.initialZoomLevel < 0.7 ? 0.6 : 0.6;
                }
            },
            /*
			getThumbBoundsFn: function (index) {
                var source = document.querySelectorAll('ul.photo-tovar-slide li')[index],
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = source.getBoundingClientRect();
                return {x:rect.left, y:rect.top+pageYScroll, w:rect.width};

            },
			*/
            addCaptionHTMLFn: function(item, captionEl, isFake) {
                $(captionEl).children().html('');
                if(!item.title) {
                    captionEl.children[0].innerText = '';
                    return false;
                }
                //Формируем превью
				var buy_block = $('<div class="pswp_basket" />'),
					buy_price = buyPrice || '',
					buy_price_old = buyPriceOld || '',
					buy_price_block = $('<div class="pswp_price_wrapper"><div class="pswp_price_old">'+buy_price_old+'</div><div class="pswp_price">'+buy_price+'</div></div>'),
					buy_id_btn = toCartBtnId,
					buy_btn = $('<button class="btn-basket purchase-basket"/>');
					buy_btn.append('Положить в корзину');
					buy_btn.click(
					 function(buy_id_btn) {
						return function() {
								gallery.destroy();
								$('#'+buy_id_btn).trigger( 'click' );
							}
						}.call(this, buy_id_btn)
					);
					buy_block.append(buy_price_block);
					buy_block.append(buy_btn);
                var thumbs = $('<div class="pswp_thumbs"/>');
                var ul = $('<ul />');
                var n = 0;
                var prev = false;
                var next = false;
                $.each(items, function (i, row) {
                    var a =$('<li data-index="'+i+'" />');
                    if(i+2 >= item.index && n < 5) {
                        if(n == 0){
                            var p = item.index-1;
                            var aP =$('<li data-index="'+p+'" />');
                            prev = true;
                            aP.addClass('PrevItems');
                            if (item.index <=2){
                                aP.addClass('no');
                            } else {
                                aP.click(
                                    function (p) {
                                        return function () {
                                            gallery.goTo(p);

                                            return false;
                                        }
                                    }.call(this, p)
                                );
                            }
                            aP.append($('<div></div>'));
                            ul.append(aP);
                        }
                            n++;
                            if (i == item.index) {
                                a.addClass('active');
                            }
                            a.append(
                                $('<img/>').attr('src',row.thumb)
                            );
                            a.click(
                                function (i) {
                                    return function () {
                                        gallery.goTo(i);

                                        return false;
                                    }
                                }.call(this, i)
                            );
                            ul.append(a);
                    } else if (n == 5){
                        n++;
                        next = true;
                        var j = item.index+1;
                        a.addClass('NexItems');
                            a.click(
                                function (j) {
                                    return function () {
                                        gallery.goTo(j);

                                        return false;
                                    }
                                }.call(this, j)
                            );
                            a.append($('<div></div>'));
                            ul.append(a);
                    }
                });
                if (!next){
                    next = true;
                    var a =$('<li data-index="'+-1+'" />');
                    a.addClass('NexItems no');
                    ul.append(a);
                }
                thumbs.append(ul);

				if(typeof buy_price !== "undefined"){
                    $(captionEl).children().append(buy_block);
                }
                $(captionEl).children().append(thumbs);
                return true;
            }
        };

        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

        gallery.init();
		$('body').addClass('body-pswp');
        gallery.listen('destroy', function() {
            $('body').find('.pswp').remove();
			$('body').removeClass('body-pswp');
        });
    }

    $('body').on('click','.pid__slider-item', function (e) {
        var $slider = $(this).parents('.pid__main-image-block'),
            items = new Array(),
            startIndex = $(this).find('img').data('slide-index'),
			toCartBtnId = $('.pid__order .btn-to-curt').attr('id'),
			buyPrice = $('.pid__price_new').html(),
			buyPriceOld = $('.pid__price_old').html();

        $slider.find('img').each(function (index) {
            var image = $(this).data('zoomimage'),
                title = $(this).attr('title'),
                index = $(this).data('slide-index'),
                thumb = $(this).attr('src');

            items.push({src:image, w:2000,h:2000, title:title, thumb:thumb, index:index});
        });
        openPhotoSwipe(items,startIndex,toCartBtnId,buyPrice,buyPriceOld);
		e.preventDefault();
    });

    $('body').on('click','.products-info .slider-link a, .compare__cell .slider-link a', function (e) {
		var $catalogItem = $(this).parents('.products-wrap'),
            items = JSON.parse($catalogItem.find('.products-catalog-gallery-json').val());
			toCartBtnId = $catalogItem.find('.btn-to-curt').attr('id'),
			buyPrice = $catalogItem.find('.current-price').html(),
			buyPriceOld = $catalogItem.find('.old-price').html();
        openPhotoSwipe(items,0,toCartBtnId,buyPrice,buyPriceOld);
		e.preventDefault();
    });
});