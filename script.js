function loader() {
  var tl = gsap.timeline();

  // 1. "."이 통통 튀는 애니메이션
  tl.to(".loader #dot", {
    y: -70, // span 크기만큼 위로 (112px)
    duration: 0.3,
    ease: "power2.out",
  });
  tl.to(".loader #dot", {
    y: 140, // 바닥으로 내려옴
    duration: 0.3,
    ease: "power2.in",
  });
  // 2회차
  tl.to(".loader #dot", {
    y: -80,
    duration: 0.3,
    ease: "power2.out",
  });
  tl.to(".loader #dot", {
    y: 0,
    duration: 0.3,
    ease: "power2.in",
  });
  tl.to(".loader #dot", {
    y: 0,
    duration: 0.3,
    ease: "power2.in",
  });

  // 2. R이 왼쪽으로 이동하며 A 등장
  tl.to(".loader #r", {
    x: 0, // R을 왼쪽으로 이동
    duration: 0.5,
    ease: "none",
  });
  tl.to(
    ".loader #dot",
    {
      x: 0, // .을 오른쪽으로 이동
      duration: 0.5,
      ease: "none",
    },
    "<"
  );

  tl.to(".loader #a", {
    opacity: 1,
    duration: 0.5,
    ease: "none",
  });

  tl.to(
    ".loader #o",
    {
      opacity: 1,
      duration: 0.5,
      ease: "none",
    },
    "<"
  );

  tl.to(".loader", { duration: 0.5, opacity: 0, display: "none" });
  tl.to(".header", { duration: 0.5, opacity: 1, display: "flex" });
  tl.from(".page1 .inner-content span", {
    y: 60,
    duration: 0.5,
    delay: -0.3,
    stagger: 0.0,
  });
}

function crsrAnim(locoScroll) {
  const cursor = document.querySelector(".cursor");
  const body = document.body;

  body.addEventListener("mousemove", (e) => {
    const scrollY = locoScroll.scroll.instance.scroll.y || 0;
    gsap.to(cursor, { x: e.x + "px", y: e.y + "px" });
  });

  body.addEventListener("mouseenter", () => {
    gsap.to(cursor, { scale: 1, opacity: 1 });
  });

  body.addEventListener("mouseleave", () => {
    gsap.to(cursor, { scale: 0, opacity: 0 });
  });
}

function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".wrap"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".wrap", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".wrap").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  return locoScroll;
}

function visualAnim() {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".visual",
        start: "45% 40%",
        end: "100% 0%",
        scrub: 1,
        //markers:true
      },
    })
    .to(
      ".intro #C",
      { x: "100", y: "850", rotate: "40", ease: "none", duration: 5 },
      0.1
    )
    .to(
      ".intro #r",
      { x: "45", y: "620", rotate: "-50", ease: "none", duration: 4 },
      0.5
    )
    .to(
      ".intro #e",
      { x: "60", y: "650", rotate: "-50", ease: "none", duration: 4 },
      0.3
    )
    .to(
      ".intro #a",
      { x: "50", y: "730", rotate: "-30", ease: "none", duration: 3 },
      0.2
    )
    .to(
      ".intro #t",
      { x: "30", y: "590", rotate: "-30", ease: "none", duration: 6 },
      0
    )
    .to(
      ".intro #i",
      { x: "100", y: "750", rotate: "-80", ease: "none", duration: 3 },
      0.1
    )
    .to(
      ".intro #v",
      { x: "50", y: "790", rotate: "-50", ease: "none", duration: 2 },
      0.4
    )
    .to(
      ".intro #i2",
      { x: "10", y: "520", rotate: "-20", ease: "none", duration: 5 },
      0.5
    )
    .to(
      ".intro #t2",
      { x: "40", y: "590", rotate: "-70", ease: "none", duration: 4 },
      0.2
    )
    .to(
      ".intro #y",
      { x: "50", y: "750", rotate: "40", ease: "none", duration: 3 },
      0.3
    )
    .to(
      ".intro #i3",
      { x: "10", y: "580", rotate: "-20", ease: "none", duration: 5 },
      0.5
    )
    .to(
      ".intro #s",
      { x: "0", y: "630", rotate: "-80", ease: "none", duration: 4 },
      0.1
    )
    .to(
      ".intro #o",
      { x: "100", y: "640", rotate: "-50", ease: "none", duration: 3 },
      0.4
    )
    .to(
      ".intro #u",
      { x: "10", y: "570", rotate: "-20", ease: "none", duration: 3 },
      0.5
    )
    .to(
      ".intro #c",
      { x: "50", y: "650", rotate: "40", ease: "none", duration: 5 },
      0.1
    )
    .to(
      ".intro #f",
      { x: "60", y: "450", rotate: "-50", ease: "none", duration: 4 },
      0.3
    );
}

window.onload = function () {
  const locoScroll = loco();
  crsrAnim(locoScroll);
  loco();
  loader();
  visualAnim();
};

const leftImg = document.querySelector(".left-img");
const rightImg = document.querySelector(".right-img");

rightImg.addEventListener("mouseenter", () => {
  leftImg.classList.remove("active");
  rightImg.classList.add("active");
});

rightImg.addEventListener("mouseleave", () => {
  rightImg.classList.remove("active");
  leftImg.classList.add("active");
});

document.querySelector(".img-container").addEventListener("mouseleave", () => {
  rightImg.classList.remove("active");
  leftImg.classList.add("active");
});
