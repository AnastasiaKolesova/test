$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');  //! для юзабилити, для невозможности скролить страницу при открытом меню-бургер//
	});
});