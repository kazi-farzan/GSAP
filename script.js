var tl = gsap.timeline();

gsap.from("#page1 #box", {
  rotate: 360,
  duration: 2,
  delay: 1,
});

gsap.from("#page2 #box", {
  rotate: 360,
  duration: 2,
  // scrollTrigger: "#page2 #box", //basic way to toggle scrollTrigger
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    markers: true, //shows where the the trigger is for the animation of this element
  },
});

gsap.from("#page3 #box", {
  rotate: 360,
  duration: 2,
  // scrollTrigger: "#page2 #box", //basic way to toggle scrollTrigger
  scrollTrigger: {
    trigger: "#page3 #box",
    scroller: "body",
    markers: true, //shows where the the trigger is for the animation of this element
    start: "top 70%",
    end: "top 40%",
    scrub: 1, //makes the animation happen the more we scroll
  },
});

gsap.from("#page4 #grid",{
  rotate: 720,  
  duration:2, 
  scrollTrigger:{
    trigger:"#page4 #grid",
    scroller: "body",
    markers:true,
    start: "top 70%",
    end: "top 40%",
    scrub: 2,
  }
});

gsap.to("#page4 #grid",{
  scale:2,
  yoyo:true,
  repeat:1,
  duration:2, 
  scrollTrigger:{
    trigger:"#page4 #grid",
    scroller: "body",
    markers:true,
    start: "top 70%",
    end: "top 40%",
    scrub: 2,
  }
});

gsap.from("#page4 #grid #box-small",{
  rotate: -720,
  duration:2, 
  scrollTrigger:{
    trigger:"#page4 #grid #box-small",
    scroller: "body",
    markers:true,
    start: "top 70%",
    end: "top 40%",
    scrub: 2.1,
  }
});


gsap.from("#page5 #box",{
  rotate: 180,
  duration:2,
  scrollTrigger:{
    trigger:"#page5 #box",
    scroller:"body",
    start: "top 10%",
    end: "top 80%",
    scrub: 2,

    pin: true,
    markers: true,
    
  }
});