// @import File Here !!!
import map from "./map";

// SLIDER
const homeBanner = () => {
	return new Swiper('.home-banner .swiper-container', {
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		centeredSlides: true,
		speed: 1000,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		breakpoints: {},
		navigation: {
			nextEl: '.home-banner .swiper-button-next',
			prevEl: '.home-banner .swiper-button-prev',
		},
	})
}

// HEADER
const activeHeader = () => {

	let heightHeader = document.querySelector('header').offsetHeight;

	if (window.scrollY > heightHeader) {
		document.querySelector('header').classList.add('active');
	} else {
		document.querySelector('header').classList.remove('active');
	}
}

// CONTROL SVG
const fillColorSVG = () => {
	jQuery('img.svg').each(function() {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');
	});
}

// SHOW BUTTON BACK TO TOP
const showBackToTop = () => {
	let currentScroll = document.querySelector('body').clientHeight - (window.innerHeight + 200);
	if (window.scrollY >= currentScroll) {
		document.getElementById('back-to-top').style.display = 'flex';
		setTimeout(() => {
			document.getElementById('back-to-top').classList.add('show');
		}, 0);
	} else {
		document.getElementById('back-to-top').style.display = 'none';
		document.getElementById('back-to-top').classList.remove('show');
	}
}

// CLICK GO TOP
const clickGoTop = () => {
	let goTopButton = document.getElementById('back-to-top')
	goTopButton.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	})
}

// CHẠY KHI ĐÃ LOAD PAGE XONG
document.addEventListener("DOMContentLoaded", () => {
	new WOW().init();
	// GOOGLE MAP
	map();
	// SLIDER
	homeBanner();
	// CHANE COLOR SVG
	fillColorSVG();
	// BACK TO TOP
	clickGoTop();
})

// CHẠY KHI WINDOWN SCROLL
window.addEventListener('scroll', () => {
	// HEADER
	activeHeader();
	// BACK TO TOP
	showBackToTop();
})