/* =============
    Card-3
============= */

var card3AnimationTimeline = gsap.timeline({
    paused: true
});
var bearSpeed = 1.5;
var marshmallowSpeed = 1;

card3AnimationTimeline.addLabel("bearToUp")
                      .to("#marshmallow-3",{duration:marshmallowSpeed, x:0, y:111 }, "marshmallow")
                      .to("#bear-3",{duration:bearSpeed, y:70}, "bear")
                      .addPause()
                      .addLabel("bearToUpReverse")
                
                      
/* =============
    Card-4
============= */

var card4AnimationTimeline = gsap.timeline({
    paused: true
});

var skySpeed = 1.5;

card4AnimationTimeline.addLabel("cloudToSun")
                      .to("#cloud1-4",{duration:skySpeed, fill:"#fff" }, "sky")
                      .to("#cloud2-4",{duration:skySpeed, fill:"#fff" }, "sky")
                      .to("#cloud3-4",{duration:skySpeed, fill:"#fff" }, "sky")
                      .to("#sky-4",{duration:skySpeed, fill:"#64BCE5" }, "sky")
                      .to("#sun-4",{duration:skySpeed, y:-20, x:20 }, "sky")
                      .addPause()
                      .addLabel("bearToUpReverse")