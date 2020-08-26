var card3AnimationTimeline = gsap.timeline({
    paused: true
});
var bearSpeed = 1.5;
var marshmallowspeed = 1;




card3AnimationTimeline.addLabel("bearToUp")
                      .to("#marshmallow-3",{duration:marshmallowspeed, x:0, y:111 }, "marshmallow")
                      .to("#bear-3",{duration:bearSpeed, y:70}, "bear")
                      .addPause()
                      .addLabel("bearToUpReverse")
                
                      


