// var burgerAnimationTimeLine = gsap.timeline({paused:true});
var burgerAnimateSpeed = 0.25;


var burgerAnimationTimeLine = gsap.timeline({
    paused: true
});

burgerAnimationTimeLine.addLabel("burgerToDownArrow")
                        .to("#burger",{duration:burgerAnimateSpeed, rotation:-90}, "animateBurger")
                        .to("#bottom-line",{duration:burgerAnimateSpeed, y:-13}, "animateBurger")
                        .to("#top-line",{duration:burgerAnimateSpeed, y:13}, "animateBurger")
                        .to("#down-left-arrow",{duration:burgerAnimateSpeed, rotation:55, x:-1}, "animateBurger")
                        .to("#down-right-arrow",{duration:burgerAnimateSpeed, rotation:-55, x:-1}, "animateBurger")
                        .addLabel("burgerToDownArrowReverse")
                        .addPause()
                        .addLabel("downArrowToX")
                        .to("#top-line",{duration: burgerAnimateSpeed, rotation:45},"burgerToX")
                        .to("#bottom-line",{duration: burgerAnimateSpeed, rotation:-45},"burgerToX")
                        .to("#middle-line",{duration: burgerAnimateSpeed, alpha:0},"burgerToX")
                        .to("#down-left-arrow",{duration: burgerAnimateSpeed, rotation:0, alpha:0, y: 13},"burgerToX")
                        .to("#down-right-arrow",{duration: burgerAnimateSpeed, rotation:0, alpha:0, y: 13},"burgerToX")
                        .to("#up-left-arrow",{duration: burgerAnimateSpeed, alpha:0},"burgerToX")
                        .to("#up-right-arrow",{duration: burgerAnimateSpeed, alpha:0},"burgerToX")
                        .addLabel("downArrowToXReverse")
                        .addPause()
                        .addLabel("xToUpArrow")
                        .to("#bottom-line",{duration:burgerAnimateSpeed, rotation: 0}, 'upArrow')
                        .to("#top-line",{duration:burgerAnimateSpeed, rotation: 0}, 'upArrow')
                        .to("#up-left-arrow",{duration:burgerAnimateSpeed,rotation:50, alpha:1, y:-14, x:-3}, 'createUpArrow')
                        .to("#up-right-arrow",{duration:burgerAnimateSpeed,rotation:-50, alpha:1, y:-14, x:-3}, 'createUpArrow')
                        .addLabel("xToUpArrowReverse")
                        .addPause()
                        .addLabel("upArrowToBurger")
                        .to("#up-left-arrow",{duration:burgerAnimateSpeed,rotation:0, alpha:0}, 'backToBurger')
                        .to("#up-right-arrow",{duration:burgerAnimateSpeed,rotation:0, alpha:0}, 'backToBurger')
                        .to("#middle-line",{duration:burgerAnimateSpeed, alpha:1}, 'backToBurger')
                        .to("#top-line",{duration:burgerAnimateSpeed, y:0, rotation:0}, 'backToBurger')
                        .to("#bottom-line",{duration:burgerAnimateSpeed, y:0, rotation:0}, 'backToBurger')
                        .to("#burger",{duration:burgerAnimateSpeed, rotation:0}, 'backToBurger')
                        .addPause();