$(document).ready((function(){$(".slides").hasClass("my-slider")&&tns({container:".my-slider",items:1,slideBy:"page",autoplay:!0,loop:!0,gutter:0,edgePadding:0,controls:!1,mouseDrag:!0,arrowKeys:!0,speed:750,nav:!1})})),gsap.registerPlugin(ScrollTrigger);var sec1TextTimeline=gsap.timeline({});sec1TextTimeline.from("#sec-1-text",{duration:2,alpha:0,yPercent:30},"start"),ScrollTrigger.create({animation:sec1TextTimeline,trigger:"#section-1-content",toggleActions:"restart none none none",start:"top 70%",end:"bottom 70%",scrub:1}),gsap.from("#arrow-1",{duration:2,alpha:0,yPercent:-100,scrollTrigger:{trigger:"#arrow-1",start:"top 80%",end:"bottom 80%",toggleActions:"restart none none none"}});var sec2Text1Timeline=gsap.timeline({});sec2Text1Timeline.from("#text-1",{duration:2,alpha:0,xPercent:-30},"start-2"),ScrollTrigger.create({animation:sec2Text1Timeline,trigger:"#text-1",toggleActions:"restart none none none",start:"top 70%",end:"bottom 70%",scrub:1});var sec2Text2Timeline=gsap.timeline({});sec2Text2Timeline.from("#text-2",{duration:2,alpha:0,xPercent:30},"start-2"),ScrollTrigger.create({animation:sec2Text2Timeline,trigger:"#text-2",toggleActions:"restart none none none",start:"top 70%",end:"bottom 70%",scrub:1});var sec2Text3Timeline=gsap.timeline({});sec2Text3Timeline.from("#text-3",{duration:2,alpha:0,xPercent:-30},"start-2"),ScrollTrigger.create({animation:sec2Text3Timeline,trigger:"#text-3",toggleActions:"restart none none none",start:"top 70%",end:"bottom 70%",scrub:1});var sec2Text4Timeline=gsap.timeline({});sec2Text4Timeline.from("#text-4",{duration:2,alpha:0,xPercent:30},"start-2"),ScrollTrigger.create({animation:sec2Text4Timeline,trigger:"#text-4",toggleActions:"restart none none none",start:"top 70%",end:"bottom 70%",scrub:1});var sec2Text5Timeline=gsap.timeline({});sec2Text5Timeline.from("#text-5",{duration:2,alpha:0,xPercent:-30},"start-2"),ScrollTrigger.create({animation:sec2Text5Timeline,trigger:"#text-5",toggleActions:"restart none none none",start:"top 70%",end:"bottom 70%",scrub:1});var sec2Text6Timeline=gsap.timeline({});sec2Text6Timeline.from("#text-6",{duration:2,alpha:0,xPercent:30},"start-2"),ScrollTrigger.create({animation:sec2Text6Timeline,trigger:"#text-6",toggleActions:"restart none none none",start:"top 70%",end:"bottom 70%",scrub:1});var sec2Text7Timeline=gsap.timeline({});sec2Text7Timeline.from("#text-7",{duration:2,alpha:0,xPercent:-30},"start-2"),ScrollTrigger.create({animation:sec2Text7Timeline,trigger:"#text-7",toggleActions:"restart none none none",start:"top 70%",end:"bottom 70%",scrub:1});var sec2Text8Timeline=gsap.timeline({});sec2Text8Timeline.from("#text-8",{duration:2,alpha:0,xPercent:30},"start-2"),ScrollTrigger.create({animation:sec2Text8Timeline,trigger:"#text-8",toggleActions:"restart none none none",start:"top 70%",end:"bottom 70%",scrub:1});var sec2Text9Timeline=gsap.timeline({});sec2Text9Timeline.from("#text-9",{duration:2,alpha:0,xPercent:-30},"start-2"),ScrollTrigger.create({animation:sec2Text9Timeline,trigger:"#text-9",toggleActions:"restart none none none",start:"top 70%",end:"bottom 70%",scrub:1});var sec2Text10Timeline=gsap.timeline({});sec2Text10Timeline.from("#text-10",{duration:2,alpha:0,xPercent:30},"start-2"),ScrollTrigger.create({animation:sec2Text10Timeline,trigger:"#text-10",toggleActions:"restart none none none",start:"top 70%",end:"bottom 70%",scrub:1}),gsap.from("#arrow",{duration:2,alpha:0,yPercent:-100,scrollTrigger:{trigger:"#arrow",start:"top 80%",end:"bottom 80%",toggleActions:"restart none none none"}});var sec4Text1Timeline=gsap.timeline({});sec4Text1Timeline.from("#sec-4-header, #sec-4-text",{duration:2,alpha:0,yPercent:-30},"start-3"),ScrollTrigger.create({animation:sec4Text1Timeline,trigger:"#section-4-content-1",toggleActions:"restart none none none",start:"top 70%",end:"bottom 70%",scrub:1});var sec4Text2Timeline=gsap.timeline({});sec4Text2Timeline.from("#sec-4-header-2",{duration:2,alpha:0,yPercent:-30},"start-3"),ScrollTrigger.create({animation:sec4Text2Timeline,trigger:"#sec-4-header-2",toggleActions:"restart none none none",start:"top 70%",end:"bottom 70%",scrub:1});var sec5TextTimeline=gsap.timeline({});sec5TextTimeline.from("#sec-5-header",{duration:3,alpha:0,yPercent:-30},"start-3"),ScrollTrigger.create({animation:sec5TextTimeline,trigger:"#sec-5-header",toggleActions:"restart none none none",start:"top 70%",end:"bottom 70%",scrub:2});const cards=document.querySelectorAll(".card");for(var i=0;i<cards.length;i++){cardFlip(cards[i])}function cardFlip(e){e.addEventListener("click",(function(){e.classList.toggle("is-flipped")}))}$("#a1").on("mouseenter",(function(){console.log("animate"),card1AnimationTimeline.play()})),$("#a1").on("mouseleave",(function(){console.log("animate"),card1AnimationTimeline.reverse()})),$("#a2").on("mouseenter",(function(){console.log("animate"),card2AnimationTimeline.play()})),$("#a2").on("mouseleave",(function(){console.log("animate"),card2AnimationTimeline.reverse()})),$("#a3").on("mouseenter",(function(){console.log("animate"),card3AnimationTimeline.play()})),$("#a3").on("mouseleave",(function(){console.log("animate"),card3AnimationTimeline.reverse()})),$("#a4").on("mouseenter",(function(){console.log("animate"),card4AnimationTimeline.play()})),$("#a4").on("mouseleave",(function(){console.log("animate"),card4AnimationTimeline.reverse()})),$("#a5").on("mouseenter",(function(){console.log("animate"),card5AnimationTimeline.play()})),$("#a5").on("mouseleave",(function(){console.log("animate"),card5AnimationTimeline.reverse()})),$("#a6").on("mouseenter",(function(){console.log("animate"),card6AnimationTimeline.play()})),$("#a6").on("mouseleave",(function(){console.log("animate"),card6AnimationTimeline.reverse()})),$("#a7").on("mouseenter",(function(){console.log("animate"),card7AnimationTimeline.play()})),$("#a7").on("mouseleave",(function(){console.log("animate"),card7AnimationTimeline.reverse()})),$("#a8").on("mouseenter",(function(){console.log("animate"),card8AnimationTimeline.play()})),$("#a8").on("mouseleave",(function(){console.log("animate"),card8AnimationTimeline.reverse()})),$("#a9").on("mouseenter",(function(){console.log("animate"),card9AnimationTimeline.play()})),$("#a9").on("mouseleave",(function(){console.log("animate"),card9AnimationTimeline.reverse()}));var card1AnimationTimeline=gsap.timeline({paused:!0}),creaturesSpeed=.7;card1AnimationTimeline.addLabel("plantBearToUp").to("#bear-1",{duration:creaturesSpeed,y:90},"bear").to("#ivy-1",{duration:creaturesSpeed,y:90},"ivy");var card2AnimationTimeline=gsap.timeline({paused:!0}),foodsSpeed=.9,doorSpeed=.1;card2AnimationTimeline.addLabel("foodsToTent").to("#foods",{duration:foodsSpeed,x:110},"foods").to("#foods",{duration:foodsSpeed,y:110,x:145},"foods1").to("#door2-2",{duration:doorSpeed,x:17,y:4},"door").to("#door1-2",{duration:doorSpeed,x:-23,y:-4.5},"door");var card3AnimationTimeline=gsap.timeline({paused:!0}),bearSpeed=1.5,marshmallowSpeed=1;card3AnimationTimeline.addLabel("bearToUp").to("#marshmallow-3",{duration:marshmallowSpeed,x:0,y:111},"marshmallow").to("#bear-3",{duration:bearSpeed,y:70},"bear").addPause().addLabel("bearToUpReverse");var card4AnimationTimeline=gsap.timeline({paused:!0}),skySpeed=1.5;card4AnimationTimeline.addLabel("cloudToSun").to("#cloud1-4",{duration:skySpeed,fill:"#fff"},"sky").to("#cloud2-4",{duration:skySpeed,fill:"#fff"},"sky").to("#cloud3-4",{duration:skySpeed,fill:"#fff"},"sky").to("#sky-4",{duration:skySpeed,fill:"#64BCE5"},"sky").to("#sun-4",{duration:skySpeed,y:-20,x:20},"sky").addPause().addLabel("bearToUpReverse");var card5AnimationTimeline=gsap.timeline({paused:!0}),bucketSpeed=.9,fireSpeed=2;card5AnimationTimeline.addLabel("fireToOut").to("#bucket-5",{duration:bucketSpeed,y:100,x:225,rotate:-50},"bucket").to("#water-5",{duration:bucketSpeed,scale:40,transformOrigin:"100%",y:-15,x:-20,alpha:0},"waterFire").to("#b-2-5",{duration:bucketSpeed,fill:"#507FB3"},"waterFire").to("#f1-5",{duration:fireSpeed,alpha:0},"waterFire").to("#f2-5",{duration:fireSpeed,alpha:0},"waterFire").to("#smoke-5",{duration:fireSpeed,transformOrigin:"20% 100%",scale:10,alpha:0},"waterFire");var card6AnimationTimeline=gsap.timeline({paused:!0}),canSpeed=1,smokeSpeed=3,bugSpeed=3;card6AnimationTimeline.addLabel("bugToNone").to("#spray-6",{duration:canSpeed,x:257},"spray").to("#smoke-6",{duration:smokeSpeed,alpha:0,transformOrigin:"100%",scale:70},"smoke").to("#bug1-6",{duration:bugSpeed,alpha:0},"smoke").to("#bug2-6",{duration:bugSpeed,alpha:0},"smoke").to("#bug3-6",{duration:bugSpeed,alpha:0},"smoke").to("#bug4-6",{duration:bugSpeed,alpha:0},"smoke").to("#bug5-6",{duration:bugSpeed,alpha:0},"smoke").to("#bug6-6",{duration:bugSpeed,alpha:0},"smoke").to("#bug7-6",{duration:bugSpeed,alpha:0},"smoke").to("#bug8-6",{duration:bugSpeed,alpha:0},"smoke");var card7AnimationTimeline=gsap.timeline({paused:!0}),waterSpeed=.5;card7AnimationTimeline.addLabel("waterToOut").to("#water4-7",{duration:waterSpeed,x:110},"water1").to("#water5-7",{duration:waterSpeed,x:110},"water1").to("#water7-7",{duration:waterSpeed,x:177},"water1").to("#water8-7",{duration:waterSpeed,x:177},"water1").to("#water3-7",{duration:waterSpeed,x:75},"water2").to("#water9-7",{duration:waterSpeed,x:210},"water2").to("#water10-7",{duration:waterSpeed,x:246},"water3").to("#water11-7",{duration:waterSpeed,x:246},"water3").to("#water1-7",{duration:waterSpeed,x:30},"water3").to("#water2-7",{duration:waterSpeed,x:30},"water3");var card8AnimationTimeline=gsap.timeline({paused:!0}),trashSpeed=1.5;card8AnimationTimeline.addLabel("trashToCan").to("#banana-8",{duration:trashSpeed,x:32},"trash").to("#marshmellow-8",{duration:trashSpeed,x:30},"trash").to("#spray-8",{duration:trashSpeed,x:33},"trash");var card9AnimationTimeline=gsap.timeline({paused:!0}),plantsSpeed=.5;card9AnimationTimeline.addLabel("plantsToOut").to("#ivy1-9",{duration:plantsSpeed,y:95},"plant").to("#ivy2-9",{duration:plantsSpeed,y:130},"plant").to("#ivy3-9",{duration:plantsSpeed,y:70},"plant");var contentHeight,logoAnimationTimeline=gsap.timeline({paused:!0}),logoSpeed=.5;logoAnimationTimeline.addLabel("tentToAnimate").to("#hdoor1",{duration:logoSpeed,x:-30},"logo").to("#hdoor2",{duration:logoSpeed,x:30},"logo"),$("#logo").on("mouseenter",(function(){console.log("animate"),logoAnimationTimeline.play()})),$("#logo").on("mouseleave",(function(){console.log("animate"),logoAnimationTimeline.reverse()})),$(document).ready((function(){new Typed(".type",{strings:["Would You","Go","Camping?"],typeSpeed:60,backSpeed:60})})),gsap.set(".bottom",{height:0}),gsap.set(".fas",{transformOrigin:"center"}),$(".option").on("click",(function(){contentHeight=$(this).children(".bottom").find(".content").outerHeight();"true"===document.querySelector(".option").dataset.accordionToggle&&(gsap.to(".bottom",{duration:.25,height:0}),gsap.to(".fas",{duration:.1,rotation:0})),$(this).children(".bottom").height()>0?(gsap.to($(this).children(".bottom"),{duration:.25,height:0}),gsap.to($(this).children(".top").children(".fas"),{duration:.25,rotation:0})):(gsap.to($(this).children(".bottom"),{duration:.25,height:contentHeight}),gsap.to($(this).children(".top").children(".fas"),{duration:.25,rotation:180})),console.log($(this).children(".arrow"))})),gsap.registerPlugin(DrawSVGPlugin);var svgLineTimeLine=gsap.timeline({});svgLineTimeLine.from("#Path",{duration:3,drawSVG:"0%"},"playsvg"),ScrollTrigger.create({animation:svgLineTimeLine,toggleActions:"play none complete none",trigger:"#section-2",start:"top 35%",end:"bottom 60%",scrub:15});var burgerAnimateSpeed=.25,burgerAnimationTimeLine=gsap.timeline({paused:!0});burgerAnimationTimeLine.addLabel("burgerToDownArrow").to("#burger",{duration:burgerAnimateSpeed,rotation:-90},"animateBurger").to("#bottom-line",{duration:burgerAnimateSpeed,y:-13},"animateBurger").to("#top-line",{duration:burgerAnimateSpeed,y:13},"animateBurger").to("#down-left-arrow",{duration:burgerAnimateSpeed,rotation:55,x:-1},"animateBurger").to("#down-right-arrow",{duration:burgerAnimateSpeed,rotation:-55,x:-1},"animateBurger").addLabel("burgerToDownArrowReverse").addPause().addLabel("downArrowToX").to("#top-line",{duration:burgerAnimateSpeed,rotation:45},"burgerToX").to("#bottom-line",{duration:burgerAnimateSpeed,rotation:-45},"burgerToX").to("#middle-line",{duration:burgerAnimateSpeed,alpha:0},"burgerToX").to("#down-left-arrow",{duration:burgerAnimateSpeed,rotation:0,alpha:0,y:13},"burgerToX").to("#down-right-arrow",{duration:burgerAnimateSpeed,rotation:0,alpha:0,y:13},"burgerToX").to("#up-left-arrow",{duration:burgerAnimateSpeed,alpha:0},"burgerToX").to("#up-right-arrow",{duration:burgerAnimateSpeed,alpha:0},"burgerToX").addLabel("downArrowToXReverse").addPause().addLabel("xToUpArrow").to("#bottom-line",{duration:burgerAnimateSpeed,rotation:0},"upArrow").to("#top-line",{duration:burgerAnimateSpeed,rotation:0},"upArrow").to("#up-left-arrow",{duration:burgerAnimateSpeed,rotation:50,alpha:1,y:-14,x:-3},"createUpArrow").to("#up-right-arrow",{duration:burgerAnimateSpeed,rotation:-50,alpha:1,y:-14,x:-3},"createUpArrow").addLabel("xToUpArrowReverse").addPause().addLabel("upArrowToBurger").to("#up-left-arrow",{duration:burgerAnimateSpeed,rotation:0,alpha:0},"backToBurger").to("#up-right-arrow",{duration:burgerAnimateSpeed,rotation:0,alpha:0},"backToBurger").to("#middle-line",{duration:burgerAnimateSpeed,alpha:1},"backToBurger").to("#top-line",{duration:burgerAnimateSpeed,y:0,rotation:0},"backToBurger").to("#bottom-line",{duration:burgerAnimateSpeed,y:0,rotation:0},"backToBurger").to("#burger",{duration:burgerAnimateSpeed,rotation:0},"backToBurger").addPause(),gsap.set("#up-left-arrow",{transformOrigin:"right center",alpha:0}),gsap.set("#up-right-arrow",{transformOrigin:"right center",alpha:0}),$("#burger").on("mouseenter",(function(){!1===canYouSeeTheMenu?(console.log("burger to arrow"),burgerAnimationTimeLine.play("burgerToDownArrow")):burgerAnimationTimeLine.play("downArrowToX")})),$("#burger").on("mouseleave",(function(){!1===canYouSeeTheMenu?(console.log("arrow to burger"),burgerAnimationTimeLine.reverse("burgerToDownArrowReverse")):burgerAnimationTimeLine.reverse("XtoUpArrowReverse")}));var canYouSeeTheMenu=!1,navHeight=$("#main-nav").outerHeight();gsap.set("#main-nav",{y:-navHeight});var mainNavTimeline=gsap.timeline({paused:!0});function hideShowMainNav(){console.log("show me the menu!"),console.log(canYouSeeTheMenu+" can you see the menu value"),!1===canYouSeeTheMenu?(burgerAnimationTimeLine.play("downArrowToX"),mainNavTimeline.play(),canYouSeeTheMenu=!0):(console.log("burger click up"),burgerAnimationTimeLine.play("upArrowToBurger"),mainNavTimeline.reverse(),canYouSeeTheMenu=!1)}mainNavTimeline.to("#main-nav",{duration:.25,y:0}),gsap.set(".lines",{transformOrigin:"center"});var menuBackground=document.querySelector("#main-nav");function reportWindowSize(){console.log("test"),!1===canYouSeeTheMenu&&(console.log("can't see the main nav"),console.log($("#main-nav").outerHeight()),navHeight=$("#main-nav").outerHeight(),gsap.set("#main-nav",{y:-navHeight}))}window.onclick=function(e){e.target==menuBackground&&hideShowMainNav()},window.addEventListener("resize",reportWindowSize),$("#burger").on("click",hideShowMainNav),gsap.registerPlugin(ScrollToPlugin);var scrollItems=["#section-2","#section-3","#section-4","#section-5","#section-6"];function scrollIndex(){gsap.to(window,{duration:2,scrollTo:{y:scrollItems[$("#main-nav ul li button").index(this)],offsetY:100}})}$("#main-nav li button").on("click",hideShowMainNav),$("#main-nav li button").on("click",scrollIndex);