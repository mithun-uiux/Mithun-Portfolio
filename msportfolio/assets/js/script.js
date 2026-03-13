// Header elements animation
gsap.from("header", { y: -100, opacity: 0, duration: 1 });

// Nav links
gsap.from(".nav-item", {
  opacity: 0,
  y: -20,
  duration: 0.5,
  stagger: 0.2,
  delay: 0.5,
});

// Social icons
gsap.from(".social-icon", {
  opacity: 0,
  y: -20,
  duration: 0.6,
  stagger: 0.15,
  delay: 1,
});

// Info section staggered
gsap.from(".info-section p", {
  opacity: 0,
  x: -50,
  duration: 1,
  stagger: 0.2,
  delay: 1.2,
});

// Buttons
gsap.from(".btns button", {
  opacity: 0,
  scale: 0.8,
  duration: 0.6,
  stagger: 0.2,
  delay: 2,
});

// Tools section
gsap.from(".tools .tool", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2,
  delay: 2.5,
  ease: "bounce.out",
});

// Animate about experience
gsap.from(".about-experience > div", {
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".about-experience",
    start: "top 80%",
  },
});

// Counter Animation Function
function animateCounter(target, endVal) {
  let obj = { val: 0 };
  gsap.to(obj, {
    val: endVal,
    duration: 2,
    ease: "power2.out",
    onUpdate: () => {
      target.textContent = `+${Math.floor(obj.val)}`;
    },
  });
}

// Start count when section is in view
ScrollTrigger.create({
  trigger: ".about-experience",
  start: "top 80%",
  once: true,
  onEnter: () => {
    animateCounter(document.querySelector(".years .number"), 3);
    animateCounter(document.querySelector(".projects-completed .number"), 20);
    animateCounter(document.querySelector(".clients-satisfaction .number"), 50);
  },
});

// Animate the "What do I offer?" title
gsap.from(".offer-section .offer-ques", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".offer-section",
    start: "top 80%",
  },
});

// Animate the paragraph below
gsap.from(".offer-section .offer-ans", {
  y: 20,
  opacity: 0,
  duration: 0.6,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".offer-section",
    start: "top 80%",
  },
});

// Animate the Get Quote button
gsap.from(".get-quote-btn", {
  scale: 0.8,
  opacity: 0,
  duration: 0.6,
  delay: 0.4,
  scrollTrigger: {
    trigger: ".offer-section",
    start: "top 80%",
  },
});

// User Interface Designer Animation
gsap.from(".user-designer h1", {
  opacity: 0,
  scale: 0.9,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".user-designer",
    start: "top 80%",
  },
});

// Get in Touch Section Animations
gsap.from(".contact-info h2", {
  opacity: 0,
  y: 30,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".get-in-touch-section",
    start: "top 80%",
  },
});

gsap.from(".contact-info p", {
  opacity: 0,
  y: 20,
  duration: 0.6,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".get-in-touch-section",
    start: "top 80%",
  },
});

gsap.from(".contact-item", {
  opacity: 0,
  x: -30,
  duration: 0.6,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".contact-details",
    start: "top 80%",
  },
});

gsap.from(".contact-form h3", {
  opacity: 0,
  y: 30,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 80%",
  },
});

gsap.from(".form-group", {
  opacity: 0,
  y: 20,
  duration: 0.6,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 80%",
  },
});

gsap.from(".contact-form button", {
  opacity: 0,
  scale: 0.8,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 80%",
  },
});

// Footer (Mithun Sharma Design) Animation
gsap.from(".user-designer-last h1", {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".user-designer-last",
    start: "top 80%",
  },
});

document
  .querySelector(".answer-section")
  .addEventListener("mouseenter", function (dets) {
    gsap.to(".answer-section-video-cont", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
      top: dets.clientY - 100 + "px",
      left: dets.clientX - 100 + "px",
    });
  });

document
  .querySelector(".answer-section")
  .addEventListener("mouseleave", function () {
    gsap.to(".answer-section-video-cont", {
      opacity: 0,
      scale: 0,
      duration: 0.2,
      ease: "power2.out",
      top: "20px",
      left: "20px",
    });
  });

  