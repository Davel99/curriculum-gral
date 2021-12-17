gsap.registerPlugin(ScrollToPlugin);
var anim = {
    presentacion: new TimelineMax({ paused: false, yoyo:true, repeat:-1, repeatDelay:1 }),
    gear: new TimelineMax({repeat:-1}),
    presentacion_trigger: new TimelineMax({yoyo:true, repeat:-1, repeatDelay:1}),

    trigger: {
        example: gsap.from(".icon-container", {
            duration: 3,
            xPercent: -50,
            opacity: 0,
            scale: 0.1,
            ease: "bounce.out"
        })

    }

}


anim.presentacion.to(".icon-container",2,{rotation: 360, ease: Power2.easeInOut });
anim.gear.to("#gear", 10, {rotation:360, transformOrigin:"50% 50%", ease: "none"});






