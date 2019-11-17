// Import js
import Loading from './loading';
import {
	Tab
} from "./tab";

// Define functions

// => scripts header
const checkScrolled = () => {
	if (window.scrollY > 0) {
		document.querySelector('header').classList.add('scrolled')
	} else {
		document.querySelector('header').classList.remove('scrolled')
	}
}

const activeHeaderMobile = () => {
	const headerToggleBtn = document.querySelector('.bottom-header-mobile .header-toggle');
	const headerMobile = document.querySelector('header .bottom-header');
	const headerToggleOffBtn = document.querySelector('.bottom-header .toggle-off');
	const overlay = document.querySelector('header .overlay');
	const bodyHtml = document.querySelector('body');
	headerToggleBtn.addEventListener('click', () => {
		headerMobile.classList.add('active');
		overlay.classList.add('active');
		bodyHtml.style.overflow = 'hidden';
		bodyHtml.style.height = window.innerHeight + 'px'
	});
	headerToggleOffBtn.addEventListener('click', () => {
		headerMobile.classList.remove('active');
		overlay.classList.remove('active');
		bodyHtml.removeAttribute('style');
	});
	overlay.addEventListener('click', () => {
		headerMobile.classList.remove('active');
		overlay.classList.remove('active');
		bodyHtml.removeAttribute('style');
	});
}

const activeSearchDesktop = () => {
	const headerSearchToggle = document.querySelector('header .header-search .icon');
	headerSearchToggle.addEventListener('click', () => {
		headerSearchToggle.classList.toggle('active');
		headerSearchToggle.nextElementSibling.classList.toggle('active');
	})
}

const setPaddingDangKyHocThu = () => {
	const dangKyHocThu = document.querySelector('.trial-learning');
	if (dangKyHocThu && window.innerWidth > 1024) {
		const footer = document.querySelector('footer');
		const paddingNeeded = footer.offsetHeight;
		dangKyHocThu.style.paddingBottom = paddingNeeded + 'px';
	} else {
		dangKyHocThu.removeAttribute('style');
	}
}
// => script trang chủ
const homeBanner = () => {
	return new Swiper('.index-banner .swiper-container', {
		slidesPerView: 1,
		speed: 1000,
		simulateTouch: false,
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 4200,
			disableOnInteraction: false,
		},
		navigation: {
			prevEl: '.index-banner .swiper-prev',
			nextEl: '.index-banner .swiper-next'
		},
		pagination: {
			el: '.index-banner .swiper-pagination',
			type: 'bullets',
			clickable: true,
		}
	})
}

const staffSlider = () => {
	return new Swiper('.differences-1-slider-wrapper .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 45,
		autoplay: {
			delay: 4200,
			disableOnInteraction: false,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
				spaceBetween: 25,
			},
			769: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
		},
		navigation: {
			prevEl: '.differences-1-slider-wrapper .swiper-prev',
			nextEl: '.differences-1-slider-wrapper .swiper-next',
		}
	})
}

const differencesSlider = () => {
	return new Swiper('.differences-2 .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 20,
		speed: 1000,
		autoplay: {
			delay: 4200,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.differences-2 .swiper-pagination',
			clickable: true,
			type: 'bullets',
		}
	})
}

const certificateSlider = () => {
	const certificate1 = new Swiper('.certificate-1-slider-wrapper .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 20,
		speed: 1000,
		loop: true,
		autoplay: {
			delay: 4200,
			disableOnInteraction: false,
		},
		navigation: {
			prevEl: '.certificate-1-slider-wrapper .swiper-prev',
			nextEl: '.certificate-1-slider-wrapper .swiper-next',
		},
		breakpoints: {
			1025: {
				slidesPerView: 2
			},
			767: {
				slidesPerView: 1
			}
		}
	})
	const certificate2 = new Swiper('.certificate-2-slider-wrapper .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 20,
		speed: 1000,
		loop: true,
		autoplay: {
			delay: 4200,
			disableOnInteraction: false,
		},
		navigation: {
			prevEl: '.certificate-2-slider-wrapper .swiper-prev',
			nextEl: '.certificate-2-slider-wrapper .swiper-next',
		},
		breakpoints: {
			1025: {
				slidesPerView: 2
			},
			767: {
				slidesPerView: 1
			}
		}
	})
}

const fancyboxGallery = () => {
	$('.gallery-image-list .gallery-item .d-none a').fancybox({
		hash: false,
		thumbs: {
			autoStart: true
		}
	})
	$('.gallery-image-list .gallery-item').on('click', function(e) {
		e.preventDefault();
		$(this).siblings('.d-none').find('a').eq(0).trigger('click');
	})
}

// Execute functions when document ready here
document.addEventListener('DOMContentLoaded', () => {
	Loading();
	checkScrolled();
	activeHeaderMobile();
	activeSearchDesktop();
	setPaddingDangKyHocThu();
	//
	homeBanner();
	staffSlider();
	differencesSlider();
	certificateSlider();
	fancyboxGallery();
});

window.addEventListener('scroll', () => {
	checkScrolled();
})
window.addEventListener('resize', () => {
	setPaddingDangKyHocThu();
})