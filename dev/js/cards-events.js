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

$("#a6").on("mouseenter", function () {
    console.log("animate");
    card6AnimationTimeline.play();
});
$("#a6").on("mouseleave", function () {
    console.log("animate");
    card6AnimationTimeline.reverse();
});