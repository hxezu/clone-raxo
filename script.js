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
        y: 50,
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

    const cursor = document.querySelector(".cursor"); 
}


function crsrAnim(){
    const cursor = document.querySelector('.cursor');
    const innerContent = document.querySelector('.wrap');
    innerContent.addEventListener('mousemove', (e)=>{
        gsap.to(cursor,{ x:e.x+'px', y:e.y+'px'})
    })

    innerContent.addEventListener('mouseenter',()=>{
        gsap.to(cursor,{scale : 1,opacity :1})
    })

    innerContent.addEventListener('mouseleave',()=>{
        gsap.to(cursor,{scale:0,opacity:0})
    })
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

function visualAnim(){
    gsap.timeline({
        scrollTrigger:{
            trigger:'.visual',
            start : '50% 55%',
            end : '100% 0%',
            scrub : 1,
            //markers:true
        }
    })
    .to('.intro #C',{x:'50', 'y':'1450', rotate: '40', ease: 'none', duration:7},0.1)
    .to('.intro #r',{x:'45', 'y':'1120', rotate: '-50', ease: 'none', duration:6},0.5)
    .to('.intro #e',{x:'60', 'y':'1350', rotate: '-50', ease: 'none', duration:5},0.3)
    .to('.intro #a',{x:'50', 'y':'1350', rotate: '-30', ease: 'none', duration:7},0.2)
    .to('.intro #t',{x:'30', 'y':'1250', rotate: '-30', ease: 'none', duration:7},0)
    .to('.intro #i',{x:'100', 'y':'1100', rotate: '-80', ease: 'none', duration:6},0.1)
    .to('.intro #v',{x:'50', 'y':'1450', rotate: '-50', ease: 'none', duration:6},0.4)
    .to('.intro #i2',{x:'10', 'y':'1120', rotate: '-20', ease: 'none', duration:5},0.5)
    .to('.intro #t2',{x:'40', 'y':'1350', rotate: '-70', ease: 'none', duration:7},0.2)
    .to('.intro #y',{x:'50', 'y':'1350', rotate: '40', ease: 'none', duration:7},0.3)
    .to('.intro #i3',{x:'10', 'y':'1120', rotate: '-20', ease: 'none', duration:5},0.5)
    .to('.intro #s',{x:'100', 'y':'1100', rotate: '-80', ease: 'none', duration:6},0.1)
    .to('.intro #o',{x:'50', 'y':'1450', rotate: '-50', ease: 'none', duration:6},0.4)
    .to('.intro #u',{x:'10', 'y':'1120', rotate: '-20', ease: 'none', duration:5},0.5)
    .to('.intro #r',{x:'50', 'y':'1350', rotate: '-30', ease: 'none', duration:7},0.2)
    .to('.intro #c',{x:'50', 'y':'1450', rotate: '40', ease: 'none', duration:7},0.1)
    .to('.intro #f',{x:'60', 'y':'1350', rotate: '-50', ease: 'none', duration:5},0.3)
}

window.onload = function(){
    crsrAnim();
    loco();
    loader();
    visualAnim();
};