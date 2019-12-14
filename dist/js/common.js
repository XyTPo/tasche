window.onscroll=function(){var e=document.querySelector(".fixed-head"),t=document.querySelector(".location");window.pageYOffset>75?(e.classList.add("header-fixed"),t.classList.add("list-padding")):(e.classList.remove("header-fixed"),t.classList.remove("list-padding"))},$(function(){function e(){$(this).toggleClass("active"),$(".level-1").not($(this).next()).slideUp(),$(this).next().slideToggle()}function t(e){return e%1!=0&&(e=e.toFixed(2)),e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1 ")}if($(document).mouseup(function(e){var t=$(".sorting-sale"),i=$(".hidden-sale");t.is(e.target)||0!==t.has(e.target).length||(i.slideUp(),t.removeClass("open-sorting"))}),$(document).mouseup(function(e){var t=$(".sorting-sum"),i=$(".hidden-sum");t.is(e.target)||0!==t.has(e.target).length||(i.slideUp(),t.removeClass("open-sorting"))}),$(".filter__name").click(function(e){e.preventDefault,$(this).toggleClass("angle-down"),$(this).next().slideToggle()}),$(".main-category").on("click",e),$(".catalog-list__items").mouseover(function(){$(this).find(".catalog-list__hidden-menu").addClass("active-hidden-menu"),$(this).mouseout(function(){$(".catalog-list__hidden-menu").removeClass("active-hidden-menu")})}),$(".catalog-list__hidden-menu").mouseover(function(){$(this).addClass("active-hidden-menu")}),$(".shop-cart").mouseover(function(){$(".opened-sc").addClass("db")}),$(".shop-cart").mouseout(function(){$(".opened-sc").removeClass("db")}),$(".opened-sc").mouseover(function(){$(".opened-sc").addClass("db")}),$(".opened-sc").mouseout(function(){$(".opened-sc").removeClass("db")}),$(".sorting-sale").click(function(e){e.preventDefault,$(this).toggleClass("open-sorting"),$(".hidden-sale").slideToggle()}),$(".sorting-sum").click(function(e){e.preventDefault,$(this).toggleClass("open-sorting"),$(".hidden-sum").slideToggle()}),$(".region__city").click(function(e){e.preventDefault;var t=$(".city-window");t.hasClass("city-open")?t.removeClass("city-open"):($(this).parent().hasClass("region")?t.removeAttr("style"):t.css("top",$(window).scrollTop()+120),t.addClass("city-open")),$(".overley").toggleClass("overley-open")}),$(".city-window__closed").click(function(e){$(".city-window").toggleClass("city-open"),$(".overley").toggleClass("overley-open"),e.preventDefault()}),$(".custom-checkbox").change(function(){$(this).children(".custom-check").toggleClass("hoba")}),$(".burger-menu-btn").on("click",function(e){e.preventDefault,$(".catalog-list").toggleClass("catalog-list-visible-mobile"),$("body").addClass("no-scroll")}),$(".catalog-list__title-mobile-close").on("click",function(e){e.preventDefault,$(".catalog-list").toggleClass("catalog-list-visible-mobile"),$("body").removeClass("no-scroll")}),$("main").on("click",function(e){var t=$(".catalog-list");t.is(e.target)||0!==t.has(e.target).length||(t.removeClass("catalog-list-visible-mobile"),$("body").removeClass("no-scroll"))}),$(".polzunok-5").slider({min:0,max:15e3,values:[1e3,8e3],range:!0,animate:"fast",slide:function(e,t){$(".polzunok-input-5-left").val(t.values[0]),$(".polzunok-input-5-right").val(t.values[1])}}),$(".polzunok-input-5-left").val($(".polzunok-5").slider("values",0)),$(".polzunok-input-5-right").val($(".polzunok-5").slider("values",1)),$(document).focusout(function(){if($(".polzunok-5").length){var e=$(".polzunok-input-5-left").val().replace(/[^0-9]/g,""),t=$(".polzunok-5").slider("option","min"),i=$(".polzunok-5").slider("values",1),s=$(".polzunok-input-5-right").val().replace(/[^0-9]/g,""),n=$(".polzunok-5").slider("option","max"),o=$(".polzunok-5").slider("values",0);e>i&&(e=i),e<t&&(e=t),""==e&&(e=0),s<o&&(s=o),s>n&&(s=n),""==s&&(s=0),$(".polzunok-input-5-left").val(e),$(".polzunok-input-5-right").val(s),$(".polzunok-5").slider("values",[e,s])}}),$(".mobile-phones-icon").click(function(e){e.preventDefault,$(".mobile-phones-hidden").toggleClass("mobile-phones-hidden-active")}),$(document).mouseup(function(e){var t=$(".mobile-phones-hidden");0===t.has(e.target).length&&t.removeClass("mobile-phones-hidden-active")}),$(".products-icons__list").on("click",function(e){e.preventDefault(),$(this).toggleClass("products-icons__list-active")}),$(".products-icons__heart").on("click",function(e){e.preventDefault(),$(this).toggleClass("products-icons__heart-active")}),$(".colors-pic").on("click",function(){$(this).closest(".products-wrap").find(".product-img").removeClass("ch-img").eq($(this).index()).addClass("ch-img"),$(this).closest(".products-wrap").find(".colors-pic").removeClass("colors-pic-active").eq($(this).index()).addClass("colors-pic-active")}),$(".pid__thumbnails-more").click(function(e){$(this).parent().siblings(".pid__thumbnails").addClass("show-all"),e.preventDefault()}),$(".pcs__title-label").click(function(e){var t=$(this).parents(".pcs__title-col"),i=t.index(),s=$(this).parents(".pcs__wrap").find(".pcs__col");t.addClass("active").siblings().removeClass("active"),s.eq(i).addClass("active").siblings().removeClass("active"),e.preventDefault()}),$(".ranking-stars").each(function(){if($(this).hasClass("js-interactive")){var e,t,i=$(this),s=i.find(".ranking-stars__icon");s.hover(function(){e=i.attr("data-rating")||0,t=$(this).index()+1,i.attr("data-rating",""+t).removeClass("clicked")},function(){i.hasClass("clicked")||i.attr("data-rating",e)}),s.click(function(){i.attr("data-rating",""+t).addClass("clicked")})}}),$(".psg__slider").length&&$(".psg__slider").owlCarousel({loop:!0,nav:!0,margin:0,responsiveClass:!0,navText:["",""],responsive:{0:{items:2},1346:{items:3},1451:{items:4}}}),$(".prv__slider").length&&$(".prv__slider").owlCarousel({loop:!0,nav:!0,margin:0,responsiveClass:!0,navText:["",""],responsive:{0:{items:3,nav:!1},768:{items:3},993:{items:4},1346:{items:6},1451:{items:7},1700:{items:8}}}),$(".pid__slider").length){var i=$(".pid__slider");i.owlCarousel({loop:!1,nav:!1,margin:0,navText:["",""],mouseDrag:!1,touchDrag:!0,items:1}),$(".pid__thumbnails-item").click(function(e){var t=$(this).index();$(".pid__slider").trigger("to.owl.carousel",[t,200,!0]),e.preventDefault()})}$(".itmc__inc, .itmc__dec").click(function(){var e=$(this).siblings(".itmc__amount"),t=parseInt(e.text()),i=$(this).parent().data("max-value");$(this).hasClass("itmc__inc")?t<i&&t++:t>1&&t--,e.text(t),$(this).parents(".gcb-table").length&&$(this).parents(".gcb-table").trigger("cart:recount")}),$(".gcb-table").on("cart:recount",function(){var e=0,i=$(this).find(".gcb-item");i.each(function(){var i=parseInt($(this).find(".itmc__amount").text()),s=parseFloat($(this).find(".gcb-item__price-regular .digits").text().replace(/\s+/g,"")),n=s*i;$(this).find(".gcb-item__price-total .digits").text(t(n)),e+=n}),$(this).find(".gcb-total__price-value .digits").text(t(e))}),$(".gobi__radio-item").click(function(e){$(this).hasClass("active")||$(this).addClass("active").siblings().removeClass("active"),e.preventDefault()}),$(".gob-terms__icon").click(function(e){$(this).parent().toggleClass("active"),e.preventDefault()}),$(".gdb-map__type-switch-trigger").click(function(e){if(!$(this).hasClass("active")){var t=$(this).parent(),i=t.index(),s=$(".gdb-map__content-item");t.siblings().find(".gdb-map__type-switch-trigger").removeClass("active"),s.removeClass("active"),$(this).addClass("active"),s.eq(i).addClass("active")}e.preventDefault()}),$(".uoi-paysystem__choice").each(function(){var e=function(e){var t=e[0],i=!1;if(document.createEvent){var s=document.createEvent("MouseEvents");s.initMouseEvent("mousedown",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),i=t.dispatchEvent(s)}else t.fireEvent&&(i=t.fireEvent("onmousedown"));console.log(t,i)},t=$(this),i=t.find(".uoi-paysystem__trigger"),s=t.find(".uoi-paysystem__select");i.click(function(){t.addClass("active"),e(s)}),s.change(function(){i.html($(this).find("option:selected").text()),t.removeClass("active")})}),$(".pid__order .btn-to-one-click").click(function(e){$(".pid__phone-form-wrap").slideToggle(),e.preventDefault()}),$(".catalog-list__mibile-open-list").click(function(e){console.log("ok"),$(this).parent().toggleClass("mobile-list-visible"),e.preventDefault()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbnNjcm9sbCIsImhlYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxpc3QiLCJwYWdlWU9mZnNldCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIiQiLCJmX2FjYyIsInRoaXMiLCJ0b2dnbGVDbGFzcyIsIm5vdCIsIm5leHQiLCJzbGlkZVVwIiwic2xpZGVUb2dnbGUiLCJhZGRHYXBUb051bWJlciIsIm51bSIsInRvRml4ZWQiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJtb3VzZXVwIiwiZSIsInJlIiwicnkiLCJpcyIsInRhcmdldCIsImhhcyIsImxlbmd0aCIsInJlbW92ZUNsYXNzIiwicmkiLCJybyIsImNsaWNrIiwicHJldmVudERlZmF1bHQiLCJvbiIsIm1vdXNlb3ZlciIsImZpbmQiLCJhZGRDbGFzcyIsIm1vdXNlb3V0IiwiY2l0aWVzUG9wdXAiLCJoYXNDbGFzcyIsInBhcmVudCIsInJlbW92ZUF0dHIiLCJjc3MiLCJzY3JvbGxUb3AiLCJjaGFuZ2UiLCJjaGlsZHJlbiIsImRpdiIsInNsaWRlciIsIm1pbiIsIm1heCIsInZhbHVlcyIsInJhbmdlIiwiYW5pbWF0ZSIsInNsaWRlIiwiZXZlbnQiLCJ1aSIsInZhbCIsImZvY3Vzb3V0IiwiaW5wdXRfbGVmdCIsIm9wdF9sZWZ0Iiwid2hlcmVfcmlnaHQiLCJpbnB1dF9yaWdodCIsIm9wdF9yaWdodCIsIndoZXJlX2xlZnQiLCJjb250YWluZXIiLCJjbG9zZXN0IiwiZXEiLCJpbmRleCIsInNpYmxpbmdzIiwidGl0bGVDb2wiLCJwYXJlbnRzIiwidGl0bGVDb2xJbmRleCIsImNvbnRlbnRDb2wiLCJlYWNoIiwiclN0YXJzQ3VycmVudCIsInJTdGFyc1RhcmdldCIsInJTdGFyc1BhcmVudCIsInJTdGFycyIsImhvdmVyIiwiYXR0ciIsIm93bENhcm91c2VsIiwibG9vcCIsIm5hdiIsIm1hcmdpbiIsInJlc3BvbnNpdmVDbGFzcyIsIm5hdlRleHQiLCJyZXNwb25zaXZlIiwiMCIsIml0ZW1zIiwiMTM0NiIsIjE0NTEiLCI3NjgiLCI5OTMiLCIxNzAwIiwicGlkT3dsIiwibW91c2VEcmFnIiwidG91Y2hEcmFnIiwidHJpZ2dlciIsImFtb3VudEJsb2NrIiwiYW1vdW50IiwicGFyc2VJbnQiLCJ0ZXh0IiwibWF4QW1vdW50IiwiZGF0YSIsImNhcnRUb3RhbFByaWNlIiwiY2FydFJvdyIsInNpbmdsZVByaWNlIiwicGFyc2VGbG9hdCIsInJvd1RvdGFsUHJpY2UiLCJwYXJlbnRJdGVtIiwiaW5kIiwibWFwQmxvY2tDb250ZW50Iiwib3BlblNlbGVjdCIsInNlbGVjdG9yIiwiZWxlbWVudCIsIndvcmtlZCIsImNyZWF0ZUV2ZW50IiwiaW5pdE1vdXNlRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiZmlyZUV2ZW50IiwiY29uc29sZSIsImxvZyIsImNob2ljZVBhcmVudCIsImNob2ljZVRyaWdnZXIiLCJjaG9pY2VTZWxlY3QiLCJodG1sIl0sIm1hcHBpbmdzIjoiQUFDQUEsT0FBT0MsU0FBVyxXQUNkLEdBQUlDLEdBQVNDLFNBQVNDLGNBQWMsZUFDaENDLEVBQU9GLFNBQVNDLGNBQWMsWUFFL0JKLFFBQU9NLFlBQWMsSUFDcEJKLEVBQU9LLFVBQVVDLElBQUksZ0JBQ3JCSCxFQUFLRSxVQUFVQyxJQUFJLGtCQUVuQk4sRUFBT0ssVUFBVUUsT0FBTyxnQkFDeEJKLEVBQUtFLFVBQVVFLE9BQU8sa0JBSzlCQyxFQUFFLFdBZ0NELFFBQVNDLEtBQ1JELEVBQUVFLE1BQU1DLFlBQVksVUFDcEJILEVBQUUsWUFBWUksSUFBSUosRUFBRUUsTUFBTUcsUUFBUUMsVUFDbENOLEVBQUVFLE1BQU1HLE9BQU9FLGNBeVJoQixRQUFTQyxHQUFlQyxHQUl2QixNQUhJQSxHQUFNLEdBQUssSUFDZEEsRUFBTUEsRUFBSUMsUUFBUSxJQUVaRCxFQUFJRSxXQUFXQyxRQUFRLDBCQUEyQixPQW5DdkQsR0EzUkhaLEVBQUVQLFVBQVVvQixRQUFRLFNBQVVDLEdB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QUFFVyIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQn9C70LDQstCw0Y7RidCw0Y8g0YjQsNC/0LrQsCDQuCDQsdC+0LrQvtCy0L7QtSDQvNC10L3RjlxyXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiBzaG93SGVhZGVyKCkge1xyXG4gICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maXhlZC1oZWFkJyk7XHJcbiAgICB2YXIgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbicpO1xyXG5cclxuICAgIGlmKHdpbmRvdy5wYWdlWU9mZnNldCA+IDc1KXtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWZpeGVkJyk7XHJcbiAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0LXBhZGRpbmcnKTtcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLWZpeGVkJyk7XHJcbiAgICAgICAgbGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdsaXN0LXBhZGRpbmcnKTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblx0Ly8g0KHQutGA0YvRgtC40LUg0L/QtdGA0LLQvtC5INGB0L7RgNGC0LjRgNC+0LLQutC4INC/0L4g0LrQu9C40LrRgyDQvdCwINC70Y7QsdGD0Y4g0L7QsdC70LDRgdGC0YxcclxuXHQkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKXtcclxuXHRcdHZhciByZSA9ICQoXCIuc29ydGluZy1zYWxlXCIpO1xyXG5cdFx0dmFyIHJ5ID0gJChcIi5oaWRkZW4tc2FsZVwiKTtcclxuXHRcdGlmICghcmUuaXMoZS50YXJnZXQpXHJcblx0XHQgICAgJiYgcmUuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0cnkuc2xpZGVVcCgpO1xyXG5cdFx0XHRyZS5yZW1vdmVDbGFzcyhcIm9wZW4tc29ydGluZ1wiKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHQvLyDQodC60YDRi9GC0LjQtSDQstGC0L7RgNC+0Lkg0YHQvtGA0YLQuNGA0L7QstC60Lgg0L/QviDQutC70LjQutGDINC90LAg0LvRjtCx0YPRjiDQvtCx0LvQsNGB0YLRjFxyXG5cdCQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpe1xyXG5cdFx0dmFyIHJpID0gJChcIi5zb3J0aW5nLXN1bVwiKTtcclxuXHRcdHZhciBybyA9ICQoXCIuaGlkZGVuLXN1bVwiKTtcclxuXHRcdGlmICghcmkuaXMoZS50YXJnZXQpXHJcblx0XHQgICAgJiYgcmkuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0cm8uc2xpZGVVcCgpO1xyXG5cdFx0XHRyaS5yZW1vdmVDbGFzcyhcIm9wZW4tc29ydGluZ1wiKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Ly/QkNC60LrQvtGA0LTQuNC+0L0g0YTQuNC70YzRgtGA0L7QslxyXG5cdCQoJy5maWx0ZXJfX25hbWUnKS5jbGljayhmdW5jdGlvbihlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQ7XHJcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhbmdsZS1kb3duJyk7XHJcblx0XHQkKHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xyXG5cdH0pO1xyXG5cclxuXHQvL9CQ0LrQutC+0YDQtNC10L7QvSDQsdC+0LrQvtCy0L7Qs9C+INC80LXQvdGOXHJcblx0JCgnLm1haW4tY2F0ZWdvcnknKS5vbignY2xpY2snLCBmX2FjYyk7XHJcblx0ZnVuY3Rpb24gZl9hY2MoKXtcclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLmxldmVsLTEnKS5ub3QoJCh0aGlzKS5uZXh0KCkpLnNsaWRlVXAoKTtcclxuXHRcdCQodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XHJcblx0fTtcclxuXHJcblx0Ly8g0JLRgdC/0LvRi9Cy0LDRjtGJ0LjQtSDQvNC10L3RjlxyXG5cdCQoJy5jYXRhbG9nLWxpc3RfX2l0ZW1zJykubW91c2VvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLmZpbmQoJy5jYXRhbG9nLWxpc3RfX2hpZGRlbi1tZW51JykuYWRkQ2xhc3MoJ2FjdGl2ZS1oaWRkZW4tbWVudScpO1xyXG5cdFx0JCh0aGlzKS5tb3VzZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHQkKCcuY2F0YWxvZy1saXN0X19oaWRkZW4tbWVudScpLnJlbW92ZUNsYXNzKCdhY3RpdmUtaGlkZGVuLW1lbnUnKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcuY2F0YWxvZy1saXN0X19oaWRkZW4tbWVudScpLm1vdXNlb3ZlcihmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWhpZGRlbi1tZW51Jyk7XHJcblx0fSlcclxuXHJcblx0Ly8g0J/QvtGP0LLQu9C10L3QuNC1INC60L7RgNC30LjQvdGLXHJcblx0JCgnLnNob3AtY2FydCcpLm1vdXNlb3ZlcihmdW5jdGlvbigpe1xyXG5cdFx0JCgnLm9wZW5lZC1zYycpLmFkZENsYXNzKCdkYicpO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcuc2hvcC1jYXJ0JykubW91c2VvdXQoZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5vcGVuZWQtc2MnKS5yZW1vdmVDbGFzcygnZGInKTtcclxuXHR9KTtcclxuXHJcblx0JCgnLm9wZW5lZC1zYycpLm1vdXNlb3ZlcihmdW5jdGlvbigpe1xyXG5cdFx0JCgnLm9wZW5lZC1zYycpLmFkZENsYXNzKCdkYicpO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcub3BlbmVkLXNjJykubW91c2VvdXQoZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5vcGVuZWQtc2MnKS5yZW1vdmVDbGFzcygnZGInKTtcclxuXHR9KTtcclxuXHJcblx0JCgnLnNvcnRpbmctc2FsZScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdDtcclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4tc29ydGluZycpO1xyXG5cdFx0JCgnLmhpZGRlbi1zYWxlJykuc2xpZGVUb2dnbGUoKTtcclxuXHR9KTtcclxuXHJcblx0JCgnLnNvcnRpbmctc3VtJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0O1xyXG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnb3Blbi1zb3J0aW5nJyk7XHJcblx0XHQkKCcuaGlkZGVuLXN1bScpLnNsaWRlVG9nZ2xlKCk7XHJcblx0fSk7XHJcblxyXG5cdCQoJy5yZWdpb25fX2NpdHknKS5jbGljayhmdW5jdGlvbihlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQ7XHJcblx0XHR2YXIgY2l0aWVzUG9wdXAgPSAkKCcuY2l0eS13aW5kb3cnKTtcclxuXHRcdGlmIChjaXRpZXNQb3B1cC5oYXNDbGFzcygnY2l0eS1vcGVuJykpIHtcclxuXHRcdFx0Y2l0aWVzUG9wdXAucmVtb3ZlQ2xhc3MoJ2NpdHktb3BlbicpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYoISQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoJ3JlZ2lvbicpKXtcclxuXHRcdFx0XHRjaXRpZXNQb3B1cC5jc3MoJ3RvcCcsICQod2luZG93KS5zY3JvbGxUb3AoKSArIDEyMCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y2l0aWVzUG9wdXAucmVtb3ZlQXR0cihcInN0eWxlXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNpdGllc1BvcHVwLmFkZENsYXNzKCdjaXR5LW9wZW4nKTtcclxuXHRcdH1cclxuXHRcdCQoJy5vdmVybGV5JykudG9nZ2xlQ2xhc3MoJ292ZXJsZXktb3BlbicpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0JCgnLmNpdHktd2luZG93X19jbG9zZWQnKS5jbGljayhmdW5jdGlvbihlKXtcclxuXHRcdCQoJy5jaXR5LXdpbmRvdycpLnRvZ2dsZUNsYXNzKCdjaXR5LW9wZW4nKTtcclxuXHRcdCQoJy5vdmVybGV5JykudG9nZ2xlQ2xhc3MoJ292ZXJsZXktb3BlbicpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHR9KTtcclxuXHJcblx0Ly8g0JTQtdC50YHRgtCy0LjRjyDQp9C10LrQsdC+0LrRgdC+0LJcclxuXHQkKCcuY3VzdG9tLWNoZWNrYm94JykuY2hhbmdlKGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKCcuY3VzdG9tLWNoZWNrJykudG9nZ2xlQ2xhc3MoJ2hvYmEnKTtcclxuXHR9KTtcclxuXHJcblx0Ly8g0J/QvtGP0LLQu9C10L3QuNC1INC4INC30LDQutGA0YvRgtC40LUg0LHQvtC60L7QstC+0LPQviDQvNC10L3RjlxyXG5cdCQoJy5idXJnZXItbWVudS1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQ7XHJcblx0XHQkKCcuY2F0YWxvZy1saXN0JykudG9nZ2xlQ2xhc3MoJ2NhdGFsb2ctbGlzdC12aXNpYmxlLW1vYmlsZScpO1xyXG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCduby1zY3JvbGwnKTtcclxuXHR9KTtcclxuXHJcblx0JCgnLmNhdGFsb2ctbGlzdF9fdGl0bGUtbW9iaWxlLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0O1xyXG5cdFx0JCgnLmNhdGFsb2ctbGlzdCcpLnRvZ2dsZUNsYXNzKCdjYXRhbG9nLWxpc3QtdmlzaWJsZS1tb2JpbGUnKTtcclxuXHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbm8tc2Nyb2xsJyk7XHJcblx0fSk7XHJcblxyXG5cdCQoJ21haW4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSl7IC8vINGB0L7QsdGL0YLQuNC1INC60LvQuNC60LAg0L/QviDQstC10LEt0LTQvtC60YPQvNC10L3RgtGDXHJcblx0XHR2YXIgZGl2ID0gJChcIi5jYXRhbG9nLWxpc3RcIik7IC8vINGC0YPRgiDRg9C60LDQt9GL0LLQsNC10LwgSUQg0Y3Qu9C10LzQtdC90YLQsFxyXG5cdFx0aWYgKCFkaXYuaXMoZS50YXJnZXQpIC8vINC10YHQu9C4INC60LvQuNC6INCx0YvQuyDQvdC1INC/0L4g0L3QsNGI0LXQvNGDINCx0LvQvtC60YNcclxuXHRcdCAgICAmJiBkaXYuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHsgLy8g0Lgg0L3QtSDQv9C+INC10LPQviDQtNC+0YfQtdGA0L3QuNC8INGN0LvQtdC80LXQvdGC0LDQvFxyXG5cdFx0XHRkaXYucmVtb3ZlQ2xhc3MoJ2NhdGFsb2ctbGlzdC12aXNpYmxlLW1vYmlsZScpOyAvLyDRgdC60YDRi9Cy0LDQtdC8INC10LPQvlxyXG5cdFx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQvLyDQodC70LDQudC00LXRgCDRhtC10L3Ri1xyXG5cdCQoXCIucG9senVub2stNVwiKS5zbGlkZXIoe1xyXG5cdFx0bWluOiAwLFxyXG5cdFx0bWF4OiAxNTAwMCxcclxuXHRcdHZhbHVlczogWzEwMDAsIDgwMDBdLFxyXG5cdFx0cmFuZ2U6IHRydWUsXHJcblx0XHRhbmltYXRlOiBcImZhc3RcIixcclxuXHRcdHNsaWRlIDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7ICAgIFxyXG5cdFx0XHQkKFwiLnBvbHp1bm9rLWlucHV0LTUtbGVmdFwiKS52YWwodWkudmFsdWVzWyAwIF0pOyAgIFxyXG5cdFx0XHQkKFwiLnBvbHp1bm9rLWlucHV0LTUtcmlnaHRcIikudmFsKHVpLnZhbHVlc1sgMSBdKTsgIFxyXG5cdFx0fSAgICBcclxuXHR9KTtcclxuXHQkKFwiLnBvbHp1bm9rLWlucHV0LTUtbGVmdFwiKS52YWwoJChcIi5wb2x6dW5vay01XCIpLnNsaWRlcihcInZhbHVlc1wiLCAwKSk7XHJcblx0JChcIi5wb2x6dW5vay1pbnB1dC01LXJpZ2h0XCIpLnZhbCgkKFwiLnBvbHp1bm9rLTVcIikuc2xpZGVyKFwidmFsdWVzXCIsIDEpKTtcclxuXHQkKGRvY3VtZW50KS5mb2N1c291dChmdW5jdGlvbigpIHtcclxuXHRcdGlmICgkKCcucG9senVub2stNScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgaW5wdXRfbGVmdCA9ICQoXCIucG9senVub2staW5wdXQtNS1sZWZ0XCIpLnZhbCgpLnJlcGxhY2UoL1teMC05XS9nLCAnJyksXHJcbiAgICAgICAgICAgICAgICBvcHRfbGVmdCA9ICQoXCIucG9senVub2stNVwiKS5zbGlkZXIoXCJvcHRpb25cIiwgXCJtaW5cIiksXHJcbiAgICAgICAgICAgICAgICB3aGVyZV9yaWdodCA9ICQoXCIucG9senVub2stNVwiKS5zbGlkZXIoXCJ2YWx1ZXNcIiwgMSksXHJcbiAgICAgICAgICAgICAgICBpbnB1dF9yaWdodCA9ICQoXCIucG9senVub2staW5wdXQtNS1yaWdodFwiKS52YWwoKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpLFxyXG4gICAgICAgICAgICAgICAgb3B0X3JpZ2h0ID0gJChcIi5wb2x6dW5vay01XCIpLnNsaWRlcihcIm9wdGlvblwiLCBcIm1heFwiKSxcclxuICAgICAgICAgICAgICAgIHdoZXJlX2xlZnQgPSAkKFwiLnBvbHp1bm9rLTVcIikuc2xpZGVyKFwidmFsdWVzXCIsIDApO1xyXG4gICAgICAgICAgICBpZiAoaW5wdXRfbGVmdCA+IHdoZXJlX3JpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dF9sZWZ0ID0gd2hlcmVfcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlucHV0X2xlZnQgPCBvcHRfbGVmdCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRfbGVmdCA9IG9wdF9sZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dF9sZWZ0ID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0X2xlZnQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dF9yaWdodCA8IHdoZXJlX2xlZnQpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0X3JpZ2h0ID0gd2hlcmVfbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXRfcmlnaHQgPiBvcHRfcmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0X3JpZ2h0ID0gb3B0X3JpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dF9yaWdodCA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dF9yaWdodCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJChcIi5wb2x6dW5vay1pbnB1dC01LWxlZnRcIikudmFsKGlucHV0X2xlZnQpO1xyXG4gICAgICAgICAgICAkKFwiLnBvbHp1bm9rLWlucHV0LTUtcmlnaHRcIikudmFsKGlucHV0X3JpZ2h0KTtcclxuICAgICAgICAgICAgJChcIi5wb2x6dW5vay01XCIpLnNsaWRlciggXCJ2YWx1ZXNcIiwgWyBpbnB1dF9sZWZ0LCBpbnB1dF9yaWdodCBdICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g0KHQv9C40YHQvtC6INGC0LXQu9C10YTQvtC90L7QsiDQvdCwINC80L7QsS4g0YPRgdGC0YDQvtC50YHRgtCy0LDRhVxyXG4gICAgJCgnLm1vYmlsZS1waG9uZXMtaWNvbicpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQ7XHJcbiAgICAgICAgJCgnLm1vYmlsZS1waG9uZXMtaGlkZGVuJykudG9nZ2xlQ2xhc3MoJ21vYmlsZS1waG9uZXMtaGlkZGVuLWFjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSAkKFwiLm1vYmlsZS1waG9uZXMtaGlkZGVuXCIpO1xyXG4gICAgICAgIGlmIChjb250YWluZXIuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2xhc3MoJ21vYmlsZS1waG9uZXMtaGlkZGVuLWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCQ0LrRgtC40LLQvdC+0YHRgtGMINC40LrQvtC90LrQuCDQuiDRgdGA0LDQstC90LXQvdC40Y5cclxuICAgICQoJy5wcm9kdWN0cy1pY29uc19fbGlzdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3Byb2R1Y3RzLWljb25zX19saXN0LWFjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g0JDQutGC0LjQstC90L7RgdGC0Ywg0LjQutC+0L3QutC4INCyINC40LfQsdGA0LDQvdC90L7QtVxyXG4gICAgJCgnLnByb2R1Y3RzLWljb25zX19oZWFydCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3Byb2R1Y3RzLWljb25zX19oZWFydC1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCh0LzQtdC90LAg0YTQvtGC0L7Qs9GA0LDRhNC40Lgg0Lgg0L/QvtGP0LLQu9C10L3QuNC1INC+0LHQstC+0LTQutC4INGDINGG0LLQtdGC0LBcclxuICAgICQoJy5jb2xvcnMtcGljJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLnByb2R1Y3RzLXdyYXAnKS5maW5kKCcucHJvZHVjdC1pbWcnKS5yZW1vdmVDbGFzcyhcImNoLWltZ1wiKS5lcSgkKHRoaXMpLmluZGV4KCkpLmFkZENsYXNzKFwiY2gtaW1nXCIpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLnByb2R1Y3RzLXdyYXAnKS5maW5kKCcuY29sb3JzLXBpYycpLnJlbW92ZUNsYXNzKFwiY29sb3JzLXBpYy1hY3RpdmVcIikuZXEoJCh0aGlzKS5pbmRleCgpKS5hZGRDbGFzcyhcImNvbG9ycy1waWMtYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoJy5waWRfX3RodW1ibmFpbHMtbW9yZScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoJy5waWRfX3RodW1ibmFpbHMnKS5hZGRDbGFzcygnc2hvdy1hbGwnKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICAgICQoJy5wY3NfX3RpdGxlLWxhYmVsJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgdmFyIHRpdGxlQ29sID0gJCh0aGlzKS5wYXJlbnRzKCcucGNzX190aXRsZS1jb2wnKTtcclxuICAgICAgICB2YXIgdGl0bGVDb2xJbmRleCA9IHRpdGxlQ29sLmluZGV4KCk7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRDb2wgPSAkKHRoaXMpLnBhcmVudHMoJy5wY3NfX3dyYXAnKS5maW5kKCcucGNzX19jb2wnKTtcclxuICAgICAgICB0aXRsZUNvbC5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgY29udGVudENvbC5lcSh0aXRsZUNvbEluZGV4KS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcucmFua2luZy1zdGFycycpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdqcy1pbnRlcmFjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgIHZhciByU3RhcnNQYXJlbnQgPSAkKHRoaXMpLCByU3RhcnMgPSAgclN0YXJzUGFyZW50LmZpbmQoJy5yYW5raW5nLXN0YXJzX19pY29uJyksIHJTdGFyc0N1cnJlbnQsIHJTdGFyc1RhcmdldDtcclxuICAgICAgICAgICAgclN0YXJzLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgclN0YXJzQ3VycmVudCA9IHJTdGFyc1BhcmVudC5hdHRyKFwiZGF0YS1yYXRpbmdcIikgfHwgMDtcclxuICAgICAgICAgICAgICAgIHJTdGFyc1RhcmdldCA9ICQodGhpcykuaW5kZXgoKSsxO1xyXG4gICAgICAgICAgICAgICAgclN0YXJzUGFyZW50LmF0dHIoXCJkYXRhLXJhdGluZ1wiLCBcIlwiICsgclN0YXJzVGFyZ2V0KS5yZW1vdmVDbGFzcyhcImNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgclN0YXJzUGFyZW50Lmhhc0NsYXNzKFwiY2xpY2tlZFwiKSB8fCByU3RhcnNQYXJlbnQuYXR0cihcImRhdGEtcmF0aW5nXCIsIHJTdGFyc0N1cnJlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgclN0YXJzLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgclN0YXJzUGFyZW50LmF0dHIoXCJkYXRhLXJhdGluZ1wiLCBcIlwiICsgclN0YXJzVGFyZ2V0KS5hZGRDbGFzcyhcImNsaWNrZWRcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYoJCgnLnBzZ19fc2xpZGVyJykubGVuZ3RoKXtcclxuICAgICAgICAkKCcucHNnX19zbGlkZXInKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGxvb3A6dHJ1ZSxcclxuICAgICAgICAgICAgbmF2OnRydWUsXHJcbiAgICAgICAgICAgIG1hcmdpbjowLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlQ2xhc3M6dHJ1ZSxcclxuICAgICAgICAgICAgbmF2VGV4dDogWycnLCcnXSxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTp7XHJcbiAgICAgICAgICAgICAgICAwOntcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczoyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgMTM0Njp7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6M1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDE0NTE6e1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOjRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZigkKCcucHJ2X19zbGlkZXInKS5sZW5ndGgpe1xyXG4gICAgICAgICQoJy5wcnZfX3NsaWRlcicpLm93bENhcm91c2VsKHtcclxuICAgICAgICAgICAgbG9vcDp0cnVlLFxyXG4gICAgICAgICAgICBuYXY6dHJ1ZSxcclxuICAgICAgICAgICAgbWFyZ2luOjAsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmVDbGFzczp0cnVlLFxyXG4gICAgICAgICAgICBuYXZUZXh0OiBbJycsJyddLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOntcclxuICAgICAgICAgICAgICAgIDA6e1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOjMsXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2OmZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgNzY4OntcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczozXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgOTkzOntcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczo0XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgMTM0Njp7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6NlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDE0NTE6e1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOjdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAxNzAwOntcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczo4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmKCQoJy5waWRfX3NsaWRlcicpLmxlbmd0aCl7XHJcbiAgICAgICAgdmFyIHBpZE93bCA9ICQoJy5waWRfX3NsaWRlcicpO1xyXG4gICAgICAgIHBpZE93bC5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGxvb3A6ZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdjpmYWxzZSxcclxuICAgICAgICAgICAgbWFyZ2luOjAsXHJcbiAgICAgICAgICAgIG5hdlRleHQ6IFsnJywnJ10sXHJcbiAgICAgICAgICAgIG1vdXNlRHJhZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdWNoRHJhZzogdHJ1ZSxcclxuICAgICAgICAgICAgaXRlbXM6MSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJy5waWRfX3RodW1ibmFpbHMtaXRlbScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XHJcbiAgICAgICAgICAgICQoJy5waWRfX3NsaWRlcicpLnRyaWdnZXIoJ3RvLm93bC5jYXJvdXNlbCcsIFtpbmRleCwgMjAwLCB0cnVlXSk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHQkKCcuaXRtY19faW5jLCAuaXRtY19fZGVjJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdHZhciBhbW91bnRCbG9jayA9ICQodGhpcykuc2libGluZ3MoJy5pdG1jX19hbW91bnQnKTtcclxuXHRcdHZhciBhbW91bnQgPSBwYXJzZUludChhbW91bnRCbG9jay50ZXh0KCkpO1xyXG5cdFx0dmFyIG1heEFtb3VudCA9ICQodGhpcykucGFyZW50KCkuZGF0YSgnbWF4LXZhbHVlJyk7XHJcblx0XHRpZigkKHRoaXMpLmhhc0NsYXNzKCdpdG1jX19pbmMnKSl7XHJcblx0XHRcdGlmIChhbW91bnQgPCBtYXhBbW91bnQpIGFtb3VudCsrO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKGFtb3VudCA+IDEpIGFtb3VudC0tO1xyXG5cdFx0fVxyXG5cdFx0YW1vdW50QmxvY2sudGV4dChhbW91bnQpO1xyXG5cdFx0aWYoJCh0aGlzKS5wYXJlbnRzKCcuZ2NiLXRhYmxlJykubGVuZ3RoKSB7XHJcblx0XHRcdCQodGhpcykucGFyZW50cygnLmdjYi10YWJsZScpLnRyaWdnZXIoJ2NhcnQ6cmVjb3VudCcpXHJcblx0XHR9XHJcblx0fSk7XHJcblx0ZnVuY3Rpb24gYWRkR2FwVG9OdW1iZXIobnVtKXtcdFx0XHJcblx0XHRpZiAobnVtICUgMSAhPSAwKSB7XHJcblx0XHRcdG51bSA9IG51bS50b0ZpeGVkKDIpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bS50b1N0cmluZygpLnJlcGxhY2UoLyhcXGQpKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJyQxICcpXHJcblx0fVxyXG5cdCQoJy5nY2ItdGFibGUnKS5vbignY2FydDpyZWNvdW50JywgZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIGNhcnRUb3RhbFByaWNlID0gMDtcclxuXHRcdHZhciBjYXJ0Um93ID0gJCh0aGlzKS5maW5kKCcuZ2NiLWl0ZW0nKTtcclxuXHRcdGNhcnRSb3cuZWFjaChmdW5jdGlvbigpe1xyXG5cdFx0XHR2YXIgYW1vdW50ID0gcGFyc2VJbnQoJCh0aGlzKS5maW5kKCcuaXRtY19fYW1vdW50JykudGV4dCgpKTtcclxuXHRcdFx0dmFyIHNpbmdsZVByaWNlID0gcGFyc2VGbG9hdCgkKHRoaXMpLmZpbmQoJy5nY2ItaXRlbV9fcHJpY2UtcmVndWxhciAuZGlnaXRzJykudGV4dCgpLnJlcGxhY2UoL1xccysvZywnJykpO1xyXG5cdFx0XHR2YXIgcm93VG90YWxQcmljZSA9IHNpbmdsZVByaWNlICogYW1vdW50O1xyXG5cdFx0XHQkKHRoaXMpLmZpbmQoJy5nY2ItaXRlbV9fcHJpY2UtdG90YWwgLmRpZ2l0cycpLnRleHQoYWRkR2FwVG9OdW1iZXIocm93VG90YWxQcmljZSkpO1xyXG5cdFx0XHRjYXJ0VG90YWxQcmljZSArPSByb3dUb3RhbFByaWNlO1xyXG5cdFx0fSk7XHJcblx0XHQkKHRoaXMpLmZpbmQoJy5nY2ItdG90YWxfX3ByaWNlLXZhbHVlIC5kaWdpdHMnKS50ZXh0KGFkZEdhcFRvTnVtYmVyKGNhcnRUb3RhbFByaWNlKSk7XHJcblx0fSk7XHJcbiAgICAkKCcuZ29iaV9fcmFkaW8taXRlbScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgXHRpZighJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgIFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdH1cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICAgICQoJy5nb2ItdGVybXNfX2ljb24nKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgIFx0JCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuZ2RiLW1hcF9fdHlwZS1zd2l0Y2gtdHJpZ2dlcicpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGlmKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50SXRlbSA9ICQodGhpcykucGFyZW50KCk7XHJcbiAgICAgICAgICAgIHZhciBpbmQgPSBwYXJlbnRJdGVtLmluZGV4KCk7XHJcbiAgICAgICAgICAgIHZhciBtYXBCbG9ja0NvbnRlbnQgPSAkKCcuZ2RiLW1hcF9fY29udGVudC1pdGVtJyk7XHJcbiAgICAgICAgICAgIHBhcmVudEl0ZW0uc2libGluZ3MoKS5maW5kKCcuZ2RiLW1hcF9fdHlwZS1zd2l0Y2gtdHJpZ2dlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbWFwQmxvY2tDb250ZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG1hcEJsb2NrQ29udGVudC5lcShpbmQpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcudW9pLXBheXN5c3RlbV9fY2hvaWNlJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBvcGVuU2VsZWN0ID0gZnVuY3Rpb24oc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHNlbGVjdG9yWzBdLCB3b3JrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7IC8vIGFsbCBicm93c2Vyc1xyXG4gICAgICAgICAgICAgICAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO1xyXG4gICAgICAgICAgICAgICAgZS5pbml0TW91c2VFdmVudChcIm1vdXNlZG93blwiLCB0cnVlLCB0cnVlLCB3aW5kb3csIDAsIDAsIDAsIDAsIDAsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIHdvcmtlZCA9IGVsZW1lbnQuZGlzcGF0Y2hFdmVudChlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmZpcmVFdmVudCkgeyAvLyBpZVxyXG4gICAgICAgICAgICAgICAgd29ya2VkID0gZWxlbWVudC5maXJlRXZlbnQoXCJvbm1vdXNlZG93blwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LCB3b3JrZWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjaG9pY2VQYXJlbnQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBjaG9pY2VUcmlnZ2VyID0gY2hvaWNlUGFyZW50LmZpbmQoJy51b2ktcGF5c3lzdGVtX190cmlnZ2VyJyksXHJcbiAgICAgICAgICAgIGNob2ljZVNlbGVjdCA9IGNob2ljZVBhcmVudC5maW5kKCcudW9pLXBheXN5c3RlbV9fc2VsZWN0Jyk7XHJcbiAgICAgICAgY2hvaWNlVHJpZ2dlci5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjaG9pY2VQYXJlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBvcGVuU2VsZWN0KGNob2ljZVNlbGVjdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2hvaWNlU2VsZWN0LmNoYW5nZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjaG9pY2VUcmlnZ2VyLmh0bWwoJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICBjaG9pY2VQYXJlbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAkKCcucGlkX19vcmRlciAuYnRuLXRvLW9uZS1jbGljaycpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICQoJy5waWRfX3Bob25lLWZvcm0td3JhcCcpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB9KTtcclxuXHJcblx0JCgnLmNhdGFsb2ctbGlzdF9fbWliaWxlLW9wZW4tbGlzdCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG5cdFx0Y29uc29sZS5sb2coJ29rJylcclxuXHRcdCQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ21vYmlsZS1saXN0LXZpc2libGUnKTtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHR9KTtcclxuXHJcbn0pOyJdfQ==
