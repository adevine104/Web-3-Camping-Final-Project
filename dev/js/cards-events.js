$("#a3").on("mouseenter", function () {
    console.log("animate");
    card3AnimationTimeline.play();
});
$("#a3").on("mouseleave", function () {
    console.log("animate");
    card3AnimationTimeline.reverse();
});

$("#a4").on("mouseenter", function () {
    console.log("animate");
    card4AnimationTimeline.play();
});
$("#a4").on("mouseleave", function () {
    console.log("animate");
    card4AnimationTimeline.reverse();
});