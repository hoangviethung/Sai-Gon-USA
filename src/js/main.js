// Import js
import Loading from './loading';
import {
	Tab
} from "./tab";
import GGMapInit from "./map";
import Mapping from "./mapping";

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
		Array.from(document.querySelectorAll('.header-navigation .nav-item')).forEach(item => {
			item.classList.remove('active');
		})
	});
	overlay.addEventListener('click', () => {
		headerMobile.classList.remove('active');
		overlay.classList.remove('active');
		bodyHtml.removeAttribute('style');
		Array.from(document.querySelectorAll('.header-navigation .nav-item')).forEach(item => {
			item.classList.remove('active');
		})
	});
}

const activeSearchDesktop = () => {
	const headerSearchToggle = document.querySelector('header .header-search .icon');
	headerSearchToggle.addEventListener('click', () => {
		headerSearchToggle.classList.toggle('active');
		headerSearchToggle.nextElementSibling.classList.toggle('active');
	})
}

const activeSubMenuHeader = () => {
	Array.from(document.querySelectorAll('.nav-item .nav-sub-toggle')).forEach((item, firstIndex) => {
		item.addEventListener('click', () => {
			if (!item.parentNode.classList.contains('active')) {
				Array.from(document.querySelectorAll('.header-navigation .nav-item')).forEach((item, secondIndex) => {
					item.classList.remove('active');
				})
			}
			item.parentNode.classList.toggle('active');
		})
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
		speed: 1500,
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
		loop: true,
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
	$('[data-fancybox]').not('[data-src="#courses"]').fancybox({
		hash: false,
		toolbar: false,
		thumbs: {
			autoStart: true
		},
		baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' +
			'<div class="fancybox-bg"></div>' +
			'<div class="fancybox-inner">' +
			'<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
			'<div class="fancybox-toolbar">{{buttons}}</div>' +
			'<div class="fancybox-stage"><div class="fancybox-navigation">{{arrows}}</div></div>' +
			'<div class="fancybox-caption"><div class=""fancybox-caption__body"></div></div>' +
			'</div>' +
			'</div>',
	})
	$('.gallery-image-list .gallery-item').on('click', function(e) {
		e.preventDefault();
		$(this).siblings('.d-none').find('a').eq(0).trigger('click');
	})
}


const customFancyboxCourse = () => {
	var dataCourse;
	$('[data-src="#courses"]').on('click', function() {
		dataCourse = $(this).data().course
	})

	const bfShow = () => {
		if (dataCourse) {
			$('#courses').find('select').val(dataCourse)
		} else {
			$('#courses').find('select').val('default')
		}
	}

	$('[data-src="#courses"]').fancybox({
		hash: false,
		closeExisting: true,
		beforeShow: bfShow,
	})
}
const QA = () => {
	Array.from(document.querySelectorAll('.qa .qa-item .question')).forEach((item, index) => {
		item.addEventListener('click', () => {
			item.parentNode.classList.toggle('active');
			Array.from(document.querySelectorAll('.qa .qa-item .question')).forEach((item, index2) => {
				if (index2 !== index) {
					item.parentNode.classList.remove('active');
				}
			})
		});
	})
}

const learningCornerTab = () => {
	return new Tab('.learning-corner .tab-container')
}

const studentSlider = () => {

	$('body').on('click', '.vertical [data-target]', function() {
		let target = $(this).attr('data-target');
		$(this).parents('.tab-content').find(' [data-target]').removeClass('thumb-active');
		$(this).addClass('thumb-active');
		$(this).parents('.tab-content').find('.horizontal [data-target]').hide();
		$(`.horizontal [data-target=${target}]`).fadeIn(350);
	})
	$('[tab-id="corner-1"] .vertical [data-target]').eq(0).trigger('click');
	$('[tab-id="corner-2"] .vertical [data-target]').eq(0).trigger('click');
	$('[tab-id="corner-3"] .vertical [data-target]').eq(0).trigger('click');

	new Swiper('[tab-id="corner-1"] .swiper-container', {
		slidesPerView: 4,
		direction: 'vertical',
		spaceBetween: 20,
		observer: true,
		observeParents: true,
		loop: true,
		pagination: {
			el: '[tab-id="corner-1"] .swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			1025: {
				direction: 'horizontal'
			},
			768: {
				slidesPerView: 3,
				direction: 'horizontal'
			},
			576: {
				slidesPerView: 2,
				direction: 'horizontal'
			}
		}
	});

	new Swiper('[tab-id="corner-2"] .swiper-container', {
		slidesPerView: 4,
		direction: 'vertical',
		spaceBetween: 20,
		observer: true,
		observeParents: true,
		loop: true,
		pagination: {
			el: '[tab-id="corner-2"] .swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			1025: {
				direction: 'horizontal'
			},
			768: {
				slidesPerView: 3,
				direction: 'horizontal'
			},
			576: {
				slidesPerView: 2,
				direction: 'horizontal'
			}
		}
	});

	new Swiper('[tab-id="corner-3"] .swiper-container', {
		slidesPerView: 4,
		direction: 'vertical',
		spaceBetween: 20,
		observer: true,
		loop: true,
		observeParents: true,
		pagination: {
			el: '[tab-id="corner-3"] .swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			1025: {
				direction: 'horizontal'
			},
			768: {
				slidesPerView: 3,
				direction: 'horizontal'
			},
			576: {
				slidesPerView: 2,
				direction: 'horizontal'
			}
		}
	});
}


const WoWJs = () => {
	return new WOW({
		offset: 150,
		mobile: false,
	}).init();
}

const moveLanguage = () => {
	return new Mapping('header .header-language', {
		mobileNode: 'header .header-search',
		mobileMethod: 'insertAfter',
		desktopNode: 'header .header-hotline',
		desktopMethod: 'insertAfter',
	})
}

// Execute functions when document ready here
document.addEventListener('DOMContentLoaded', () => {
	moveLanguage();
	GGMapInit();
	checkScrolled();
	activeHeaderMobile();
	activeSearchDesktop();
	activeSubMenuHeader();
	setPaddingDangKyHocThu();
	//
	homeBanner();
	staffSlider();
	differencesSlider();
	certificateSlider();
	fancyboxGallery();
	customFancyboxCourse();
	QA();
	learningCornerTab();
	studentSlider();

	Loading();
	WoWJs();
});

window.addEventListener('scroll', () => {
	checkScrolled();
})
window.addEventListener('resize', () => {
	setPaddingDangKyHocThu();
})