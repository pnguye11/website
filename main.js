let controller;
let slideScrene;

function animateSlides() {
  //init controller
  controller = new ScrollMagic.Controller();

  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");

  ///loop over each slides
  sliders.forEach((slide) => {
    const revealImg = slide.querySelector(".reveal-img");
    const img = slide.querySelector("img");
    const revealText = slide.querySelector(".reveal-text");
    //Gsap
    gsap.to(revealImg, 1, { x: "100%" });

    const slideT1 = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    slideT1.fromTo(revealImg, { x: "0%" }, { x: "100%" });
    slideT1.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");
    slideT1.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.75");
    slideT1.fromTo(nav, { y: "-100%" }, { y: "0%" }, "-=0.5");
  });
}

animateSlides();
