var tl = gsap.timeline();

tl.from("#box1", {
  y: 25,
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: 1, //Stagger will display every element with box property one after the another after "1" second. -1 will start the process from the last element with the tag.

  repeat: 1, //this animation will run twice, one base one repeat.
  yoyo: true, //yoyo needs repeat by atleast 1 to work.
});

tl.from("#box2", {
  x: 25,
  opacity: 0,
  duration: 1,
  repeat: 2,
  yoyo: true,
});

gsap.to("#box3", {
  y: 25,
  opacity: 0,
  duration: 1,
  delay: 3,
  stagger: 1,

  repeat: 1,
  yoyo: true,
});
