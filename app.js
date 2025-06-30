function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 105,
    stagger: 0.2,
    duration: 0.5,
    delay: 0.5,
  });
  tl.from(".line1-counter", {
    opacity: 0,
    onStart: function () {
      var counter = document.querySelector("#count");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          counter.innerHTML = grow++;
        } else {
          counter.innerHTML = grow;
        }
      }, 20);
    },
  });
  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });
  tl.to(".loader", {
    opacity: 0,
    duration: 0.4,
    delay: 2,
  });
  tl.from(".page1", {
    y: 1600,
    opacity: 0,
    ease: "power2.out",
    duration: 0.8,
    delay: 0.2,
  });
  tl.from(".nav", {
    opacity: 0,
    ease: "power2.in"
  })
  tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
    y: 150,
    stagger: 0.1,
    ease: "power2.out"
  })
  tl.to(".loader", {
    display: "none",
  });
}

loadingAnimation();

function moveCursor() {
  document.addEventListener("mousemove", function(dets) {
    gsap.to(".cursor", {
      left: dets.x,
      top: dets.y,
    })
  })

  Shery.makeMagnet(".nav-part2 h4");
}

moveCursor()
