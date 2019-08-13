window.onscroll=function(){var e=document.querySelector(".fixed-head"),t=document.querySelector(".location");window.pageYOffset>75?(e.classList.add("header-fixed"),t.classList.add("list-padding")):(e.classList.remove("header-fixed"),t.classList.remove("list-padding"))},$(function(){function e(){$(this).toggleClass("active"),$(".level-1").not($(this).next()).slideUp(),$(this).next().slideToggle()}function t(e){return e%1!=0&&(e=e.toFixed(2)),e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1 ")}if($(document).mouseup(function(e){var t=$(".sorting-sale"),i=$(".hidden-sale");t.is(e.target)||0!==t.has(e.target).length||(i.slideUp(),t.removeClass("open-sorting"))}),$(document).mouseup(function(e){var t=$(".sorting-sum"),i=$(".hidden-sum");t.is(e.target)||0!==t.has(e.target).length||(i.slideUp(),t.removeClass("open-sorting"))}),$(".filter__name").click(function(e){e.preventDefault,$(this).toggleClass("angle-down"),$(this).next().slideToggle()}),$(".main-category").on("click",e),$(".catalog-list__items").mouseover(function(){$(this).find(".catalog-list__hidden-menu").addClass("active-hidden-menu"),$(this).mouseout(function(){$(".catalog-list__hidden-menu").removeClass("active-hidden-menu")})}),$(".catalog-list__hidden-menu").mouseover(function(){$(this).addClass("active-hidden-menu")}),$(".shop-cart").mouseover(function(){$(".opened-sc").addClass("db")}),$(".shop-cart").mouseout(function(){$(".opened-sc").removeClass("db")}),$(".opened-sc").mouseover(function(){$(".opened-sc").addClass("db")}),$(".opened-sc").mouseout(function(){$(".opened-sc").removeClass("db")}),$(".sorting-sale").click(function(e){e.preventDefault,$(this).toggleClass("open-sorting"),$(".hidden-sale").slideToggle()}),$(".sorting-sum").click(function(e){e.preventDefault,$(this).toggleClass("open-sorting"),$(".hidden-sum").slideToggle()}),$(".region__city").click(function(e){e.preventDefault;var t=$(".city-window");t.hasClass("city-open")?t.removeClass("city-open"):($(this).parent().hasClass("region")?t.removeAttr("style"):t.css("top",$(window).scrollTop()+120),t.addClass("city-open")),$(".overley").toggleClass("overley-open")}),$(".city-window__closed").click(function(e){e.preventDefault,$(".city-window").toggleClass("city-open"),$(".overley").toggleClass("overley-open")}),$(".custom-checkbox").change(function(){$(this).children(".custom-check").toggleClass("hoba")}),$(".burger-menu-btn").on("click",function(e){e.preventDefault,$(".main-sidebar").toggleClass("active-sidebar"),$("body").addClass("no-scroll")}),$(".fa-times").on("click",function(e){e.preventDefault,$(".main-sidebar").toggleClass("active-sidebar"),$("body").removeClass("no-scroll")}),$("main").on("click",function(e){var t=$(".main-sidebar");t.is(e.target)||0!==t.has(e.target).length||(t.removeClass("active-sidebar"),$("body").removeClass("no-scroll"))}),$(".polzunok-5").slider({min:0,max:15e3,values:[1e3,8e3],range:!0,animate:"fast",slide:function(e,t){$(".polzunok-input-5-left").val(t.values[0]),$(".polzunok-input-5-right").val(t.values[1])}}),$(".polzunok-input-5-left").val($(".polzunok-5").slider("values",0)),$(".polzunok-input-5-right").val($(".polzunok-5").slider("values",1)),$(document).focusout(function(){if($(".polzunok-5").length){var e=$(".polzunok-input-5-left").val().replace(/[^0-9]/g,""),t=$(".polzunok-5").slider("option","min"),i=$(".polzunok-5").slider("values",1),s=$(".polzunok-input-5-right").val().replace(/[^0-9]/g,""),n=$(".polzunok-5").slider("option","max"),o=$(".polzunok-5").slider("values",0);e>i&&(e=i),e<t&&(e=t),""==e&&(e=0),s<o&&(s=o),s>n&&(s=n),""==s&&(s=0),$(".polzunok-input-5-left").val(e),$(".polzunok-input-5-right").val(s),$(".polzunok-5").slider("values",[e,s])}}),$(".mobile-phones-icon").click(function(e){e.preventDefault,$(".mobile-phones-hidden").toggleClass("mobile-phones-hidden-active")}),$(document).mouseup(function(e){var t=$(".mobile-phones-hidden");0===t.has(e.target).length&&t.removeClass("mobile-phones-hidden-active")}),$(".products-icons__list").on("click",function(e){e.preventDefault(),$(this).toggleClass("products-icons__list-active")}),$(".products-icons__heart").on("click",function(e){e.preventDefault(),$(this).toggleClass("products-icons__heart-active")}),$(".colors-pic").on("click",function(){$(this).closest(".products-wrap").find(".product-img").removeClass("ch-img").eq($(this).index()).addClass("ch-img"),$(this).closest(".products-wrap").find(".colors-pic").removeClass("colors-pic-active").eq($(this).index()).addClass("colors-pic-active")}),$(".pid__thumbnails-more").click(function(e){$(this).parent().siblings(".pid__thumbnails").addClass("show-all"),e.preventDefault()}),$(".pcs__title-label").click(function(e){var t=$(this).parents(".pcs__title-col"),i=t.index(),s=$(this).parents(".pcs__wrap").find(".pcs__col");t.addClass("active").siblings().removeClass("active"),s.eq(i).addClass("active").siblings().removeClass("active"),e.preventDefault()}),$(".ranking-stars").each(function(){if($(this).hasClass("js-interactive")){var e,t,i=$(this),s=i.find(".ranking-stars__icon");s.hover(function(){e=i.attr("data-rating")||0,t=$(this).index()+1,i.attr("data-rating",""+t).removeClass("clicked")},function(){i.hasClass("clicked")||i.attr("data-rating",e)}),s.click(function(){i.attr("data-rating",""+t).addClass("clicked")})}}),$(".psg__slider").length&&$(".psg__slider").owlCarousel({loop:!0,nav:!0,margin:0,responsiveClass:!0,navText:["",""],responsive:{0:{items:2},1346:{items:3},1451:{items:4}}}),$(".prv__slider").length&&$(".prv__slider").owlCarousel({loop:!0,nav:!0,margin:0,responsiveClass:!0,navText:["",""],responsive:{0:{items:3,nav:!1},768:{items:3},993:{items:4},1346:{items:6},1451:{items:7},1700:{items:8}}}),$(".pid__slider").length){var i=$(".pid__slider");i.owlCarousel({loop:!1,nav:!1,margin:0,navText:["",""],mouseDrag:!1,touchDrag:!0,items:1}),$(".pid__thumbnails-item").click(function(e){var t=$(this).index();$(".pid__slider").trigger("to.owl.carousel",[t,200,!0]),e.preventDefault()})}$(".itmc__inc, .itmc__dec").click(function(){var e=$(this).siblings(".itmc__amount"),t=parseInt(e.text()),i=$(this).parent().data("max-value");$(this).hasClass("itmc__inc")?t<i&&t++:t>1&&t--,e.text(t),$(this).parents(".gcb-table").length&&$(this).parents(".gcb-table").trigger("cart:recount")}),$(".gcb-table").on("cart:recount",function(){var e=0,i=$(this).find(".gcb-item");i.each(function(){var i=parseInt($(this).find(".itmc__amount").text()),s=parseFloat($(this).find(".gcb-item__price-regular .digits").text().replace(/\s+/g,"")),n=s*i;$(this).find(".gcb-item__price-total .digits").text(t(n)),e+=n}),$(this).find(".gcb-total__price-value .digits").text(t(e))})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbnNjcm9sbCIsImhlYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxpc3QiLCJwYWdlWU9mZnNldCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIiQiLCJmX2FjYyIsInRoaXMiLCJ0b2dnbGVDbGFzcyIsIm5vdCIsIm5leHQiLCJzbGlkZVVwIiwic2xpZGVUb2dnbGUiLCJhZGRHYXBUb051bWJlciIsIm51bSIsInRvRml4ZWQiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJtb3VzZXVwIiwiZSIsInJlIiwicnkiLCJpcyIsInRhcmdldCIsImhhcyIsImxlbmd0aCIsInJlbW92ZUNsYXNzIiwicmkiLCJybyIsImNsaWNrIiwicHJldmVudERlZmF1bHQiLCJvbiIsIm1vdXNlb3ZlciIsImZpbmQiLCJhZGRDbGFzcyIsIm1vdXNlb3V0IiwiY2l0aWVzUG9wdXAiLCJoYXNDbGFzcyIsInBhcmVudCIsInJlbW92ZUF0dHIiLCJjc3MiLCJzY3JvbGxUb3AiLCJjaGFuZ2UiLCJjaGlsZHJlbiIsImRpdiIsInNsaWRlciIsIm1pbiIsIm1heCIsInZhbHVlcyIsInJhbmdlIiwiYW5pbWF0ZSIsInNsaWRlIiwiZXZlbnQiLCJ1aSIsInZhbCIsImZvY3Vzb3V0IiwiaW5wdXRfbGVmdCIsIm9wdF9sZWZ0Iiwid2hlcmVfcmlnaHQiLCJpbnB1dF9yaWdodCIsIm9wdF9yaWdodCIsIndoZXJlX2xlZnQiLCJjb250YWluZXIiLCJjbG9zZXN0IiwiZXEiLCJpbmRleCIsInNpYmxpbmdzIiwidGl0bGVDb2wiLCJwYXJlbnRzIiwidGl0bGVDb2xJbmRleCIsImNvbnRlbnRDb2wiLCJlYWNoIiwiclN0YXJzQ3VycmVudCIsInJTdGFyc1RhcmdldCIsInJTdGFyc1BhcmVudCIsInJTdGFycyIsImhvdmVyIiwiYXR0ciIsIm93bENhcm91c2VsIiwibG9vcCIsIm5hdiIsIm1hcmdpbiIsInJlc3BvbnNpdmVDbGFzcyIsIm5hdlRleHQiLCJyZXNwb25zaXZlIiwiMCIsIml0ZW1zIiwiMTM0NiIsIjE0NTEiLCI3NjgiLCI5OTMiLCIxNzAwIiwicGlkT3dsIiwibW91c2VEcmFnIiwidG91Y2hEcmFnIiwidHJpZ2dlciIsImFtb3VudEJsb2NrIiwiYW1vdW50IiwicGFyc2VJbnQiLCJ0ZXh0IiwibWF4QW1vdW50IiwiZGF0YSIsImNhcnRUb3RhbFByaWNlIiwiY2FydFJvdyIsInNpbmdsZVByaWNlIiwicGFyc2VGbG9hdCIsInJvd1RvdGFsUHJpY2UiXSwibWFwcGluZ3MiOiJBQUNBQSxPQUFPQyxTQUFXLFdBQ2QsR0FBSUMsR0FBU0MsU0FBU0MsY0FBYyxlQUNoQ0MsRUFBT0YsU0FBU0MsY0FBYyxZQUUvQkosUUFBT00sWUFBYyxJQUNwQkosRUFBT0ssVUFBVUMsSUFBSSxnQkFDckJILEVBQUtFLFVBQVVDLElBQUksa0JBRW5CTixFQUFPSyxVQUFVRSxPQUFPLGdCQUN4QkosRUFBS0UsVUFBVUUsT0FBTyxrQkFLOUJDLEVBQUUsV0FpQ0UsUUFBU0MsS0FDTEQsRUFBRUUsTUFBTUMsWUFBWSxVQUNwQkgsRUFBRSxZQUFZSSxJQUFJSixFQUFFRSxNQUFNRyxRQUFRQyxVQUNsQ04sRUFBRUUsTUFBTUcsT0FBT0UsY0EwUm5CLFFBQVNDLEdBQWVDLEdBSXBCLE1BSElBLEdBQU0sR0FBSyxJQUNYQSxFQUFNQSxFQUFJQyxRQUFRLElBRWZELEVBQUlFLFdBQVdDLFFBQVEsMEJBQTJCLE9BcEM3RCxHQTNSQVosRUFBRVAsVUFBVW9CLFFBQVEsU0FBVUMsR0FDMUIsR0FBSUMsR0FBS2YsRUFBRSxpQkFDUGdCLEVBQUtoQixFQUFFLGVBQ05lLEdBQUdFLEdBQUdILEVBQUVJLFNBQ3NCLElBQTVCSCxFQUFHSSxJQUFJTCxFQUFFSSxRQUFRRSxTQUNwQkosRUFBR1YsVUFDSFMsRUFBR00sWUFBWSxtQkFLdkJyQixFQUFFUCxVQUFVb0IsUUFBUSxTQUFVQyxHQUMxQixHQUFJUSxHQUFLdEIsRUFBRSxnQkFDUHVCLEVBQUt2QixFQUFF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RixFQUFFRSxNQUFNNkQsUUFBUSxjQUFjM0MsUUFDN0JwQixFQUFFRSxNQUFNNkQsUUFBUSxjQUFjMkIsUUFBUSxrQkFTOUMxRixFQUFFLGNBQWMwQixHQUFHLGVBQWdCLFdBQy9CLEdBQUl1RSxHQUFpQixFQUNqQkMsRUFBVWxHLEVBQUVFLE1BQU0wQixLQUFLLFlBQzNCc0UsR0FBUWhDLEtBQUssV0FDVCxHQUFJMEIsR0FBU0MsU0FBUzdGLEVBQUVFLE1BQU0wQixLQUFLLGlCQUFpQmtFLFFBQ2hESyxFQUFjQyxXQUFXcEcsRUFBRUUsTUFBTTBCLEtBQUssb0NBQW9Da0UsT0FBT2xGLFFBQVEsT0FBTyxLQUNoR3lGLEVBQWdCRixFQUFjUCxDQUNsQzVGLEdBQUVFLE1BQU0wQixLQUFLLGtDQUFrQ2tFLEtBQUt0RixFQUFlNkYsSUFDbkVKLEdBQWtCSSxJQUV0QnJHLEVBQUVFLE1BQU0wQixLQUFLLG1DQUFtQ2tFLEtBQUt0RixFQUFleUYiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g0J/Qu9Cw0LLQsNGO0YnQsNGPINGI0LDQv9C60LAg0Lgg0LHQvtC60L7QstC+0LUg0LzQtdC90Y5cclxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gc2hvd0hlYWRlcigpIHtcclxuICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZml4ZWQtaGVhZCcpO1xyXG4gICAgdmFyIGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKTtcclxuXHJcbiAgICBpZih3aW5kb3cucGFnZVlPZmZzZXQgPiA3NSl7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1maXhlZCcpO1xyXG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdC1wYWRkaW5nJyk7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci1maXhlZCcpO1xyXG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnbGlzdC1wYWRkaW5nJyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vINCh0LrRgNGL0YLQuNC1INC/0LXRgNCy0L7QuSDRgdC+0YDRgtC40YDQvtCy0LrQuCDQv9C+INC60LvQuNC60YMg0L3QsCDQu9GO0LHRg9GOINC+0LHQu9Cw0YHRgtGMXHJcbiAgICAkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKXtcclxuICAgICAgICB2YXIgcmUgPSAkKFwiLnNvcnRpbmctc2FsZVwiKTtcclxuICAgICAgICB2YXIgcnkgPSAkKFwiLmhpZGRlbi1zYWxlXCIpO1xyXG4gICAgICAgIGlmICghcmUuaXMoZS50YXJnZXQpXHJcbiAgICAgICAgICAgICYmIHJlLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJ5LnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgcmUucmVtb3ZlQ2xhc3MoXCJvcGVuLXNvcnRpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g0KHQutGA0YvRgtC40LUg0LLRgtC+0YDQvtC5INGB0L7RgNGC0LjRgNC+0LLQutC4INC/0L4g0LrQu9C40LrRgyDQvdCwINC70Y7QsdGD0Y4g0L7QsdC70LDRgdGC0YxcclxuICAgICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIHZhciByaSA9ICQoXCIuc29ydGluZy1zdW1cIik7XHJcbiAgICAgICAgdmFyIHJvID0gJChcIi5oaWRkZW4tc3VtXCIpO1xyXG4gICAgICAgIGlmICghcmkuaXMoZS50YXJnZXQpXHJcbiAgICAgICAgICAgICYmIHJpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJvLnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgcmkucmVtb3ZlQ2xhc3MoXCJvcGVuLXNvcnRpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy/QkNC60LrQvtGA0LTQuNC+0L0g0YTQuNC70YzRgtGA0L7QslxyXG4gICAgJCgnLmZpbHRlcl9fbmFtZScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQ7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYW5nbGUtZG93bicpO1xyXG4gICAgICAgICQodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL9CQ0LrQutC+0YDQtNC10L7QvSDQsdC+0LrQvtCy0L7Qs9C+INC80LXQvdGOXHJcbiAgICAkKCcubWFpbi1jYXRlZ29yeScpLm9uKCdjbGljaycsIGZfYWNjKTtcclxuICAgIGZ1bmN0aW9uIGZfYWNjKCl7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLmxldmVsLTEnKS5ub3QoJCh0aGlzKS5uZXh0KCkpLnNsaWRlVXAoKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyDQktGB0L/Qu9GL0LLQsNGO0YnQuNC1INC80LXQvdGOXHJcbiAgICAkKCcuY2F0YWxvZy1saXN0X19pdGVtcycpLm1vdXNlb3ZlcihmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykuZmluZCgnLmNhdGFsb2ctbGlzdF9faGlkZGVuLW1lbnUnKS5hZGRDbGFzcygnYWN0aXZlLWhpZGRlbi1tZW51Jyk7XHJcbiAgICAgICAgJCh0aGlzKS5tb3VzZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKCcuY2F0YWxvZy1saXN0X19oaWRkZW4tbWVudScpLnJlbW92ZUNsYXNzKCdhY3RpdmUtaGlkZGVuLW1lbnUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5jYXRhbG9nLWxpc3RfX2hpZGRlbi1tZW51JykubW91c2VvdmVyKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWhpZGRlbi1tZW51Jyk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vINCf0L7Rj9Cy0LvQtdC90LjQtSDQutC+0YDQt9C40L3Ri1xyXG4gICAgJCgnLnNob3AtY2FydCcpLm1vdXNlb3ZlcihmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5vcGVuZWQtc2MnKS5hZGRDbGFzcygnZGInKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5zaG9wLWNhcnQnKS5tb3VzZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5vcGVuZWQtc2MnKS5yZW1vdmVDbGFzcygnZGInKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5vcGVuZWQtc2MnKS5tb3VzZW92ZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcub3BlbmVkLXNjJykuYWRkQ2xhc3MoJ2RiJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcub3BlbmVkLXNjJykubW91c2VvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcub3BlbmVkLXNjJykucmVtb3ZlQ2xhc3MoJ2RiJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuc29ydGluZy1zYWxlJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuLXNvcnRpbmcnKTtcclxuICAgICAgICAkKCcuaGlkZGVuLXNhbGUnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNvcnRpbmctc3VtJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuLXNvcnRpbmcnKTtcclxuICAgICAgICAkKCcuaGlkZGVuLXN1bScpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcucmVnaW9uX19jaXR5JykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICB2YXIgY2l0aWVzUG9wdXAgPSAkKCcuY2l0eS13aW5kb3cnKTtcclxuICAgICAgICBpZiAoY2l0aWVzUG9wdXAuaGFzQ2xhc3MoJ2NpdHktb3BlbicpKSB7XHJcbiAgICAgICAgICAgIGNpdGllc1BvcHVwLnJlbW92ZUNsYXNzKCdjaXR5LW9wZW4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZighJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygncmVnaW9uJykpe1xyXG4gICAgICAgICAgICAgICAgY2l0aWVzUG9wdXAuY3NzKCd0b3AnLCAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAxMjApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2l0aWVzUG9wdXAucmVtb3ZlQXR0cihcInN0eWxlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNpdGllc1BvcHVwLmFkZENsYXNzKCdjaXR5LW9wZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnLm92ZXJsZXknKS50b2dnbGVDbGFzcygnb3ZlcmxleS1vcGVuJyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmNpdHktd2luZG93X19jbG9zZWQnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0O1xyXG4gICAgICAgICQoJy5jaXR5LXdpbmRvdycpLnRvZ2dsZUNsYXNzKCdjaXR5LW9wZW4nKTtcclxuICAgICAgICAkKCcub3ZlcmxleScpLnRvZ2dsZUNsYXNzKCdvdmVybGV5LW9wZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCU0LXQudGB0YLQstC40Y8g0KfQtdC60LHQvtC60YHQvtCyXHJcbiAgICAkKCcuY3VzdG9tLWNoZWNrYm94JykuY2hhbmdlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmN1c3RvbS1jaGVjaycpLnRvZ2dsZUNsYXNzKCdob2JhJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQn9C+0Y/QstC70LXQvdC40LUg0Lgg0LfQsNC60YDRi9GC0LjQtSDQsdC+0LrQvtCy0L7Qs9C+INC80LXQvdGOXHJcbiAgICAkKCcuYnVyZ2VyLW1lbnUtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICAkKCcubWFpbi1zaWRlYmFyJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZS1zaWRlYmFyJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCduby1zY3JvbGwnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5mYS10aW1lcycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQ7XHJcbiAgICAgICAgJCgnLm1haW4tc2lkZWJhcicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUtc2lkZWJhcicpO1xyXG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbm8tc2Nyb2xsJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdtYWluJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpeyAvLyDRgdC+0LHRi9GC0LjQtSDQutC70LjQutCwINC/0L4g0LLQtdCxLdC00L7QutGD0LzQtdC90YLRg1xyXG4gICAgICAgIHZhciBkaXYgPSAkKFwiLm1haW4tc2lkZWJhclwiKTsgLy8g0YLRg9GCINGD0LrQsNC30YvQstCw0LXQvCBJRCDRjdC70LXQvNC10L3RgtCwXHJcbiAgICAgICAgaWYgKCFkaXYuaXMoZS50YXJnZXQpIC8vINC10YHQu9C4INC60LvQuNC6INCx0YvQuyDQvdC1INC/0L4g0L3QsNGI0LXQvNGDINCx0LvQvtC60YNcclxuICAgICAgICAgICAgJiYgZGl2LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7IC8vINC4INC90LUg0L/QviDQtdCz0L4g0LTQvtGH0LXRgNC90LjQvCDRjdC70LXQvNC10L3RgtCw0LxcclxuICAgICAgICAgICAgZGl2LnJlbW92ZUNsYXNzKCdhY3RpdmUtc2lkZWJhcicpOyAvLyDRgdC60YDRi9Cy0LDQtdC8INC10LPQvlxyXG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCh0LvQsNC50LTQtdGAINGG0LXQvdGLXHJcbiAgICAkKFwiLnBvbHp1bm9rLTVcIikuc2xpZGVyKHtcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgbWF4OiAxNTAwMCxcclxuICAgICAgICB2YWx1ZXM6IFsxMDAwLCA4MDAwXSxcclxuICAgICAgICByYW5nZTogdHJ1ZSxcclxuICAgICAgICBhbmltYXRlOiBcImZhc3RcIixcclxuICAgICAgICBzbGlkZSA6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xyXG4gICAgICAgICAgICAkKFwiLnBvbHp1bm9rLWlucHV0LTUtbGVmdFwiKS52YWwodWkudmFsdWVzWyAwIF0pO1xyXG4gICAgICAgICAgICAkKFwiLnBvbHp1bm9rLWlucHV0LTUtcmlnaHRcIikudmFsKHVpLnZhbHVlc1sgMSBdKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoXCIucG9senVub2staW5wdXQtNS1sZWZ0XCIpLnZhbCgkKFwiLnBvbHp1bm9rLTVcIikuc2xpZGVyKFwidmFsdWVzXCIsIDApKTtcclxuICAgICQoXCIucG9senVub2staW5wdXQtNS1yaWdodFwiKS52YWwoJChcIi5wb2x6dW5vay01XCIpLnNsaWRlcihcInZhbHVlc1wiLCAxKSk7XHJcbiAgICAkKGRvY3VtZW50KS5mb2N1c291dChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCgnLnBvbHp1bm9rLTUnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGlucHV0X2xlZnQgPSAkKFwiLnBvbHp1bm9rLWlucHV0LTUtbGVmdFwiKS52YWwoKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpLFxyXG4gICAgICAgICAgICAgICAgb3B0X2xlZnQgPSAkKFwiLnBvbHp1bm9rLTVcIikuc2xpZGVyKFwib3B0aW9uXCIsIFwibWluXCIpLFxyXG4gICAgICAgICAgICAgICAgd2hlcmVfcmlnaHQgPSAkKFwiLnBvbHp1bm9rLTVcIikuc2xpZGVyKFwidmFsdWVzXCIsIDEpLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRfcmlnaHQgPSAkKFwiLnBvbHp1bm9rLWlucHV0LTUtcmlnaHRcIikudmFsKCkucmVwbGFjZSgvW14wLTldL2csICcnKSxcclxuICAgICAgICAgICAgICAgIG9wdF9yaWdodCA9ICQoXCIucG9senVub2stNVwiKS5zbGlkZXIoXCJvcHRpb25cIiwgXCJtYXhcIiksXHJcbiAgICAgICAgICAgICAgICB3aGVyZV9sZWZ0ID0gJChcIi5wb2x6dW5vay01XCIpLnNsaWRlcihcInZhbHVlc1wiLCAwKTtcclxuICAgICAgICAgICAgaWYgKGlucHV0X2xlZnQgPiB3aGVyZV9yaWdodCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRfbGVmdCA9IHdoZXJlX3JpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dF9sZWZ0IDwgb3B0X2xlZnQpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0X2xlZnQgPSBvcHRfbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXRfbGVmdCA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dF9sZWZ0ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXRfcmlnaHQgPCB3aGVyZV9sZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dF9yaWdodCA9IHdoZXJlX2xlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlucHV0X3JpZ2h0ID4gb3B0X3JpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dF9yaWdodCA9IG9wdF9yaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXRfcmlnaHQgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRfcmlnaHQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoXCIucG9senVub2staW5wdXQtNS1sZWZ0XCIpLnZhbChpbnB1dF9sZWZ0KTtcclxuICAgICAgICAgICAgJChcIi5wb2x6dW5vay1pbnB1dC01LXJpZ2h0XCIpLnZhbChpbnB1dF9yaWdodCk7XHJcbiAgICAgICAgICAgICQoXCIucG9senVub2stNVwiKS5zbGlkZXIoIFwidmFsdWVzXCIsIFsgaW5wdXRfbGVmdCwgaW5wdXRfcmlnaHQgXSApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCh0L/QuNGB0L7QuiDRgtC10LvQtdGE0L7QvdC+0LIg0L3QsCDQvNC+0LEuINGD0YHRgtGA0L7QudGB0YLQstCw0YVcclxuICAgICQoJy5tb2JpbGUtcGhvbmVzLWljb24nKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0O1xyXG4gICAgICAgICQoJy5tb2JpbGUtcGhvbmVzLWhpZGRlbicpLnRvZ2dsZUNsYXNzKCdtb2JpbGUtcGhvbmVzLWhpZGRlbi1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gJChcIi5tb2JpbGUtcGhvbmVzLWhpZGRlblwiKTtcclxuICAgICAgICBpZiAoY29udGFpbmVyLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNsYXNzKCdtb2JpbGUtcGhvbmVzLWhpZGRlbi1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQkNC60YLQuNCy0L3QvtGB0YLRjCDQuNC60L7QvdC60Lgg0Log0YHRgNCw0LLQvdC10L3QuNGOXHJcbiAgICAkKCcucHJvZHVjdHMtaWNvbnNfX2xpc3QnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdwcm9kdWN0cy1pY29uc19fbGlzdC1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCQ0LrRgtC40LLQvdC+0YHRgtGMINC40LrQvtC90LrQuCDQsiDQuNC30LHRgNCw0L3QvdC+0LVcclxuICAgICQoJy5wcm9kdWN0cy1pY29uc19faGVhcnQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdwcm9kdWN0cy1pY29uc19faGVhcnQtYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQodC80LXQvdCwINGE0L7RgtC+0LPRgNCw0YTQuNC4INC4INC/0L7Rj9Cy0LvQtdC90LjQtSDQvtCx0LLQvtC00LrQuCDRgyDRhtCy0LXRgtCwXHJcbiAgICAkKCcuY29sb3JzLXBpYycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5wcm9kdWN0cy13cmFwJykuZmluZCgnLnByb2R1Y3QtaW1nJykucmVtb3ZlQ2xhc3MoXCJjaC1pbWdcIikuZXEoJCh0aGlzKS5pbmRleCgpKS5hZGRDbGFzcyhcImNoLWltZ1wiKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5wcm9kdWN0cy13cmFwJykuZmluZCgnLmNvbG9ycy1waWMnKS5yZW1vdmVDbGFzcyhcImNvbG9ycy1waWMtYWN0aXZlXCIpLmVxKCQodGhpcykuaW5kZXgoKSkuYWRkQ2xhc3MoXCJjb2xvcnMtcGljLWFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKCcucGlkX190aHVtYm5haWxzLW1vcmUnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCcucGlkX190aHVtYm5haWxzJykuYWRkQ2xhc3MoJ3Nob3ctYWxsJyk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcucGNzX190aXRsZS1sYWJlbCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIHZhciB0aXRsZUNvbCA9ICQodGhpcykucGFyZW50cygnLnBjc19fdGl0bGUtY29sJyk7XHJcbiAgICAgICAgdmFyIHRpdGxlQ29sSW5kZXggPSB0aXRsZUNvbC5pbmRleCgpO1xyXG4gICAgICAgIHZhciBjb250ZW50Q29sID0gJCh0aGlzKS5wYXJlbnRzKCcucGNzX193cmFwJykuZmluZCgnLnBjc19fY29sJyk7XHJcbiAgICAgICAgdGl0bGVDb2wuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGNvbnRlbnRDb2wuZXEodGl0bGVDb2xJbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLnJhbmtpbmctc3RhcnMnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnanMtaW50ZXJhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICB2YXIgclN0YXJzUGFyZW50ID0gJCh0aGlzKSwgclN0YXJzID0gIHJTdGFyc1BhcmVudC5maW5kKCcucmFua2luZy1zdGFyc19faWNvbicpLCByU3RhcnNDdXJyZW50LCByU3RhcnNUYXJnZXQ7XHJcbiAgICAgICAgICAgIHJTdGFycy5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJTdGFyc0N1cnJlbnQgPSByU3RhcnNQYXJlbnQuYXR0cihcImRhdGEtcmF0aW5nXCIpIHx8IDA7XHJcbiAgICAgICAgICAgICAgICByU3RhcnNUYXJnZXQgPSAkKHRoaXMpLmluZGV4KCkrMTtcclxuICAgICAgICAgICAgICAgIHJTdGFyc1BhcmVudC5hdHRyKFwiZGF0YS1yYXRpbmdcIiwgXCJcIiArIHJTdGFyc1RhcmdldCkucmVtb3ZlQ2xhc3MoXCJjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJTdGFyc1BhcmVudC5oYXNDbGFzcyhcImNsaWNrZWRcIikgfHwgclN0YXJzUGFyZW50LmF0dHIoXCJkYXRhLXJhdGluZ1wiLCByU3RhcnNDdXJyZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJTdGFycy5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJTdGFyc1BhcmVudC5hdHRyKFwiZGF0YS1yYXRpbmdcIiwgXCJcIiArIHJTdGFyc1RhcmdldCkuYWRkQ2xhc3MoXCJjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmKCQoJy5wc2dfX3NsaWRlcicpLmxlbmd0aCl7XHJcbiAgICAgICAgJCgnLnBzZ19fc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICBsb29wOnRydWUsXHJcbiAgICAgICAgICAgIG5hdjp0cnVlLFxyXG4gICAgICAgICAgICBtYXJnaW46MCxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZUNsYXNzOnRydWUsXHJcbiAgICAgICAgICAgIG5hdlRleHQ6IFsnJywnJ10sXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6e1xyXG4gICAgICAgICAgICAgICAgMDp7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6MlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDEzNDY6e1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOjNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAxNDUxOntcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczo0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYoJCgnLnBydl9fc2xpZGVyJykubGVuZ3RoKXtcclxuICAgICAgICAkKCcucHJ2X19zbGlkZXInKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGxvb3A6dHJ1ZSxcclxuICAgICAgICAgICAgbmF2OnRydWUsXHJcbiAgICAgICAgICAgIG1hcmdpbjowLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlQ2xhc3M6dHJ1ZSxcclxuICAgICAgICAgICAgbmF2VGV4dDogWycnLCcnXSxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTp7XHJcbiAgICAgICAgICAgICAgICAwOntcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczozLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hdjpmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDc2ODp7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6M1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDk5Mzp7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6NFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDEzNDY6e1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOjZcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAxNDUxOntcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczo3XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgMTcwMDp7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6OFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZigkKCcucGlkX19zbGlkZXInKS5sZW5ndGgpe1xyXG4gICAgICAgIHZhciBwaWRPd2wgPSAkKCcucGlkX19zbGlkZXInKTtcclxuICAgICAgICBwaWRPd2wub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICBsb29wOmZhbHNlLFxyXG4gICAgICAgICAgICBuYXY6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1hcmdpbjowLFxyXG4gICAgICAgICAgICBuYXZUZXh0OiBbJycsJyddLFxyXG4gICAgICAgICAgICBtb3VzZURyYWc6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3VjaERyYWc6IHRydWUsXHJcbiAgICAgICAgICAgIGl0ZW1zOjEsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcucGlkX190aHVtYm5haWxzLWl0ZW0nKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xyXG4gICAgICAgICAgICAkKCcucGlkX19zbGlkZXInKS50cmlnZ2VyKCd0by5vd2wuY2Fyb3VzZWwnLCBbaW5kZXgsIDIwMCwgdHJ1ZV0pO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLml0bWNfX2luYywgLml0bWNfX2RlYycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGFtb3VudEJsb2NrID0gJCh0aGlzKS5zaWJsaW5ncygnLml0bWNfX2Ftb3VudCcpO1xyXG4gICAgICAgIHZhciBhbW91bnQgPSBwYXJzZUludChhbW91bnRCbG9jay50ZXh0KCkpO1xyXG4gICAgICAgIHZhciBtYXhBbW91bnQgPSAkKHRoaXMpLnBhcmVudCgpLmRhdGEoJ21heC12YWx1ZScpO1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2l0bWNfX2luYycpKXtcclxuICAgICAgICAgICAgaWYgKGFtb3VudCA8IG1heEFtb3VudCkgYW1vdW50Kys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGFtb3VudCA+IDEpIGFtb3VudC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbW91bnRCbG9jay50ZXh0KGFtb3VudCk7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5wYXJlbnRzKCcuZ2NiLXRhYmxlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmdjYi10YWJsZScpLnRyaWdnZXIoJ2NhcnQ6cmVjb3VudCcpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBmdW5jdGlvbiBhZGRHYXBUb051bWJlcihudW0pe1xyXG4gICAgICAgIGlmIChudW0gJSAxICE9IDApIHtcclxuICAgICAgICAgICAgbnVtID0gbnVtLnRvRml4ZWQoMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2csICckMSAnKVxyXG4gICAgfVxyXG4gICAgJCgnLmdjYi10YWJsZScpLm9uKCdjYXJ0OnJlY291bnQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNhcnRUb3RhbFByaWNlID0gMDtcclxuICAgICAgICB2YXIgY2FydFJvdyA9ICQodGhpcykuZmluZCgnLmdjYi1pdGVtJyk7XHJcbiAgICAgICAgY2FydFJvdy5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBhbW91bnQgPSBwYXJzZUludCgkKHRoaXMpLmZpbmQoJy5pdG1jX19hbW91bnQnKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICB2YXIgc2luZ2xlUHJpY2UgPSBwYXJzZUZsb2F0KCQodGhpcykuZmluZCgnLmdjYi1pdGVtX19wcmljZS1yZWd1bGFyIC5kaWdpdHMnKS50ZXh0KCkucmVwbGFjZSgvXFxzKy9nLCcnKSk7XHJcbiAgICAgICAgICAgIHZhciByb3dUb3RhbFByaWNlID0gc2luZ2xlUHJpY2UgKiBhbW91bnQ7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLmdjYi1pdGVtX19wcmljZS10b3RhbCAuZGlnaXRzJykudGV4dChhZGRHYXBUb051bWJlcihyb3dUb3RhbFByaWNlKSk7XHJcbiAgICAgICAgICAgIGNhcnRUb3RhbFByaWNlICs9IHJvd1RvdGFsUHJpY2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuZ2NiLXRvdGFsX19wcmljZS12YWx1ZSAuZGlnaXRzJykudGV4dChhZGRHYXBUb051bWJlcihjYXJ0VG90YWxQcmljZSkpO1xyXG4gICAgfSk7XHJcbn0pOyJdfQ==
