$(document).foundation();

//swipers

//header from slava
const headerDropdownBtns = document.querySelectorAll(
  ".js-header-dropdown__btn"
);
const headerDropdownWrapper = document.querySelector(
  ".l-header_wrapper"
);
const headerDropdownContent = document.querySelectorAll(
  ".js-header-dropdown__content"
);
const headerDropdownContentItem = document.querySelectorAll(
  ".l-header-dropdown__container"
);
const header = document.querySelector(".header");
const headerIcons = document.querySelectorAll(".js-icons");

headerDropdownBtns.forEach((el) => {
  el.addEventListener("mouseenter", openDropdown);
});

headerDropdownContent.forEach((el) => {
  el.addEventListener("mouseleave", closeDropdown);
});

// headerDropdownContent.addEventListener('mouseleave', closeDropdown);

function openDropdown(el) {
  let btnTarget = el.currentTarget;
  let tab = btnTarget.dataset.dropdown;

  $('.hystmodal__shadow').css('opacity', '.6');

  // deleted orange border
  headerDropdownBtns.forEach((el) => {
    el.classList.remove("active");
  });
  headerDropdownContentItem.forEach((el) => {
    el.classList.remove("active");
  });

  if (btnTarget.classList.contains("active")) {
    btnTarget.classList.remove("active");
  } else {
    btnTarget.classList.add("active");
  }

  document.querySelector("#" + tab).classList.add("active");

  headerDropdownContent.forEach((el) => {
    el.classList.add("active");
  });
  // headerDropdownContent.classList.add("active");

  header.classList.add("active-header");

  if (btnTarget.offsetParent.classList.contains("active-header")) {
    headerIcons.forEach((el) => {});
    document.querySelector(".l-header_logo").children[0].children[0].src =
      "/local/templates/alrosa/dist/img/sprite.svg#css--logo-bl";
    document.querySelector(".search-icon").src =
      "/local/templates/alrosa/dist/img/sprite.svg#css--search-bl";
    btnTarget.classList.add("active");
  } else {

  }
}

function closeDropdown(el) {
  let relatedTarget = el.relatedTarget;
  
  if (relatedTarget == header || relatedTarget == headerDropdownWrapper) {
    return;
  }
  $('.hystmodal__shadow').css('opacity', '0');
  header.classList.remove("active-header");
  // headerDropdownContent.classList.remove("active");
  headerDropdownContent.forEach((el) => {
    el.classList.remove("active");
  });
  headerDropdownContentItem.forEach((el) => {
    el.classList.remove("active");
  });
  headerDropdownBtns.forEach((el) => {
    el.classList.remove("active");
  });
  if (header.classList.contains("header_white")) {
    document.querySelector(".l-header_logo").children[0].children[0].src =
      "/local/templates/alrosa/dist/img/sprite.svg#css--logo-wh";
    document.querySelector(".search-icon").src =
      "/local/templates/alrosa/dist/img/sprite.svg#css--search";
  } else {
    document.querySelector(".l-header_logo").children[0].children[0].src =
      "/local/templates/alrosa/dist/img/sprite.svg#css--logo-bl";
    document.querySelector(".search-icon").src =
      "/local/templates/alrosa/dist/img/sprite.svg#css--search-bl";
  }
}

document.querySelectorAll(".l-close-btn").forEach((el) => {
  el.addEventListener("click", function () {
    header.classList.remove("active-header");
    // headerDropdownContent.classList.remove("active");
    headerDropdownContent.forEach((el) => {
      el.classList.remove("active");
    });
    headerDropdownContentItem.forEach((el) => {
      el.classList.remove("active");
    });
    headerDropdownBtns.forEach((el) => {
      el.classList.remove("active");
    });
    if (header.classList.contains("header_white")) {
      document.querySelector(".l-header_logo").children[0].children[0].src =
        "/local/templates/alrosa/dist/img/sprite.svg#css--logo-wh";
      document.querySelector(".search-icon").src =
        "/local/templates/alrosa/dist/img/sprite.svg#css--search";
    } else {
      document.querySelector(".l-header_logo").children[0].children[0].src =
        "/local/templates/alrosa/dist/img/sprite.svg#css--logo-bl";
      document.querySelector(".search-icon").src =
        "/local/templates/alrosa/dist/img/sprite.svg#css--search-bl";
    }
  });
});

window.addEventListener("click", (e) => {
  const target = e.target;
  if (
    !target.closest(".js-header-dropdown__content") &&
    !target.closest(".header")
  ) {
    document.querySelectorAll(".l-close-btn").forEach((el) => {
      el.click();
    });
    document.querySelector("#burger").classList.remove("active");
    tabletHeaderContent.classList.remove("active");
  }
});

document.querySelector("#burger").addEventListener("click", openTableMenu);
const tabletHeaderContent = document.querySelector(".table-header__container");

function openTableMenu(el) {
  header.classList.toggle("active-header");
  document.querySelector("#burger").classList.toggle("active");
  tabletHeaderContent.classList.toggle("active");
  if (header.classList.contains("active-header")) {
    document.querySelector(".l-header_logo").children[0].children[0].src =
      "/local/templates/alrosa/dist/img/sprite.svg#css--logo-bl";
  } else {
    document.querySelector(".l-header_logo").children[0].children[0].src =
      "/local/templates/alrosa/dist/img/sprite.svg#css--logo-wh";
  }
}



//main
const swiperBanner = new Swiper('.swiper-banner', {
  loop: true,
  speed: 800,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
});

//license
const swiperLicense = new Swiper('.swiper-license', {
  loop: true,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,
  slidesPerView: 6,
  spaceBetween: 20,
  speed: 400,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
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
  speed: 800,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
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
  speed: 800,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
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
  speed: 800,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
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

//modals
const modalCallMe = new HystModal({
  linkAttributeName: "data-hystmodal",
  // настройки (не обязательно), см. API
});
const modalVacancies = new HystModal({
  linkAttributeName: "data-hystmodal",
  // настройки (не обязательно), см. API
});

//customize input[type="file"]
$(".inputfile").on("change", function () {
  let file = this.files[0];
  $(this).next().html(file.name);
});