let lastScrollTop = 0;
const header = document.querySelector("header");
const toTop = document.querySelector(".to-top");
const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffsscet || document.documentElement.scrollTop;
  const heroSectionOffsetTop = heroSection.offsetTop;

  if (scrollTop > heroSectionOffsetTop) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

const introContainer = document.querySelector(".intro-1");
const intro1Logo = document.getElementById("intro-1-logo");
const banner1 = document.getElementById("banner-1");
const banner2 = document.getElementById("banner-2");
const banner3 = document.getElementById("banner-3");
const banner4 = document.getElementById("banner-4");

if (intro1Logo && banner1 && banner2 && banner3 && banner4) {
  const tl = gsap.timeline();

  tl.set([intro1Logo], {
    opacity: 100,
    translateY: -100,
  }).to([intro1Logo], {
    opacity: 0,
    translateY: 0,
    duration: 1,
    ease: "bounce.out",
  });

  tl.set([banner1, banner2, banner3, banner4], {
    yPercent: 0,
  }).to([banner1, banner2, banner3, banner4], {
    yPercent: 100,
    ease: "power4.inOut",
    duration: 0.5,
    stagger: 0.2,
    onComplete: () => {
      headerIn();
      heroIn();
      introEnd();
    },
  });
}

function introEnd() {
  if (introContainer) {
    const tl = gsap.timeline();

    tl.set([introContainer], {
      display: "flex",
    }).to([introContainer], {
      display: "none",
      duration: 0.1,
      ease: "power2.out",
    });
  }
}

function headerIn() {
  const logoNav = document.getElementById("logo-nav");
  const nav = document.getElementById("nav");
  const btnArea = document.getElementById("btn-area");
  if ((logoNav, nav, btnArea)) {
    const tl = gsap.timeline();

    tl.set([logoNav, nav, btnArea], {
      opacity: 0,
      x: -1000,
    }).to([logoNav, nav, btnArea], {
      opacity: 100,
      x: 0,
      ease: "power4.inOut",
      stagger: 0.2,
      duration: 0.5,
    });
  }
}

function heroIn() {
  const title1 = document.getElementById("title-1");
  const title2 = document.getElementById("title-2");
  const title3 = document.getElementById("title-3");
  const videoCard = document.getElementById("video-card");
  const heroDesc = document.getElementById("hero-desc");
  const heroImg = document.getElementById("hero-image");

  if (title1 && title2 && title3 && videoCard && heroDesc && heroImg) {
    const tl = gsap.timeline();

    tl.set([title1, title2, title3, videoCard, heroDesc], {
      opacity: 0,
      x: -1000,
    }).to([title1, title2, title3, videoCard, heroDesc], {
      opacity: 100,
      x: 0,
      ease: "power4.inOut",
      stagger: 0.3,
      duration: 1,
    });

    gsap.to("#hero-image", 1, {
      opacity: 100,
      translateX: 0,
      rotate: "360deg",
      delay: 1,
      ease: "power4.inOut",
    });
  }
}