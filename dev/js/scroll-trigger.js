gsap.registerPlugin(ScrollTrigger);

gsap.from("#arrow-1", {duration:2, alpha:0, yPercent:-100,

    scrollTrigger:{
        trigger:"#arrow-1",
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "restart none none none"
        // markers: true
        //id:"portfolio"
    }})

    gsap.from("#arrow", {duration:2, alpha:0, yPercent:-100,

    scrollTrigger:{
        trigger: "#arrow",
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "restart none none none"
        // markers: true
        //id:"portfolio"
    }})