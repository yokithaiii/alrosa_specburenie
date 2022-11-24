$(document).foundation();

//swipers

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
});

// services open detail from asper

const servicesOpenDetailBtn = document.querySelectorAll(".l-services-open");

servicesOpenDetailBtn.forEach((el) => {
  el.addEventListener("click", openFadeDetail);
});

function openFadeDetail(el) {
  let btnTarget = el.currentTarget;
  btnTarget.parentElement.classList.toggle("active");
  btnTarget.parentElement.children[1].classList.toggle("active");
}
