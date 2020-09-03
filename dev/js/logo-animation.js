var logoAnimationTimeline = gsap.timeline({
    paused: true
});

var logoSpeed = .5;

logoAnimationTimeline.addLabel("tentToAnimate")
                      .to("#hdoor1",{duration:logoSpeed, x:-30 }, "logo")
                      .to("#hdoor2",{duration:logoSpeed, x:30 }, "logo")




$("#logo").on("mouseenter", function () {
    console.log("animate");
    logoAnimationTimeline.play();
});
$("#logo").on("mouseleave", function () {
    console.log("animate");
    logoAnimationTimeline.reverse();
});
