
// console.log("drawsvg-working");

gsap.registerPlugin(DrawSVGPlugin);

var svgLineTimeLine = gsap.timeline({
});

svgLineTimeLine.from("#Path",{duration:2, drawSVG:"0%"}, "playsvg");


ScrollTrigger.create({
    animation: svgLineTimeLine,
    toggleActions: "play none complete none",
    trigger: "#section-2",
    start: "top 50%",
    //end: "bottom 40%",
    markers: true,
    // id: "card",
    scrub: 1
});

// svgLineTimeLine.from("#Path-2",{duration:1, drawSVG:"0%", opacity: 0}, "playsvg2")


// ScrollTrigger.create({
//     animation: svgLineTimeLine,
//     toggleActions: "play none none none",
//     trigger: "#Path-2",
//     start: "top 50%",
//     //end: "bottom 40%",
//     markers: true, 
//     // id: "card",
//     scrub: 1
// });