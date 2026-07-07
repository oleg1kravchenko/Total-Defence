$(document).ready(function () {

	/*animate*/
	new WOW().init();


	//questions
	$(".item-question__head").click(function () {
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings(".item-question").removeClass("active");
		$(this).parent().siblings(".item-question").find(".item-question__content").slideUp(200);
	});

	//слайдер

	$('.slider-four').slick({
		arrows: false,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		prevArrow: '<div class="slick-prev slick-arrow"><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.slider-marquee').slick({
		arrows: false,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		variableWidth: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		speed: 22000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
		prevArrow: '<div class="slick-prev slick-arrow"><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><div/>',
	});


});


//animate js
(function ($) { $.fn.animated = function (inEffect, outEffect) { $(this).css("opacity", "0").addClass("animated").waypoint(function (dir) { if (dir === "down") { $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1") } else { $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1") } }, { offset: "80%" }).waypoint(function (dir) { if (dir === "down") { $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1") } else { $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1") } }, { offset: -$(window).height() }) } })(jQuery)