
function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
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
      height: window.innerHeight
    };
  }
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
function loading_animation(){
    var tl = gsap.timeline();
       tl.from("#page1",{
       opacity:0,
       duration:0.2,
       delay:0.2
       })                                       
tl.from("#page1",{
 transform:"scaleX(0.7) scaleY(0) translateY(80%)",
 borderRadius:"30%",
 duration:2,
 ease:"expo.out"

})
tl.from("nav",{
  opacity:0,
  delay:0.2
})
tl.from("#page1 h1,$page1 p , #page1 div",{
  duration:0.5,
  opacity:0,
  stagger:0.2
})

}
function nav_animation() {
  const menu = document.querySelector(".nav-part2");

  const tl = gsap.timeline({ paused: true });

  // Hover open animation
  tl.to("#nav-bottom", {
    height: "22vh",
    duration: 0.6,
    ease: "power2.out",
  }).to(
    ".nav-part2 h5",
    {
      display: "block",
      opacity: 1,
      y: -25,
      stagger: { amount: 0.4 },
      duration: 0.5,
      ease: "power2.out",
    },
    "-=0.3"
  );

  // Events just control direction — no new timelines!
  menu.addEventListener("mouseenter", () => {
    tl.play();
  });

  menu.addEventListener("mouseleave", () => {
    tl.reverse();
  });
}
// page2 animation

function page2_animation() {
  var relemall = document.querySelectorAll(".right-elem");

  relemall.forEach((e) => {
    console.log(e.childNodes);

    e.addEventListener("mouseenter", () => {
      gsap.to(e.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });

    e.addEventListener("mouseleave", () => {
      gsap.to(e.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });

    e.addEventListener("mousemove", (dets) => {
      const rect = e.getBoundingClientRect();
      const img = e.querySelector("img");

      gsap.to(e.childNodes[3], {
        x: dets.clientX - rect.left - img.offsetWidth / 2,
        y: dets.clientY - rect.top - img.offsetHeight / 2,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
}

function video_animation() {
  const play = document.querySelector(".icon");
  const video = document.querySelector("#page3 video");
  play.addEventListener("click", () => {
    gsap.to("#page3 video", {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });

    video.play();
  });

  video.addEventListener("click", () => {
    video.pause();
    gsap.to("#page3 video", {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: 30,
    });
  });
}

function page5_animation() {
  const cont = document.querySelectorAll(".sec_right");

  cont.forEach((container) => {
    const vid = container.querySelector("video");
    const hovr = container.querySelector(".hovr");

    // 🟢 When mouse enters
    container.addEventListener("mouseenter", () => {
      gsap.to(vid, {
        duration: 0.5,
        ease: "power2.out",
        opacity: 1,
        onStart: () => {
          vid.play();
          vid.style.zIndex = 8;
          vid.style.position = "absolute";
          vid.style.objectFit = "cover";
        },
      });

      gsap.to(hovr, {
        position: "absolute",
        opacity: 1,
        ease: "power2.out",
        scale: 1,
        zIndex: 9,
      });
    });

    // 🟡 When mouse moves inside
    container.addEventListener("mousemove", (dets) => {
      const rect = container.getBoundingClientRect();
      gsap.to(hovr, {
        x: dets.clientX - rect.left - hovr.offsetWidth / 2,
        y: dets.clientY - rect.top - hovr.offsetHeight / 2,
        duration: 0.2,
        ease: "power2.out",
      });
    });

    // 🔴 When mouse leaves
    container.addEventListener("mouseleave", () => {
      gsap.to(vid, {
        duration: 0.5,
        ease: "power2.in",
        opacity: 0,
        onComplete: () => {
          vid.pause();
          vid.style.zIndex = 7;
        },
      });

      gsap.to(hovr, {
        position: "absolute",
        opacity: 0,
        ease: "power2.out",
        scale: 0,
        zIndex: 9,
      });
    });
  });
}

function hover_Animation() {
  const conts = document.querySelectorAll(".page7-elem");
  conts.forEach((c) => {
    const hovr = c.querySelector(".over");
    c.addEventListener("mouseenter", () => {
      gsap.to(hovr, {
        duration: 0.5,
        ease: "power2.inOut",
        y: 0,
        opacity: 1,
        width: "100%",
      });
    });
    c.addEventListener("mouseleave", () => {
      gsap.to(hovr, {
        duration: 0.5,
        ease: "power2.inOut",
        y: -100,
        opacity: 0,
        padding: "0vh",
      });
    });
  });
}
function scroll(){
  const all = document.querySelectorAll(".btm6-parts");
  all.forEach((e)=>{
gsap.from(e.querySelectorAll("h4"),{
  x:0,
  duration:1,
scrollTrigger:{
   trigger:e,
   scroller:".main",
   start:"top 80%",
   end:"top 10%",
   scrub:true
}
})
  })


}
locomotiveAnimation();
loading_animation()

page5_animation();
page2_animation();
nav_animation();
video_animation();
hover_Animation();
scroll();
// see watchreel animation
const foot  =document.querySelector(".foot");
const h6 = document.querySelectorAll(".foot H6");

foot.addEventListener("mouseenter", () => {

  gsap.to(h6, {
    y: -14,
    duration:0.1,
    stagger: 0.02,
    ease: "power2.inOut",
  });


});
foot.addEventListener("mouseleave", () => {

  gsap.to(h6, {
    y: 0,
    duration: 0.1,
    stagger: 0.02,
    ease: "power2.inOut",
  });


});





