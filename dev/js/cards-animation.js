/* =============
    Card-1
============= */

var card1AnimationTimeline = gsap.timeline({
    paused: true
});

var creaturesSpeed = .7;

card1AnimationTimeline.addLabel("plantBearToUp")
                      .to("#bear-1",{duration:creaturesSpeed, y:90 }, "bear")
                      .to("#ivy-1",{duration:creaturesSpeed, y:90 }, "ivy")

/* =============
    Card-2
============= */

var card2AnimationTimeline = gsap.timeline({
    paused: true
});

var foodsSpeed = .9;
var doorSpeed = .1;

card2AnimationTimeline.addLabel("foodsToTent")
                      .to("#foods",{duration:foodsSpeed, x:110 }, "foods")
                      .to("#foods",{duration:foodsSpeed, y:110, x:145 }, "foods1")
                      .to("#door2-2",{duration:doorSpeed, x:17, y:4 }, "door")
                      .to("#door1-2",{duration:doorSpeed, x:-23, y:-4.5 }, "door")

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
                

/* =============
    Card-7
============= */

var card7AnimationTimeline = gsap.timeline({
    paused: true
});

var waterSpeed = .5;

card7AnimationTimeline.addLabel("waterToOut")
                      .to("#water4-7",{duration:waterSpeed, x:110 }, "water1")
                      .to("#water5-7",{duration:waterSpeed, x:110 }, "water1")
                      .to("#water7-7",{duration:waterSpeed, x:177 }, "water1")
                      .to("#water8-7",{duration:waterSpeed, x:177 }, "water1")
                      .to("#water3-7",{duration:waterSpeed, x:75 }, "water2")
                      .to("#water9-7",{duration:waterSpeed, x:210 }, "water2")
                      .to("#water10-7",{duration:waterSpeed, x:246 }, "water3")
                      .to("#water11-7",{duration:waterSpeed, x:246 }, "water3")
                      .to("#water1-7",{duration:waterSpeed, x:30 }, "water3")
                      .to("#water2-7",{duration:waterSpeed, x:30 }, "water3")


/* =============
    Card-8
============= */

var card8AnimationTimeline = gsap.timeline({
    paused: true
});

var trashSpeed = 1.5

card8AnimationTimeline.addLabel("trashToCan")
                      .to("#banana-8",{duration:trashSpeed, x:32 }, "trash")
                      .to("#marshmellow-8",{duration:trashSpeed, x:30 }, "trash")
                      .to("#spray-8",{duration:trashSpeed, x:33 }, "trash")




/* =============
    Card-9
============= */

var card9AnimationTimeline = gsap.timeline({
    paused: true
});

var plantsSpeed = .5;

card9AnimationTimeline.addLabel("plantsToOut")
                      .to("#ivy1-9",{duration:plantsSpeed, y:95 }, "plant")
                      .to("#ivy2-9",{duration:plantsSpeed, y:130 }, "plant")
                      .to("#ivy3-9",{duration:plantsSpeed, y:70 }, "plant")