document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger,Observer)
  // gsap code here!
  gsap.to('.web-intro' , {
    autoAlpha: 1,
    duration: 1,
    scrollTrigger: {
      trigger: '.web-intro' ,
      start: 'top center' ,
      end: 'center top' ,
      scrub: 1,
    }
  })



  gsap.to('.horizontal-content' , {
    x: -896,
    duration: 2,
    scrollTrigger: {
      trigger: '.horizontal-content',
      start: 'bottom 65%' ,
      end: 'center 5%' ,
      pin: ".vfx-examples",
      markers: false,
      scrub: 1,
    }
  })

  gsap.to('.scroll-card-one' , {
    y: -384,
    duration: 2,
    scrollTrigger: {
      trigger: '.scroll-card-one',
      start: 'center 60%' ,
      end: 'top 25%' ,
      markers: false,
      scrub: 1,
    }
  })

  gsap.to('.scroll-card-two' , {
    y: -1152,
    duration: 2,
    scrollTrigger: {
      trigger: '.scroll-card-two',
      start: 'center 75%' ,
      end: 'top 30%' ,
      markers: false,
      scrub: 1,
    }
  })

  gsap.to('.scroll-card-three' , {
    y: -384,
    duration: 2,
    scrollTrigger: {
      trigger: '.scroll-card-three',
      start: 'center 60%' ,
      end: 'top 40%' ,
      markers: false,
      scrub: 1,
    }
  })

 });


 const sliderWidth = 720;
 const sliderMargin = 16;

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis({
  lerp: .075,
  wheelMultiplier: 0.4,
});

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

