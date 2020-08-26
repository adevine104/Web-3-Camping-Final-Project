$("#a3").on("mouseenter", function () {
    console.log("animate");
    card3AnimationTimeline.play();
});
$("#a3").on("mouseleave", function () {
    console.log("animate");
    card3AnimationTimeline.reverse();
});