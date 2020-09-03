gsap.registerPlugin(ScrollTrigger);

/* ========================
        SECTION 1
======================== */

/* ========================
      Text Animation
======================== */

var sec1TextTimeline = gsap.timeline({});

sec1TextTimeline.from("#sec-1-text",{duration:2, alpha:0, yPercent: 30}, "start");

ScrollTrigger.create({
    animation: sec1TextTimeline,
    // markers: true,
    trigger: "#section-1-content",
    toggleActions: "restart none none none",
    //id: "logos",
    start: "top 70%",
    end: "bottom 70%",
    // scrub: true,
    scrub: 1
})

/* ========================
      Arrow Animation
======================== */

gsap.from("#arrow-1", {duration:2, alpha:0, yPercent:-100,

    scrollTrigger:{
        trigger: "#arrow-1",
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "restart none none none"
        // markers: true
    }})

/* ========================
        SECTION 2
======================== */

/* ========================
      Text Animation
======================== */

var sec2Text1Timeline = gsap.timeline({});

sec2Text1Timeline.from("#text-1",{duration:2, alpha:0, xPercent: -30}, "start-2");

ScrollTrigger.create({
    animation: sec2Text1Timeline,
    // markers: true,
    trigger: "#text-1",
    toggleActions: "restart none none none",
    //id: "logos",
    start: "top 70%",
    end: "bottom 70%",
    // scrub: true,
    scrub: 1
})

var sec2Text2Timeline = gsap.timeline({});

sec2Text2Timeline.from("#text-2",{duration:2, alpha:0, xPercent: 30}, "start-2");

ScrollTrigger.create({
    animation: sec2Text2Timeline,
    // markers: true,
    trigger: "#text-2",
    toggleActions: "restart none none none",
    //id: "logos",
    start: "top 70%",
    end: "bottom 70%",
    // scrub: true,
    scrub: 1
})

var sec2Text3Timeline = gsap.timeline({});

sec2Text3Timeline.from("#text-3",{duration:2, alpha:0, xPercent: -30}, "start-2");

ScrollTrigger.create({
    animation: sec2Text3Timeline,
    // markers: true,
    trigger: "#text-3",
    toggleActions: "restart none none none",
    //id: "logos",
    start: "top 70%",
    end: "bottom 70%",
    // scrub: true,
    scrub: 1
})

var sec2Text4Timeline = gsap.timeline({});

sec2Text4Timeline.from("#text-4",{duration:2, alpha:0, xPercent: 30}, "start-2");

ScrollTrigger.create({
    animation: sec2Text4Timeline,
    // markers: true,
    trigger: "#text-4",
    toggleActions: "restart none none none",
    //id: "logos",
    start: "top 70%",
    end: "bottom 70%",
    // scrub: true,
    scrub: 1
})

var sec2Text5Timeline = gsap.timeline({});

sec2Text5Timeline.from("#text-5",{duration:2, alpha:0, xPercent: -30}, "start-2");

ScrollTrigger.create({
    animation: sec2Text5Timeline,
    // markers: true,
    trigger: "#text-5",
    toggleActions: "restart none none none",
    //id: "logos",
    start: "top 70%",
    end: "bottom 70%",
    // scrub: true,
    scrub: 1
})

var sec2Text6Timeline = gsap.timeline({});

sec2Text6Timeline.from("#text-6",{duration:2, alpha:0, xPercent: 30}, "start-2");

ScrollTrigger.create({
    animation: sec2Text6Timeline,
    // markers: true,
    trigger: "#text-6",
    toggleActions: "restart none none none",
    //id: "logos",
    start: "top 70%",
    end: "bottom 70%",
    // scrub: true,
    scrub: 1
})

var sec2Text7Timeline = gsap.timeline({});

sec2Text7Timeline.from("#text-7",{duration:2, alpha:0, xPercent: -30}, "start-2");

ScrollTrigger.create({
    animation: sec2Text7Timeline,
    // markers: true,
    trigger: "#text-7",
    toggleActions: "restart none none none",
    //id: "logos",
    start: "top 70%",
    end: "bottom 70%",
    // scrub: true,
    scrub: 1
})

var sec2Text8Timeline = gsap.timeline({});

sec2Text8Timeline.from("#text-8",{duration:2, alpha:0, xPercent: 30}, "start-2");

ScrollTrigger.create({
    animation: sec2Text8Timeline,
    // markers: true,
    trigger: "#text-8",
    toggleActions: "restart none none none",
    //id: "logos",
    start: "top 70%",
    end: "bottom 70%",
    // scrub: true,
    scrub: 1
})

var sec2Text9Timeline = gsap.timeline({});

sec2Text9Timeline.from("#text-9",{duration:2, alpha:0, xPercent: -30}, "start-2");

ScrollTrigger.create({
    animation: sec2Text9Timeline,
    // markers: true,
    trigger: "#text-9",
    toggleActions: "restart none none none",
    //id: "logos",
    start: "top 70%",
    end: "bottom 70%",
    // scrub: true,
    scrub: 1
})

var sec2Text10Timeline = gsap.timeline({});

sec2Text10Timeline.from("#text-10",{duration:2, alpha:0, xPercent: 30}, "start-2");

ScrollTrigger.create({
    animation: sec2Text10Timeline,
    // markers: true,
    trigger: "#text-10",
    toggleActions: "restart none none none",
    //id: "logos",
    start: "top 70%",
    end: "bottom 70%",
    // scrub: true,
    scrub: 1
})

/* ========================
      Arrow Animation
======================== */

gsap.from("#arrow", {duration:2, alpha:0, yPercent:-100,

    scrollTrigger:{
        trigger:"#arrow",
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "restart none none none"
        // markers: true
    }})

/* ========================
        SECTION 4
======================== */

/* ========================
      Text Animation 1
======================== */

var sec4Text1Timeline = gsap.timeline({});

sec4Text1Timeline.from("#sec-4-header, #sec-4-text",{duration:2, alpha:0, yPercent: -30}, "start-3");

ScrollTrigger.create({
    animation: sec4Text1Timeline,
    // markers: true,
    trigger: "#section-4-content-1",
    toggleActions: "restart none none none",
    //id: "logos",
    start: "top 70%",
    end: "bottom 70%",
    // scrub: true,
    scrub: 1
})

var sec4Text2Timeline = gsap.timeline({});

sec4Text2Timeline.from("#sec-4-header-2",{duration:2, alpha:0, yPercent: -30}, "start-3");

ScrollTrigger.create({
    animation: sec4Text2Timeline,
    // markers: true,
    trigger: "#sec-4-header-2",
    toggleActions: "restart none none none",
    //id: "logos",
    start: "top 70%",
    end: "bottom 70%",
    // scrub: true,
    scrub: 1
})

/* ========================
        SECTION 5
======================== */

/* ========================
      Text Animation 1
======================== */

var sec5TextTimeline = gsap.timeline({});

sec5TextTimeline.from("#sec-5-header",{duration:3, alpha:0, yPercent: -30}, "start-3");

ScrollTrigger.create({
    animation: sec5TextTimeline,
    // markers: true,
    trigger: "#sec-5-header",
    toggleActions: "restart none none none",
    //id: "logos",
    start: "top 70%",
    end: "bottom 70%",
    // scrub: true,
    scrub: 2
})