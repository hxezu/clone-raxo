function loader(){
    var tl = gsap.timeline();
    
    // 1. "."이 통통 튀는 애니메이션
    tl.to(".loader #dot", {
        y: -80, // span 크기만큼 위로 (112px)
        duration: 0.3,
        ease: "power2.out"
    });
    tl.to(".loader #dot", {
        y: 160, // 바닥으로 내려옴
        duration: 0.3,
        ease: "power2.in"
    });
    // 2회차
    tl.to(".loader #dot", {
        y: -80,
        duration: 0.3,
        ease: "power2.out"
    });
    tl.to(".loader #dot", {
        y: 10,
        duration: 0.3,
        ease: "power2.in"
    });
    tl.to(".loader #dot", {
        y: 0,
        duration: 0.3,
        ease: "power2.in"
    });
    
    // 2. R이 왼쪽으로 이동하며 A 등장
    tl.to(".loader #r", {
        x: 0,  // R을 왼쪽으로 이동
        duration: 0.5,
        ease: "none"
    }, );
    tl.to(".loader #dot", {
        x: 0,  // .을 오른쪽으로 이동
        duration: 0.5,
        ease: "none"
    }, "<");

    tl.to(".loader #a", {
        opacity: 1,
        duration: 0.5,
        ease: "none"
    }, ); 
    
    tl.to(".loader #o", {
        opacity: 1,
        duration: 0.5,
        ease: "none"
    }, "<"); 

    tl.to('.loader',{duration :0.5, opacity: 0, display : 'none'})
    tl.from('.page1 .inner-content span',{ y:60, duration :.5, delay:-.3, stagger :.0 })
}

function loco(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('.wrap'),
        smooth : true
    })

    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('.wrap',{
        scrollTop(value){
            return arguments.length ? locoScroll.scrollTo(value,0,0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect(){
            return {top:0, left:0, width: window.innerWidth, height: window.innerHeight};
        },

        pinType: document.querySelector('.wrap').style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh",() => locoScroll.update());
    ScrollTrigger.refresh();
}

window.onload = function(){
    loco();
    loader();
};