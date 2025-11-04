// var menu = document.querySelector(".nav-part2")
// let tl;
// menu.addEventListener('mouseenter',()=>{

//    tl = gsap.timeline();
//   tl.to("#nav-bottom",{
//     height:"22vh",
//      duration: 0.4,         // smooth height expansion
//     ease: "power2.out"
//   })

//  tl.to(".nav-part2 h5 ",{
//    opacity:1,
//    y:-25,
//   stagger:{
//     amount:0.6
//   },duration:0.6

//  })

// })

// menu.addEventListener('mouseleave',()=>{

//    if (tl) tl.kill();
//  tl = gsap.timeline();

//     tl.to(".nav-part2 h5",{
//     opacity:0,
//      y: 0,
//      duration: 0.1,         // smooth height expansion
//     ease: "power2.out"
//  })

//   tl.to("#nav-bottom",{
//     height:"0vh",
//      duration: 0.4,         // smooth height expansion
//     ease: "power2.out"
//   })

// })

// var menu = document.querySelector(".nav-part2")

// menu.addEventListener('mouseenter',()=>{

//    let tl = gsap.timeline();
//   tl.to("#nav-bottom",{
//     height:"22vh",
//      duration: 0.4,
//     ease: "power2.out"
//   })
// tl.to(".nav-part2 h5 ",{
//    display:"block",
//     y:-25,
//     opacity:1,
//      stagger:{
//     amount:0.6
//   },duration:0.8})
//  })

// menu.addEventListener('mouseleave',()=>{

//  let tl = gsap.timeline();

//     tl.to(".nav-part2 h5",{

//      y: 0,
//      opacity:0,
//     stagger:{
//       amount:0.3
//     },duration:0.4,

//  })

//    tl.to(".nav-part2 h5",{   display:"none",})
//   tl.to("#nav-bottom",{
//     height:"0vh",
//      duration: 0.4,
//     ease: "power2.out"
//   })

// },"-=0.2")

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


function video_animation(){

  const play = document.querySelector(".icon")
const video = document.querySelector("#page3 video");
play.addEventListener('click',()=>{
    gsap.to('#page3 video',{
         
         transform:"scaleX(1) scaleY(1)",
         opacity:1,
         borderRadius:0
     }) 
     
     video.play();
     
})

video.addEventListener('click',()=>{
  video.pause()
   gsap.to('#page3 video',{
         
         transform:"scaleX(0.7) scaleY(0)",
         opacity:0,
         borderRadius:30
     }) 
})
}


function page5_animation(){
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





page5_animation();
page2_animation();
nav_animation();
video_animation();



const foot = document.querySelector(".foot");
foot.addEventListener('mouseenter',()=>{
  gsap.to(".foot h4",{
 y:-14,
 stagger:0.6,
 ease:"power2.inOut"
})
})
foot.addEventListener('mouseleave',()=>{
  gsap.to(".foot h4",{
 y:0,
 duration:0.5,
 stagger:0.6,
 ease:"power2.inOut"
})
})
