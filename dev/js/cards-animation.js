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
                      

/* =============
    Card-6
============= */

var card6AnimationTimeline = gsap.timeline({
    paused: true
});

var canSpeed = 1;
var smokeSpeed = 3;
var bugSpeed = 3;

card6AnimationTimeline.addLabel("bugToNone")
                      .to("#spray-6",{duration:canSpeed, x:257 }, "spray")
                      .to("#smoke-6",{duration:smokeSpeed, alpha:0, transformOrigin:"100%", scale:70 }, "smoke")
                      .to("#bug1-6",{duration:bugSpeed, alpha:0}, "smoke")
                      .to("#bug2-6",{duration:bugSpeed, alpha:0}, "smoke")
                      .to("#bug3-6",{duration:bugSpeed, alpha:0}, "smoke")
                      .to("#bug4-6",{duration:bugSpeed, alpha:0}, "smoke")
                      .to("#bug5-6",{duration:bugSpeed, alpha:0}, "smoke")
                      .to("#bug6-6",{duration:bugSpeed, alpha:0}, "smoke")
                      .to("#bug7-6",{duration:bugSpeed, alpha:0}, "smoke")
                      .to("#bug8-6",{duration:bugSpeed, alpha:0}, "smoke")
                

                    