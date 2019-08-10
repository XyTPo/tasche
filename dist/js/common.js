window.onscroll=function(){var e=document.querySelector(".fixed-head"),t=document.querySelector(".location");window.pageYOffset>75?(e.classList.add("header-fixed"),t.classList.add("list-padding")):(e.classList.remove("header-fixed"),t.classList.remove("list-padding"))},$(function(){function e(){$(this).toggleClass("active"),$(".level-1").not($(this).next()).slideUp(),$(this).next().slideToggle()}if($(document).mouseup(function(e){var t=$(".sorting-sale"),s=$(".hidden-sale");t.is(e.target)||0!==t.has(e.target).length||(s.slideUp(),t.removeClass("open-sorting"))}),$(document).mouseup(function(e){var t=$(".sorting-sum"),s=$(".hidden-sum");t.is(e.target)||0!==t.has(e.target).length||(s.slideUp(),t.removeClass("open-sorting"))}),$(".filter__name").click(function(e){e.preventDefault,$(this).toggleClass("angle-down"),$(this).next().slideToggle()}),$(".main-category").on("click",e),$(".catalog-list__items").mouseover(function(){$(this).find(".catalog-list__hidden-menu").addClass("active-hidden-menu"),$(this).mouseout(function(){$(".catalog-list__hidden-menu").removeClass("active-hidden-menu")})}),$(".catalog-list__hidden-menu").mouseover(function(){$(this).addClass("active-hidden-menu")}),$(".shop-cart").mouseover(function(){$(".opened-sc").addClass("db")}),$(".shop-cart").mouseout(function(){$(".opened-sc").removeClass("db")}),$(".opened-sc").mouseover(function(){$(".opened-sc").addClass("db")}),$(".opened-sc").mouseout(function(){$(".opened-sc").removeClass("db")}),$(".sorting-sale").click(function(e){e.preventDefault,$(this).toggleClass("open-sorting"),$(".hidden-sale").slideToggle()}),$(".sorting-sum").click(function(e){e.preventDefault,$(this).toggleClass("open-sorting"),$(".hidden-sum").slideToggle()}),$(".region__city").click(function(e){e.preventDefault;var t=$(".city-window");t.hasClass("city-open")?t.removeClass("city-open"):($(this).parent().hasClass("region")?t.removeAttr("style"):t.css("top",$(window).scrollTop()+120),t.addClass("city-open")),$(".overley").toggleClass("overley-open")}),$(".city-window__closed").click(function(e){e.preventDefault,$(".city-window").toggleClass("city-open"),$(".overley").toggleClass("overley-open")}),$(".custom-checkbox").change(function(){$(this).children(".custom-check").toggleClass("hoba")}),$(".burger-menu-btn").on("click",function(e){e.preventDefault,$(".main-sidebar").toggleClass("active-sidebar"),$("body").addClass("no-scroll")}),$(".fa-times").on("click",function(e){e.preventDefault,$(".main-sidebar").toggleClass("active-sidebar"),$("body").removeClass("no-scroll")}),$("main").on("click",function(e){var t=$(".main-sidebar");t.is(e.target)||0!==t.has(e.target).length||(t.removeClass("active-sidebar"),$("body").removeClass("no-scroll"))}),$(".polzunok-5").slider({min:0,max:15e3,values:[1e3,8e3],range:!0,animate:"fast",slide:function(e,t){$(".polzunok-input-5-left").val(t.values[0]),$(".polzunok-input-5-right").val(t.values[1])}}),$(".polzunok-input-5-left").val($(".polzunok-5").slider("values",0)),$(".polzunok-input-5-right").val($(".polzunok-5").slider("values",1)),$(document).focusout(function(){if($(".polzunok-5").length){var e=$(".polzunok-input-5-left").val().replace(/[^0-9]/g,""),t=$(".polzunok-5").slider("option","min"),s=$(".polzunok-5").slider("values",1),i=$(".polzunok-input-5-right").val().replace(/[^0-9]/g,""),n=$(".polzunok-5").slider("option","max"),o=$(".polzunok-5").slider("values",0);e>s&&(e=s),e<t&&(e=t),""==e&&(e=0),i<o&&(i=o),i>n&&(i=n),""==i&&(i=0),$(".polzunok-input-5-left").val(e),$(".polzunok-input-5-right").val(i),$(".polzunok-5").slider("values",[e,i])}}),$(".mobile-phones-icon").click(function(e){e.preventDefault,$(".mobile-phones-hidden").toggleClass("mobile-phones-hidden-active")}),$(document).mouseup(function(e){var t=$(".mobile-phones-hidden");0===t.has(e.target).length&&t.removeClass("mobile-phones-hidden-active")}),$(".products-icons__list").on("click",function(e){e.preventDefault(),$(this).toggleClass("products-icons__list-active")}),$(".products-icons__heart").on("click",function(e){e.preventDefault(),$(this).toggleClass("products-icons__heart-active")}),$(".colors-pic").on("click",function(){$(this).closest(".products-wrap").find(".product-img").removeClass("ch-img").eq($(this).index()).addClass("ch-img"),$(this).closest(".products-wrap").find(".colors-pic").removeClass("colors-pic-active").eq($(this).index()).addClass("colors-pic-active")}),$(".pid__thumbnails-more").click(function(e){$(this).parent().siblings(".pid__thumbnails").addClass("show-all"),e.preventDefault()}),$(".pcs__title-label").click(function(e){var t=$(this).parents(".pcs__title-col"),s=t.index(),i=$(this).parents(".pcs__wrap").find(".pcs__col");t.addClass("active").siblings().removeClass("active"),i.eq(s).addClass("active").siblings().removeClass("active"),e.preventDefault()}),$(".ranking-stars").each(function(){if($(this).hasClass("js-interactive")){var e,t,s=$(this),i=s.find(".ranking-stars__icon");i.hover(function(){e=s.attr("data-rating")||0,t=$(this).index()+1,s.attr("data-rating",""+t).removeClass("clicked")},function(){s.hasClass("clicked")||s.attr("data-rating",e)}),i.click(function(){s.attr("data-rating",""+t).addClass("clicked")})}}),$(".psg__slider").length&&$(".psg__slider").owlCarousel({loop:!0,nav:!0,margin:0,responsiveClass:!0,navText:["",""],responsive:{0:{items:2},1346:{items:3},1451:{items:4}}}),$(".prv__slider").length&&$(".prv__slider").owlCarousel({loop:!0,nav:!0,margin:0,responsiveClass:!0,navText:["",""],responsive:{0:{items:3,nav:!1},768:{items:3},993:{items:4},1346:{items:6},1451:{items:7},1700:{items:8}}}),$(".pid__slider").length){var t=$(".pid__slider");t.owlCarousel({loop:!1,nav:!1,margin:0,navText:["",""],mouseDrag:!1,touchDrag:!0,items:1}),$(".pid__thumbnails-item").click(function(e){var t=$(this).index();$(".pid__slider").trigger("to.owl.carousel",[t,200,!0]),e.preventDefault()})}$(".itmc__inc, .itmc__dec").click(function(){var e=$(this).siblings(".itmc__amount"),t=$(".gcb-item__price-total .digits,.gcb-total__price .digits"),s=parseInt(e.text()),i=$(this).parent().data("max-value");$(this).hasClass("itmc__inc")?s<i&&s++:s>1&&s--,e.text(s),console.log(s);var n=2455*s+"",o=n.slice(n.length-3,n.length),l=n.slice(0,n.length-3);t.text(n),console.log(o+"fd1"),console.log(l+"fd2"),t.text(l+" "+o),$(this).parents(".gcb-table").length&&$(this).parents(".gcb-table").trigger("cart:recount")}),$(".gcb-table").on("cart:recount",function(){console.log("cart:recount")})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbnNjcm9sbCIsImhlYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxpc3QiLCJwYWdlWU9mZnNldCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIiQiLCJmX2FjYyIsInRoaXMiLCJ0b2dnbGVDbGFzcyIsIm5vdCIsIm5leHQiLCJzbGlkZVVwIiwic2xpZGVUb2dnbGUiLCJtb3VzZXVwIiwiZSIsInJlIiwicnkiLCJpcyIsInRhcmdldCIsImhhcyIsImxlbmd0aCIsInJlbW92ZUNsYXNzIiwicmkiLCJybyIsImNsaWNrIiwicHJldmVudERlZmF1bHQiLCJvbiIsIm1vdXNlb3ZlciIsImZpbmQiLCJhZGRDbGFzcyIsIm1vdXNlb3V0IiwiY2l0aWVzUG9wdXAiLCJoYXNDbGFzcyIsInBhcmVudCIsInJlbW92ZUF0dHIiLCJjc3MiLCJzY3JvbGxUb3AiLCJjaGFuZ2UiLCJjaGlsZHJlbiIsImRpdiIsInNsaWRlciIsIm1pbiIsIm1heCIsInZhbHVlcyIsInJhbmdlIiwiYW5pbWF0ZSIsInNsaWRlIiwiZXZlbnQiLCJ1aSIsInZhbCIsImZvY3Vzb3V0IiwiaW5wdXRfbGVmdCIsInJlcGxhY2UiLCJvcHRfbGVmdCIsIndoZXJlX3JpZ2h0IiwiaW5wdXRfcmlnaHQiLCJvcHRfcmlnaHQiLCJ3aGVyZV9sZWZ0IiwiY29udGFpbmVyIiwiY2xvc2VzdCIsImVxIiwiaW5kZXgiLCJzaWJsaW5ncyIsInRpdGxlQ29sIiwicGFyZW50cyIsInRpdGxlQ29sSW5kZXgiLCJjb250ZW50Q29sIiwiZWFjaCIsInJTdGFyc0N1cnJlbnQiLCJyU3RhcnNUYXJnZXQiLCJyU3RhcnNQYXJlbnQiLCJyU3RhcnMiLCJob3ZlciIsImF0dHIiLCJvd2xDYXJvdXNlbCIsImxvb3AiLCJuYXYiLCJtYXJnaW4iLCJyZXNwb25zaXZlQ2xhc3MiLCJuYXZUZXh0IiwicmVzcG9uc2l2ZSIsIjAiLCJpdGVtcyIsIjEzNDYiLCIxNDUxIiwiNzY4IiwiOTkzIiwiMTcwMCIsInBpZE93bCIsIm1vdXNlRHJhZyIsInRvdWNoRHJhZyIsInRyaWdnZXIiLCJhbW91bnRCbG9jayIsInByaWNlQmxvY2siLCJhbW91bnQiLCJwYXJzZUludCIsInRleHQiLCJtYXhBbW91bnQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInByaWNlIiwicHJpY2UxIiwic2xpY2UiLCJwcmljZTIiXSwibWFwcGluZ3MiOiJBQUNBQSxPQUFPQyxTQUFXLFdBQ2QsR0FBSUMsR0FBU0MsU0FBU0MsY0FBYyxlQUNoQ0MsRUFBT0YsU0FBU0MsY0FBYyxZQUUvQkosUUFBT00sWUFBYyxJQUNwQkosRUFBT0ssVUFBVUMsSUFBSSxnQkFDckJILEVBQUtFLFVBQVVDLElBQUksa0JBRW5CTixFQUFPSyxVQUFVRSxPQUFPLGdCQUN4QkosRUFBS0UsVUFBVUUsT0FBTyxrQkFLOUJDLEVBQUUsV0FpQ0UsUUFBU0MsS0FDTEQsRUFBRUUsTUFBTUMsWUFBWSxVQUNwQkgsRUFBRSxZQUFZSSxJQUFJSixFQUFFRSxNQUFNRyxRQUFRQyxVQUNsQ04sRUFBRUUsTUFBTUcsT0FBT0UsY0EwUG5CLEdBM1JBUCxFQUFFUCxVQUFVZSxRQUFRLFNBQVVDLEdBQzFCLEdBQUlDLEdBQUtWLEVBQUUsaUJBQ1BXLEVBQUtYLEVBQUUsZUFDTlUsR0FBR0UsR0FBR0gsRUFBRUksU0FDc0IsSUFBNUJILEVBQUdJLElBQUlMLEVBQUVJLFFBQVFFLFNBQ3BCSixFQUFHTCxVQUNISSxFQUFHTSxZQUFZLG1CQUt2QmhCLEVBQUVQLFVBQVVlLFFBQVEsU0FBVUMsR0FDMUIsR0FBSVEsR0FBS2pCLEVBQUUsZ0JBQ1BrQixFQUFLbEIsRUFBRSxjQUNOaUIsR0FBR0wsR0FBR0gsRUFBRUksU0FDc0IsSUFBNUJJLEVBQUdILElBQUlMLEVBQUVJLFFBQVFFLFNBQ3BCRyxFQUFHWixVQUNIVyxFQUFHRCxZQUFZLG1CQUt2QmhCLEVBQUUsaUJBQWlCbUIsTUFBTSxTQUFTVixHQUM5QkEsRUFBRVcsZUFDRnBCLEVB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LEdBQVdHLEtBQUtLLEdBQ2hCRixRQUFRQyxJQUFJRSxFQUFPLE9BQ25CSCxRQUFRQyxJQUFJSSxFQUFPLE9BQ25CWCxFQUFXRyxLQUFLUSxFQUFTLElBQUtGLEdBQzNCakcsRUFBRUUsTUFBTXlELFFBQVEsY0FBYzVDLFFBQzdCZixFQUFFRSxNQUFNeUQsUUFBUSxjQUFjMkIsUUFBUSxrQkFrQjlDdEYsRUFBRSxjQUFjcUIsR0FBRyxlQUFnQixXQUMvQnlFLFFBQVFDLElBQUkiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g0J/Qu9Cw0LLQsNGO0YnQsNGPINGI0LDQv9C60LAg0Lgg0LHQvtC60L7QstC+0LUg0LzQtdC90Y5cclxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gc2hvd0hlYWRlcigpIHtcclxuICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZml4ZWQtaGVhZCcpO1xyXG4gICAgdmFyIGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKTtcclxuXHJcbiAgICBpZih3aW5kb3cucGFnZVlPZmZzZXQgPiA3NSl7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1maXhlZCcpO1xyXG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdC1wYWRkaW5nJyk7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci1maXhlZCcpO1xyXG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnbGlzdC1wYWRkaW5nJyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vINCh0LrRgNGL0YLQuNC1INC/0LXRgNCy0L7QuSDRgdC+0YDRgtC40YDQvtCy0LrQuCDQv9C+INC60LvQuNC60YMg0L3QsCDQu9GO0LHRg9GOINC+0LHQu9Cw0YHRgtGMXHJcbiAgICAkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKXtcclxuICAgICAgICB2YXIgcmUgPSAkKFwiLnNvcnRpbmctc2FsZVwiKTtcclxuICAgICAgICB2YXIgcnkgPSAkKFwiLmhpZGRlbi1zYWxlXCIpO1xyXG4gICAgICAgIGlmICghcmUuaXMoZS50YXJnZXQpXHJcbiAgICAgICAgICAgICYmIHJlLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJ5LnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgcmUucmVtb3ZlQ2xhc3MoXCJvcGVuLXNvcnRpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g0KHQutGA0YvRgtC40LUg0LLRgtC+0YDQvtC5INGB0L7RgNGC0LjRgNC+0LLQutC4INC/0L4g0LrQu9C40LrRgyDQvdCwINC70Y7QsdGD0Y4g0L7QsdC70LDRgdGC0YxcclxuICAgICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIHZhciByaSA9ICQoXCIuc29ydGluZy1zdW1cIik7XHJcbiAgICAgICAgdmFyIHJvID0gJChcIi5oaWRkZW4tc3VtXCIpO1xyXG4gICAgICAgIGlmICghcmkuaXMoZS50YXJnZXQpXHJcbiAgICAgICAgICAgICYmIHJpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJvLnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgcmkucmVtb3ZlQ2xhc3MoXCJvcGVuLXNvcnRpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy/QkNC60LrQvtGA0LTQuNC+0L0g0YTQuNC70YzRgtGA0L7QslxyXG4gICAgJCgnLmZpbHRlcl9fbmFtZScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQ7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYW5nbGUtZG93bicpO1xyXG4gICAgICAgICQodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL9CQ0LrQutC+0YDQtNC10L7QvSDQsdC+0LrQvtCy0L7Qs9C+INC80LXQvdGOXHJcbiAgICAkKCcubWFpbi1jYXRlZ29yeScpLm9uKCdjbGljaycsIGZfYWNjKTtcclxuICAgIGZ1bmN0aW9uIGZfYWNjKCl7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLmxldmVsLTEnKS5ub3QoJCh0aGlzKS5uZXh0KCkpLnNsaWRlVXAoKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyDQktGB0L/Qu9GL0LLQsNGO0YnQuNC1INC80LXQvdGOXHJcbiAgICAkKCcuY2F0YWxvZy1saXN0X19pdGVtcycpLm1vdXNlb3ZlcihmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykuZmluZCgnLmNhdGFsb2ctbGlzdF9faGlkZGVuLW1lbnUnKS5hZGRDbGFzcygnYWN0aXZlLWhpZGRlbi1tZW51Jyk7XHJcbiAgICAgICAgJCh0aGlzKS5tb3VzZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKCcuY2F0YWxvZy1saXN0X19oaWRkZW4tbWVudScpLnJlbW92ZUNsYXNzKCdhY3RpdmUtaGlkZGVuLW1lbnUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5jYXRhbG9nLWxpc3RfX2hpZGRlbi1tZW51JykubW91c2VvdmVyKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWhpZGRlbi1tZW51Jyk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vINCf0L7Rj9Cy0LvQtdC90LjQtSDQutC+0YDQt9C40L3Ri1xyXG4gICAgJCgnLnNob3AtY2FydCcpLm1vdXNlb3ZlcihmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5vcGVuZWQtc2MnKS5hZGRDbGFzcygnZGInKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5zaG9wLWNhcnQnKS5tb3VzZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5vcGVuZWQtc2MnKS5yZW1vdmVDbGFzcygnZGInKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5vcGVuZWQtc2MnKS5tb3VzZW92ZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcub3BlbmVkLXNjJykuYWRkQ2xhc3MoJ2RiJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcub3BlbmVkLXNjJykubW91c2VvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcub3BlbmVkLXNjJykucmVtb3ZlQ2xhc3MoJ2RiJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuc29ydGluZy1zYWxlJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuLXNvcnRpbmcnKTtcclxuICAgICAgICAkKCcuaGlkZGVuLXNhbGUnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNvcnRpbmctc3VtJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuLXNvcnRpbmcnKTtcclxuICAgICAgICAkKCcuaGlkZGVuLXN1bScpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcucmVnaW9uX19jaXR5JykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICB2YXIgY2l0aWVzUG9wdXAgPSAkKCcuY2l0eS13aW5kb3cnKTtcclxuICAgICAgICBpZiAoY2l0aWVzUG9wdXAuaGFzQ2xhc3MoJ2NpdHktb3BlbicpKSB7XHJcbiAgICAgICAgICAgIGNpdGllc1BvcHVwLnJlbW92ZUNsYXNzKCdjaXR5LW9wZW4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZighJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygncmVnaW9uJykpe1xyXG4gICAgICAgICAgICAgICAgY2l0aWVzUG9wdXAuY3NzKCd0b3AnLCAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAxMjApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2l0aWVzUG9wdXAucmVtb3ZlQXR0cihcInN0eWxlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNpdGllc1BvcHVwLmFkZENsYXNzKCdjaXR5LW9wZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnLm92ZXJsZXknKS50b2dnbGVDbGFzcygnb3ZlcmxleS1vcGVuJyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmNpdHktd2luZG93X19jbG9zZWQnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0O1xyXG4gICAgICAgICQoJy5jaXR5LXdpbmRvdycpLnRvZ2dsZUNsYXNzKCdjaXR5LW9wZW4nKTtcclxuICAgICAgICAkKCcub3ZlcmxleScpLnRvZ2dsZUNsYXNzKCdvdmVybGV5LW9wZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCU0LXQudGB0YLQstC40Y8g0KfQtdC60LHQvtC60YHQvtCyXHJcbiAgICAkKCcuY3VzdG9tLWNoZWNrYm94JykuY2hhbmdlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmN1c3RvbS1jaGVjaycpLnRvZ2dsZUNsYXNzKCdob2JhJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQn9C+0Y/QstC70LXQvdC40LUg0Lgg0LfQsNC60YDRi9GC0LjQtSDQsdC+0LrQvtCy0L7Qs9C+INC80LXQvdGOXHJcbiAgICAkKCcuYnVyZ2VyLW1lbnUtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICAkKCcubWFpbi1zaWRlYmFyJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZS1zaWRlYmFyJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCduby1zY3JvbGwnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5mYS10aW1lcycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQ7XHJcbiAgICAgICAgJCgnLm1haW4tc2lkZWJhcicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUtc2lkZWJhcicpO1xyXG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbm8tc2Nyb2xsJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdtYWluJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpeyAvLyDRgdC+0LHRi9GC0LjQtSDQutC70LjQutCwINC/0L4g0LLQtdCxLdC00L7QutGD0LzQtdC90YLRg1xyXG4gICAgICAgIHZhciBkaXYgPSAkKFwiLm1haW4tc2lkZWJhclwiKTsgLy8g0YLRg9GCINGD0LrQsNC30YvQstCw0LXQvCBJRCDRjdC70LXQvNC10L3RgtCwXHJcbiAgICAgICAgaWYgKCFkaXYuaXMoZS50YXJnZXQpIC8vINC10YHQu9C4INC60LvQuNC6INCx0YvQuyDQvdC1INC/0L4g0L3QsNGI0LXQvNGDINCx0LvQvtC60YNcclxuICAgICAgICAgICAgJiYgZGl2LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7IC8vINC4INC90LUg0L/QviDQtdCz0L4g0LTQvtGH0LXRgNC90LjQvCDRjdC70LXQvNC10L3RgtCw0LxcclxuICAgICAgICAgICAgZGl2LnJlbW92ZUNsYXNzKCdhY3RpdmUtc2lkZWJhcicpOyAvLyDRgdC60YDRi9Cy0LDQtdC8INC10LPQvlxyXG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCh0LvQsNC50LTQtdGAINGG0LXQvdGLXHJcbiAgICAkKFwiLnBvbHp1bm9rLTVcIikuc2xpZGVyKHtcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgbWF4OiAxNTAwMCxcclxuICAgICAgICB2YWx1ZXM6IFsxMDAwLCA4MDAwXSxcclxuICAgICAgICByYW5nZTogdHJ1ZSxcclxuICAgICAgICBhbmltYXRlOiBcImZhc3RcIixcclxuICAgICAgICBzbGlkZSA6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xyXG4gICAgICAgICAgICAkKFwiLnBvbHp1bm9rLWlucHV0LTUtbGVmdFwiKS52YWwodWkudmFsdWVzWyAwIF0pO1xyXG4gICAgICAgICAgICAkKFwiLnBvbHp1bm9rLWlucHV0LTUtcmlnaHRcIikudmFsKHVpLnZhbHVlc1sgMSBdKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoXCIucG9senVub2staW5wdXQtNS1sZWZ0XCIpLnZhbCgkKFwiLnBvbHp1bm9rLTVcIikuc2xpZGVyKFwidmFsdWVzXCIsIDApKTtcclxuICAgICQoXCIucG9senVub2staW5wdXQtNS1yaWdodFwiKS52YWwoJChcIi5wb2x6dW5vay01XCIpLnNsaWRlcihcInZhbHVlc1wiLCAxKSk7XHJcbiAgICAkKGRvY3VtZW50KS5mb2N1c291dChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCgnLnBvbHp1bm9rLTUnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGlucHV0X2xlZnQgPSAkKFwiLnBvbHp1bm9rLWlucHV0LTUtbGVmdFwiKS52YWwoKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpLFxyXG4gICAgICAgICAgICAgICAgb3B0X2xlZnQgPSAkKFwiLnBvbHp1bm9rLTVcIikuc2xpZGVyKFwib3B0aW9uXCIsIFwibWluXCIpLFxyXG4gICAgICAgICAgICAgICAgd2hlcmVfcmlnaHQgPSAkKFwiLnBvbHp1bm9rLTVcIikuc2xpZGVyKFwidmFsdWVzXCIsIDEpLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRfcmlnaHQgPSAkKFwiLnBvbHp1bm9rLWlucHV0LTUtcmlnaHRcIikudmFsKCkucmVwbGFjZSgvW14wLTldL2csICcnKSxcclxuICAgICAgICAgICAgICAgIG9wdF9yaWdodCA9ICQoXCIucG9senVub2stNVwiKS5zbGlkZXIoXCJvcHRpb25cIiwgXCJtYXhcIiksXHJcbiAgICAgICAgICAgICAgICB3aGVyZV9sZWZ0ID0gJChcIi5wb2x6dW5vay01XCIpLnNsaWRlcihcInZhbHVlc1wiLCAwKTtcclxuICAgICAgICAgICAgaWYgKGlucHV0X2xlZnQgPiB3aGVyZV9yaWdodCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRfbGVmdCA9IHdoZXJlX3JpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dF9sZWZ0IDwgb3B0X2xlZnQpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0X2xlZnQgPSBvcHRfbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXRfbGVmdCA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dF9sZWZ0ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXRfcmlnaHQgPCB3aGVyZV9sZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dF9yaWdodCA9IHdoZXJlX2xlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlucHV0X3JpZ2h0ID4gb3B0X3JpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dF9yaWdodCA9IG9wdF9yaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXRfcmlnaHQgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRfcmlnaHQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoXCIucG9senVub2staW5wdXQtNS1sZWZ0XCIpLnZhbChpbnB1dF9sZWZ0KTtcclxuICAgICAgICAgICAgJChcIi5wb2x6dW5vay1pbnB1dC01LXJpZ2h0XCIpLnZhbChpbnB1dF9yaWdodCk7XHJcbiAgICAgICAgICAgICQoXCIucG9senVub2stNVwiKS5zbGlkZXIoIFwidmFsdWVzXCIsIFsgaW5wdXRfbGVmdCwgaW5wdXRfcmlnaHQgXSApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCh0L/QuNGB0L7QuiDRgtC10LvQtdGE0L7QvdC+0LIg0L3QsCDQvNC+0LEuINGD0YHRgtGA0L7QudGB0YLQstCw0YVcclxuICAgICQoJy5tb2JpbGUtcGhvbmVzLWljb24nKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0O1xyXG4gICAgICAgICQoJy5tb2JpbGUtcGhvbmVzLWhpZGRlbicpLnRvZ2dsZUNsYXNzKCdtb2JpbGUtcGhvbmVzLWhpZGRlbi1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gJChcIi5tb2JpbGUtcGhvbmVzLWhpZGRlblwiKTtcclxuICAgICAgICBpZiAoY29udGFpbmVyLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNsYXNzKCdtb2JpbGUtcGhvbmVzLWhpZGRlbi1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQkNC60YLQuNCy0L3QvtGB0YLRjCDQuNC60L7QvdC60Lgg0Log0YHRgNCw0LLQvdC10L3QuNGOXHJcbiAgICAkKCcucHJvZHVjdHMtaWNvbnNfX2xpc3QnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdwcm9kdWN0cy1pY29uc19fbGlzdC1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCQ0LrRgtC40LLQvdC+0YHRgtGMINC40LrQvtC90LrQuCDQsiDQuNC30LHRgNCw0L3QvdC+0LVcclxuICAgICQoJy5wcm9kdWN0cy1pY29uc19faGVhcnQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdwcm9kdWN0cy1pY29uc19faGVhcnQtYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQodC80LXQvdCwINGE0L7RgtC+0LPRgNCw0YTQuNC4INC4INC/0L7Rj9Cy0LvQtdC90LjQtSDQvtCx0LLQvtC00LrQuCDRgyDRhtCy0LXRgtCwXHJcbiAgICAkKCcuY29sb3JzLXBpYycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5wcm9kdWN0cy13cmFwJykuZmluZCgnLnByb2R1Y3QtaW1nJykucmVtb3ZlQ2xhc3MoXCJjaC1pbWdcIikuZXEoJCh0aGlzKS5pbmRleCgpKS5hZGRDbGFzcyhcImNoLWltZ1wiKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5wcm9kdWN0cy13cmFwJykuZmluZCgnLmNvbG9ycy1waWMnKS5yZW1vdmVDbGFzcyhcImNvbG9ycy1waWMtYWN0aXZlXCIpLmVxKCQodGhpcykuaW5kZXgoKSkuYWRkQ2xhc3MoXCJjb2xvcnMtcGljLWFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKCcucGlkX190aHVtYm5haWxzLW1vcmUnKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCcucGlkX190aHVtYm5haWxzJykuYWRkQ2xhc3MoJ3Nob3ctYWxsJyk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcucGNzX190aXRsZS1sYWJlbCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIHZhciB0aXRsZUNvbCA9ICQodGhpcykucGFyZW50cygnLnBjc19fdGl0bGUtY29sJyk7XHJcbiAgICAgICAgdmFyIHRpdGxlQ29sSW5kZXggPSB0aXRsZUNvbC5pbmRleCgpO1xyXG4gICAgICAgIHZhciBjb250ZW50Q29sID0gJCh0aGlzKS5wYXJlbnRzKCcucGNzX193cmFwJykuZmluZCgnLnBjc19fY29sJyk7XHJcbiAgICAgICAgdGl0bGVDb2wuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGNvbnRlbnRDb2wuZXEodGl0bGVDb2xJbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLnJhbmtpbmctc3RhcnMnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnanMtaW50ZXJhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICB2YXIgclN0YXJzUGFyZW50ID0gJCh0aGlzKSwgclN0YXJzID0gIHJTdGFyc1BhcmVudC5maW5kKCcucmFua2luZy1zdGFyc19faWNvbicpLCByU3RhcnNDdXJyZW50LCByU3RhcnNUYXJnZXQ7XHJcbiAgICAgICAgICAgIHJTdGFycy5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJTdGFyc0N1cnJlbnQgPSByU3RhcnNQYXJlbnQuYXR0cihcImRhdGEtcmF0aW5nXCIpIHx8IDA7XHJcbiAgICAgICAgICAgICAgICByU3RhcnNUYXJnZXQgPSAkKHRoaXMpLmluZGV4KCkrMTtcclxuICAgICAgICAgICAgICAgIHJTdGFyc1BhcmVudC5hdHRyKFwiZGF0YS1yYXRpbmdcIiwgXCJcIiArIHJTdGFyc1RhcmdldCkucmVtb3ZlQ2xhc3MoXCJjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJTdGFyc1BhcmVudC5oYXNDbGFzcyhcImNsaWNrZWRcIikgfHwgclN0YXJzUGFyZW50LmF0dHIoXCJkYXRhLXJhdGluZ1wiLCByU3RhcnNDdXJyZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJTdGFycy5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJTdGFyc1BhcmVudC5hdHRyKFwiZGF0YS1yYXRpbmdcIiwgXCJcIiArIHJTdGFyc1RhcmdldCkuYWRkQ2xhc3MoXCJjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmKCQoJy5wc2dfX3NsaWRlcicpLmxlbmd0aCl7XHJcbiAgICAgICAgJCgnLnBzZ19fc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICBsb29wOnRydWUsXHJcbiAgICAgICAgICAgIG5hdjp0cnVlLFxyXG4gICAgICAgICAgICBtYXJnaW46MCxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZUNsYXNzOnRydWUsXHJcbiAgICAgICAgICAgIG5hdlRleHQ6IFsnJywnJ10sXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6e1xyXG4gICAgICAgICAgICAgICAgMDp7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6MlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDEzNDY6e1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOjNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAxNDUxOntcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczo0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYoJCgnLnBydl9fc2xpZGVyJykubGVuZ3RoKXtcclxuICAgICAgICAkKCcucHJ2X19zbGlkZXInKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGxvb3A6dHJ1ZSxcclxuICAgICAgICAgICAgbmF2OnRydWUsXHJcbiAgICAgICAgICAgIG1hcmdpbjowLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlQ2xhc3M6dHJ1ZSxcclxuICAgICAgICAgICAgbmF2VGV4dDogWycnLCcnXSxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTp7XHJcbiAgICAgICAgICAgICAgICAwOntcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczozLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hdjpmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDc2ODp7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6M1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDk5Mzp7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6NFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDEzNDY6e1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOjZcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAxNDUxOntcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczo3XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgMTcwMDp7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6OFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZigkKCcucGlkX19zbGlkZXInKS5sZW5ndGgpe1xyXG4gICAgICAgIHZhciBwaWRPd2wgPSAkKCcucGlkX19zbGlkZXInKTtcclxuICAgICAgICBwaWRPd2wub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICBsb29wOmZhbHNlLFxyXG4gICAgICAgICAgICBuYXY6ZmFsc2UsXHJcbiAgICAgICAgICAgIG1hcmdpbjowLFxyXG4gICAgICAgICAgICBuYXZUZXh0OiBbJycsJyddLFxyXG4gICAgICAgICAgICBtb3VzZURyYWc6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b3VjaERyYWc6IHRydWUsXHJcbiAgICAgICAgICAgIGl0ZW1zOjEsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKCcucGlkX190aHVtYm5haWxzLWl0ZW0nKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xyXG4gICAgICAgICAgICAkKCcucGlkX19zbGlkZXInKS50cmlnZ2VyKCd0by5vd2wuY2Fyb3VzZWwnLCBbaW5kZXgsIDIwMCwgdHJ1ZV0pO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLml0bWNfX2luYywgLml0bWNfX2RlYycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGFtb3VudEJsb2NrID0gJCh0aGlzKS5zaWJsaW5ncygnLml0bWNfX2Ftb3VudCcpO1xyXG4gICAgICAgIHZhciBwcmljZUJsb2NrID0gJCgnLmdjYi1pdGVtX19wcmljZS10b3RhbCAuZGlnaXRzLC5nY2ItdG90YWxfX3ByaWNlIC5kaWdpdHMnKTtcclxuICAgICAgICB2YXIgYW1vdW50ID0gcGFyc2VJbnQoYW1vdW50QmxvY2sudGV4dCgpKTtcclxuICAgICAgICB2YXIgbWF4QW1vdW50ID0gJCh0aGlzKS5wYXJlbnQoKS5kYXRhKCdtYXgtdmFsdWUnKTtcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdpdG1jX19pbmMnKSl7XHJcbiAgICAgICAgICAgIGlmIChhbW91bnQgPCBtYXhBbW91bnQpIGFtb3VudCsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChhbW91bnQgPiAxKSBhbW91bnQtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYW1vdW50QmxvY2sudGV4dChhbW91bnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFtb3VudCk7XHJcbiAgICAgICAgdmFyIHByaWNlPWFtb3VudCoyNDU1K1wiXCI7XHJcblxyXG4gICAgICAgIHZhciBwcmljZTE9cHJpY2Uuc2xpY2UocHJpY2UubGVuZ3RoLTMsIHByaWNlLmxlbmd0aCk7XHJcbiAgICAgICAgdmFyIHByaWNlMj1wcmljZS5zbGljZSgwLCBwcmljZS5sZW5ndGgtMyk7XHJcbiAgICAgICAgcHJpY2VCbG9jay50ZXh0KHByaWNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcmljZTErXCJmZDFcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJpY2UyK1wiZmQyXCIpO1xyXG4gICAgICAgIHByaWNlQmxvY2sudGV4dChwcmljZTIgKyBcIiBcIiArcHJpY2UxKTtcclxuICAgICAgICBpZigkKHRoaXMpLnBhcmVudHMoJy5nY2ItdGFibGUnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuZ2NiLXRhYmxlJykudHJpZ2dlcignY2FydDpyZWNvdW50JylcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkR2FwVG9TdHJpbmcobnVtYmVyKXtcclxuICAgICAgICB2YXIgbnVtID0gbnVtYmVyLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIGdhcF9zaXplID0gMzsgLy9EZXNpcmVkIGRpc3RhbmNlIGJldHdlZW4gc3BhY2VzXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LCBudW0pXHJcbiAgICAgICAgd2hpbGUgKG51bS5sZW5ndGggPiAwKSAvLyBMb29wIHRocm91Z2ggc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBcIiBcIiArIG51bS5zdWJzdHJpbmcoMCxnYXBfc2l6ZSk7IC8vIEluc2VydCBzcGFjZSBjaGFyYWN0ZXJcclxuICAgICAgICAgICAgbnVtID0gbnVtLnN1YnN0cmluZyhnYXBfc2l6ZSk7ICAvLyBUcmltIFN0cmluZ1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgcmV0dXJuKHJlc3VsdClcclxuICAgIH1cclxuICAgICQoJy5nY2ItdGFibGUnKS5vbignY2FydDpyZWNvdW50JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjYXJ0OnJlY291bnQnKTtcclxuXHJcbiAgICAgICAgLyp2YXIgY2FydFJvdyA9ICQodGhpcykuZmluZCgnLmdjYi1pdGVtJyk7XHJcbiAgICAgICAgY2FydFJvdy5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBhbW91bnQgPSBwYXJzZUludCgkKHRoaXMpLmZpbmQoJy5pdG1jX19hbW91bnQnKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICB2YXIgc2luZ2xlUHJpY2UgPSBwYXJzZUludCgkKHRoaXMpLmZpbmQoJy5nY2ItaXRlbV9fcHJpY2UtcmVndWxhciAuZGlnaXRzJykudGV4dCgpLnJlcGxhY2UoL1xccy9nLCcnKSk7XHJcbiAgICAgICAgICAgIHZhciB0b3RhbFByaWNlID0gc2luZ2xlUHJpY2UgKiBhbW91bnQ7XHJcbiAgICAgICAgICAgIHZhciB0b3RhbFByaWNlR2FwID0gYWRkR2FwVG9TdHJpbmcodG90YWxQcmljZSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYWRkR2FwVG9TdHJpbmcodG90YWxQcmljZSkpO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICB9KTtcclxuXHJcbn0pOyJdfQ==
