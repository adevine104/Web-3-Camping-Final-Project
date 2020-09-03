$(document).ready(function () {

    // console.log($(".slides").hasClass("my-slider"));
    if ($(".slides").hasClass("my-slider")) {
        tns({
            container: '.my-slider',
            items: 1,
            slideBy: 'page',
            autoplay: true,
            loop: true,
            gutter: 0,
            edgePadding: 0,
            controls: false,
            mouseDrag: true,
            arrowKeys: true,
            speed: 750,
            nav: false
        });
    }
});