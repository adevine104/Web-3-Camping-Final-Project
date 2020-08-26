import { gsap } from 'gsap'

gsap.set(".bottom",{height:0});
gsap.set(".fas",{transformOrgin:"center"});

var contentHeight;

$(".option") .on("click", function(){

    contentHeight = $(this).children(".bottom").find('.content').outerHeight();

    const option = document.querySelector('option')

    if(option.dataset.accordionToggle === "true"){

        gsap.to(".bottom", {duration:0.25,height: 0});
        gsap.to(".bott", {duration:0.1,rotation: 0});
    }

    if($(this).children(".bottom").height()>0){

        gsap.to($(this).children(".bottom"), {duration:0.25, height: 0});
        gsap.to($(this).children(".top").children(".fas"), {duration:0.25, rotation: 0});
    }else{

        gsap.to($(this).children(".bottom"), {duration:0.25, height: contentHeight});
        gsap.to($(this).children(".top").children(".fas"), {duration:0.25, rotation: 180});
    }

    console.log($(this).children(".arrow"));

});