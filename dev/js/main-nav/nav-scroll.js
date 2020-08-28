
gsap.registerPlugin(ScrollToPlugin);

var scrollItems =["#section-2", "#section-3", "#section-4", "#section-5", "#section-6"];


// animating three buttons to scrollto respective index sections
// var scrollItems =["#index-card1", "#index-card2", "#index-card3"];
 
function scrollIndex(){
 // gsap.to(window, {duration: 2, scrollTo:"#index-card1"});
 gsap.to(window, {duration: 2, scrollTo: {y: scrollItems[$('#main-nav ul li button').index(this)], offsetY: 100}});
}

// console.log(scrollItems[5]);

// function scrollIndex(){
// //     gsap.to(window, {duration: 2, scrollTo:"#sec-2-btn"});
//     gsap.to(window, {duration: 2, scrollTo:{ y: scrollItems[$('#main-nav ul li button').index(this)], offsetY: 60}});
// }

// // function scrollSection2(){
// //     // gsap.to(window, {duration: 2, scrollTo:"#sec-2-btn"});
// //     gsap.to(window, {duration: 2, scrollTo:{y:"#sec-2-btn", offsetY:60}});
// // }

// // function scrollSection2(){
// //     gsap.to(window, {duration: 2, scrollTo:"#sec-3-btn"});
// // }