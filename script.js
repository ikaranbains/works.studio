function loader() {
    const tl = gsap.timeline();

    tl.to("#yellow", {
        top: "-100%",
        delay: 0.4,
        duration: 0.7,
        ease: "expo.out"
    }, "h1");

    tl.to("#loader h1", {
        color: "white",
        delay: 0.4
    }, "h1");

    tl.to("#nav #nav-left svg path", {
        fill: "white",
        delay: 0.4
    }, "h1");

    tl.to("#nav #nav-right a", {
        color: "white",
        delay: 0.4
    }, "h1");

    tl.to("#loader video", {
        top: "-100%",
        delay: 0.4,
        duration: 0.6,
        ease: "expo.out"
    }, "anim");

    tl.to("#loader h1", {
        color: "black",
        delay: 0.4
    }, "anim");

    tl.to("#nav #nav-left svg path", {
        fill: "black",
        delay: 0.4
    }, "anim");

    tl.to("#nav #nav-right a", {
        color: "black",
        delay: 0.4
    }, "anim");

    tl.to("#loader", {
        display: "none"
    })
}
loader();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp: 0.06
});

var backToTop = document.querySelector("#footer #f-top h2");
backToTop.addEventListener("click", function () {
    scroll.scrollTo(0);
})

var elems = document.querySelectorAll(".elem");
var page2 = document.querySelector("#page2");
elems.forEach(function (e) {
    e.addEventListener("mouseover", function () {
        var img = e.getAttribute("data-img");
        page2.style.backgroundImage = `url(${img})`;
    })
})