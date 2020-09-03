
gsap.registerPlugin(ScrollToPlugin);

var scrollItems =["#section-2", "#section-4", "#section-3", "#section-5", "#section-6"];

function scrollIndex(){
 // gsap.to(window, {duration: 2, scrollTo:"#index-card1"});
 gsap.to(window, {duration: 2, scrollTo: {y: scrollItems[$('#main-nav ul li button').index(this)], offsetY: 100}});
}