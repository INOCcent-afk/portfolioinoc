import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// Preloader
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.animation = "fade 0.8s ease-in-out forwards";
    loader.style.pointerEvents = "none";
  }, 1500);
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#content",
    start: "top  top",
    end: "+=1000",
    scrub: 1,
  },
});

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#project-jump",
    start: "center center",
    scrub: false,
  },
});

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".project-section-header-title",
    start: "center center",
  },
});

tl.to(".firstTextAni", 2, {
  x: 200,
})
  .to(
    ".secondTextAni",
    2,
    {
      x: -200,
    },
    "-=2"
  )
  .to(
    ".intro-section-bg",
    2,
    {
      y: -130,
    },
    "-=2"
  );

tl2
  .to(".project-section-header-title", 2, {
    y: -10,
    opacity: 1,
  })
  .to(
    ".project-section-header-sticker",
    2,
    {
      y: -10,
      opacity: 1,
    },
    "-=2"
  );

tl3.to(".project", 3, {
  opacity: 1,
  stagger: 0.2,
});
