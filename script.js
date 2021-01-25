"use strict";
let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".header-menu");
let width = $(window).width();

let headerClass = document.querySelector(".header");
let header = document.getElementById('header').scrollHeight;
let headerListHeight = document.getElementById('headerList').scrollHeight;
let heightHeader = header - headerListHeight;

let headerMenuActive = document.querySelector(".header-menu.active");
let mainBlockSlider = document.querySelector(".block-main-slider");

if (width < 767.97) {
	document.querySelector('.header').style.height = heightHeader + 'px';
}

if ((iconMenu) && (width < 767.97) ) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
		document.querySelector('.header').style.height = heightHeader + 'px';
	});
};
$('.icon-menu').click(function(event) {
	if(($('.icon-menu').hasClass('active')) && (width < 767.97) ){
		document.querySelector('.header').style.height = header + 'px';
	}
});

console.log(header);
console.log(headerListHeight);
console.log(heightHeader);
console.log(`${header}` + 'px');

// ======================================================================================================
$(document).ready(function() {
	$('.main-slider').slick({
		arrows: true,/*Показ стрелок*/
		dots: true,/*Показ точек*/
		adaptiveHeight: true,/*Автоматическая адаптивная высота слайда(false) Чтобы работал .slick-track{align-items:flex-start;}*/
		slidesToShow: 1,/*Кол-во слайдов за один показ*/
		slidesToScroll: 1,/*Кол-во слайдов, которые будут пролистываться за 1 раз*/ 
		speed: 1000,/*Скорость пролистывания слайдов(300ms)*/
		easing:'linear',/*Тип анимации при смена слайда (look at atanimation)*/
		infinite: true,/*Будет ли слайдер бесконечным (true) Появляется slick-disabled*/
		initialSlide: 0,/*Стартовый слайд (0)*/
		autoplay: true,/*Будет ли проигрываться слайдер автоматически (false)*/
		autoplaySpeed: 5000,/*Время автопроигрывания слада (3000)*/
		pauseOnFocus: true,/*Пауза при фокусе (true)*/
		pauseOnHover: false,/*Пауза при наведении (true)*/
		pauseOnDotsHover: true,/*Пауза при наведении на кнопки*/
		draggable: true,/*Будет ли работать свайп на ПК (true)*/
		swipe: true,/*Будет ли работать свайп на телефонах (true)*/
		touchThreshold: 100,/*Часть которя нужна для свайпа (5)*/
		touchMove: true,/*Будет ли тянуться слайдер (true)*/
		waitForAnimate: true,/*Будет ли слайдер блокировать множество свайпов (true)*/
		centerMode: false,/*Будет ли главный слайд по центру (false) Рекомендуется {text-align: center;}*/
		variableWidth: false,/*Контент сам задает ширину (false)*/
		rows: 1,/*Сколько рядов будет показываться за раз (1)*/
		slidesPerRow: 1,/*Количество слайдов в ряду (1)*/
		vertical: false,/* (false) Если flex, то .slick-track{display: block} | Рекомендуется задать высоту в html*/
		varticalSwiping: false,/*Будет ли слайдер свайпать вверх или вниз (false)*/
		fade: false,/* !Показывает только 1 картинку и слады не листаются, а затемняются*/
		/*asNavFor: ".slider-big",*/    /*Связывает несколько слайдеров (При нажатии кнопки картинки меняются на этих слайдерах)*/
		responsive:[{
			breakpoint: 768,/*Брейкпоинт, на котором можно изменить каие-либо значения*/
			settings: {
				slidesToShow: 1,
			}
		},{
			// breakpoint: ;
			settings: {}
		}],

		// mobileFirst: false;
		// <img data-lazy="../img/" alt="">   Ленивая загрузка (html)
		/*appendArrows:$('.content'),*/       /*Выводит стрелки в блок с заданным классом*/
		/*appendDots:$('.content'), */        /*Выводит точки в блок с заданным классом*/
	});
}); 
// ======================================================================================
$(document).ready(function() {
	$('.gallery-slider').slick({
		arrows: true,/*Показ стрелок*/
		dots: false,/*Показ точек*/
		adaptiveHeight: true,/*Автоматическая адаптивная высота слайда(false) Чтобы работал .slick-track{align-items:flex-start;}*/
		slidesToShow: 2,/*Кол-во слайдов за один показ*/
		slidesToScroll: 1,/*Кол-во слайдов, которые будут пролистываться за 1 раз*/ 
		speed: 400,/*Скорость пролистывания слайдов(300ms)*/
		easing:'linear',/*Тип анимации при смена слайда (look at atanimation)*/
		infinite: true,/*Будет ли слайдер бесконечным (true) Появляется slick-disabled*/
		initialSlide: 0,/*Стартовый слайд (0)*/
		autoplay: false,/*Будет ли проигрываться слайдер автоматически (false)*/
		autoplaySpeed: 5000,/*Время автопроигрывания слада (3000)*/
		pauseOnFocus: true,/*Пауза при фокусе (true)*/
		pauseOnHover: false,/*Пауза при наведении (true)*/
		pauseOnDotsHover: true,/*Пауза при наведении на кнопки*/
		draggable: true,/*Будет ли работать свайп на ПК (true)*/
		swipe: true,/*Будет ли работать свайп на телефонах (true)*/
		touchThreshold: 100,/*Часть которя нужна для свайпа (5)*/
		touchMove: true,/*Будет ли тянуться слайдер (true)*/
		waitForAnimate: true,/*Будет ли слайдер блокировать множество свайпов (true)*/
		centerMode: false,/*Будет ли главный слайд по центру (false) Рекомендуется {text-align: center;}*/
		variableWidth: false,/*Контент сам задает ширину (false)*/
		rows: 1,/*Сколько рядов будет показываться за раз (1)*/
		slidesPerRow: 1,/*Количество слайдов в ряду (1)*/
		vertical: false,/* (false) Если flex, то .slick-track{display: block} | Рекомендуется задать высоту в html*/
		varticalSwiping: false,/*Будет ли слайдер свайпать вверх или вниз (false)*/
		fade: false,/* !Показывает только 1 картинку и слады не листаются, а затемняются*/
		/*asNavFor: ".slider-big",*/    /*Связывает несколько слайдеров (При нажатии кнопки картинки меняются на этих слайдерах)*/
		responsive:[{
			breakpoint: 767.97,/*Брейкпоинт, на котором можно изменить каие-либо значения*/
			settings: {
				slidesToShow: 1,
				adaptiveHeight: false,
			}
		},{
			// breakpoint: ;
			settings: {}
		}],

		// mobileFirst: false;
		// <img data-lazy="../img/" alt="">   Ленивая загрузка (html)
		appendArrows:$('.gallery-slider__block-dots'),       /*Выводит стрелки в блок с заданным классом*/
		/*appendDots:$('.content'), */        /*Выводит точки в блок с заданным классом*/
	});
});



$("#backTop").click(function() {
	$("html, body").animate({scrollTop: 0}, 1000);
});