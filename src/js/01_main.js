$(document).foundation();

//swipers

//main
const swiperBanner = new Swiper('.swiper-banner', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//license
const swiperLicense = new Swiper('.swiper-license', {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    620: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1060: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

//newsdetail thumbs
var swiperThumbs = new Swiper(".swiper-thumbs", {
  spaceBetween: 20,
  slidesPerView: 8,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    425: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    620: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1060: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
  },
});
//newsdetail
const swiperNewsDetail = new Swiper('.swiper-newsdetail', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiperThumbs,
  },
});

//presentation thumbs
var swiperThumbs = new Swiper(".swiper-thumbs-presentation", {
  spaceBetween: 20,
  slidesPerView: 8,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    425: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    620: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1060: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
  },
});
//presentation
const swiperPresentation = new Swiper('.swiper-presentation', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiperThumbs,
  },
});

//pworks thumbs
var pworksThumbs = new Swiper(".swiper-thumbs-pworks", {
  spaceBetween: 20,
  slidesPerView: 6,
  watchSlidesProgress: true,
  breakpoints: {
    425: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    620: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1060: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});
//presentation
const swiperPworks = new Swiper('.swiper-pworks', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: pworksThumbs,
  },
});

// services open detail from asper
const servicesOpenDetailBtn = document.querySelectorAll(".l-services-open");

servicesOpenDetailBtn.forEach((el) => {
  el.addEventListener("click", openFadeDetail1);
});

function openFadeDetail1(el) {
  let btnTarget = el.currentTarget;
  btnTarget.parentElement.classList.toggle("active");
  btnTarget.parentElement.children[1].classList.toggle("active");
}

// vacancies open detail from asper
const vacanciesOpenDetailBtn = document.querySelectorAll(".l-vacancies--more");

vacanciesOpenDetailBtn.forEach((el) => {
  el.addEventListener("click", openFadeDetail2);
});

function openFadeDetail2(el) {
  let btnTarget = el.currentTarget;
  btnTarget.classList.toggle("active");
  btnTarget.parentElement.children[2].classList.toggle("active");
}

function openTestNav() {
  document.querySelector('.test--nav').classList.toggle('test-active');
  document.querySelector('.test--trigger').classList.toggle('test-active');
}