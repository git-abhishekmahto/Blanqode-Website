// Header Animation
    var tl = gsap.timeline();

    tl.from("nav .home-logo, nav li, nav ",{
        y:-30,
        opacity:0,
        delay:0.2,
        duration:0.6,
        stagger:0.2
    })

// Home Carousel Animation

    tl.from(".hm-first h1",{
        x:-300,
        opacity:0,
        duration:0.5,
    },"-=0.3")
    tl.from(".hm-first p",{
        x:-100,
        opacity:0,
        duration:0.4,
    })
    tl.from(".hm-first button",{
        opacity:0,
        duration:0.4
    })
    tl.from(".hm-second svg",{
        opacity:0,
        duration:0.5,
        y:-50
        
    },"-=0.7")  // delay inside timeline
    tl.from(".carousel-left-arrow, .carousel-right-arrow",{
        opacity:0,
        duration:0.5,
        y:-50
        
    },"-=0.1")  // delay inside timeline
    tl.from(".carousel-pointer, .featured-top",{
        opacity:0,
        y:-30,
        stagger:0.15,
        duration:0.4
    })    


// Custom Cursor Home Carousel

var cursor = document.querySelector("#cursor");
var main = document.querySelector(".home-carousel-container");

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.6
    })
});
main.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        opacity:"100"
    });
});
main.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        opacity:"0"
    });
});

// Home Featured Section
tl.from(".featured-logo",{
    opacity:0,
    y:-30,
    stagger:0.15,
    duration:0.6,
    scrollTrigger:{
        trigger:".featured-logo",
        scroller:"body",
        start:"top 90%",
        scrub:1
    }
});


// our service animated items
gsap.from(".left-animated-item1",{
    y:40,
    duration:2,
    repeat:-1,
    ease: "slow(0.7,0.7,false)",
    yoyo:true
});
gsap.from(".left-animated-item2",{
    y:40,
    duration:2,
    repeat:-1,
    ease: "slow(0.7,0.7,false)",
    yoyo:true
});
gsap.from(".left-animated-item3",{
    y:40,
    duration:2,
    repeat:-1,
    ease: "slow(0.7,0.7,false)",
    yoyo:true
});
gsap.from(".right-animated-item1",{
    y:40,
    duration:2,
    repeat:-1,
    ease: "slow(0.7,0.7,false)",
    yoyo:true
});
gsap.from(".right-animated-item2",{
    y:40,
    duration:2,
    repeat:-1,
    ease: "slow(0.7,0.7,false)",
    yoyo:true
});

// Our Service Headings
gsap.from(".services-header h1",{
    opacity:0,
    y:-30,
    duration:1,
    scrollTrigger:{
        trigger:".services-header h1",
        scroller:"body",
        start:"top 80%",
        scrub:1
    }
});
gsap.from(".services-list-item",{
    y:-30,
    opacity:0,
    delay:0.5,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:".services-list-item",
        scroller:"body",
        start:"top 100%",
        scrub:0.3
    }
});

// ---------------

function breakTheText() {
    var servicesHeader = document.querySelector(".services-header h2");
    var servicesHeaderText = servicesHeader.textContent;
  
    var splittedText = servicesHeaderText.split("");
  
    
    var halfValue = splittedText.length/2;   //use Math.floor() to make full number
    var clutter = "";
  
    splittedText.forEach(function (elem,idx) {
      if(idx<halfValue){
        clutter += `<span class="a">${elem}</span>`
      }
      else{
        clutter += `<span class="b">${elem}</span>`
      }
    });
    servicesHeader.innerHTML = clutter;
  };
  breakTheText();
  
  gsap.from(".services-header h2 .a",{
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:0.15,
    opacity:0,
    scrollTrigger:{
        trigger:".services-list-item",
        scroller:"body",
        start:"top 125%",
        scrub:0.3
    }
  });
  gsap.from(".services-header h2 .b",{
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:-0.15,
    opacity:0,
    scrollTrigger:{
        trigger:".services-list-item",
        scroller:"body",
        start:"top 125%",
        scrub:0.3
    }
  });

//   Why Choose us Animation
gsap.from(".wcu-header h1",{
    opacity:0,
    y:-30,
    duration:1,
    scrollTrigger:{
        trigger:".wcu-header h1",
        scroller:"body",
        start:"top 80%",
        scrub:1
    }
});
gsap.from(".wcu-header p",{
    opacity:0,
    y:-30,
    duration:1,
    scrollTrigger:{
        trigger:".wcu-header p",
        scroller:"body",
        start:"top 80%",
        scrub:1
    }
});
gsap.from(".why-choose-us .primary-button",{
    opacity:0,
    y:-30,
    duration:1,
    scrollTrigger:{
        trigger:".why-choose-us .primary-button",
        scroller:"body",
        start:"top 95%",
        scrub:1
    }
});


// Case Studies Animation
gsap.from(".hcs-header h1",{
    opacity:0,
    y:-30,
    duration:1,
    scrollTrigger:{
        trigger:".hcs-header h1",
        scroller:"body",
        start:"top 80%",
        scrub:1
    }
});
gsap.from(".hcs-header p",{
    opacity:0,
    y:-30,
    duration:1,
    scrollTrigger:{
        trigger:".hcs-header p",
        scroller:"body",
        start:"top 80%",
        scrub:1
    }
});
gsap.from(".hcs-success-stories-big-bar-animation",{
    opacity:0,
    x:-100,
    duration:0.7,
    scrollTrigger:{
        trigger:".hcs-success-stories-big-bar-animation",
        scroller:"body",
        start:"top 80%",
        scrub:1
    }
});
gsap.from(".hcs-success-stories-heading div, .hcs-success-stories-heading-text p",{
    opacity:0,
    x:100,
    duration:0.7,
    scrollTrigger:{
        trigger:".hcs-success-stories-heading div, .hcs-success-stories-heading-text p",
        scroller:"body",
        start:"top 80%",
        scrub:1
    }
});
gsap.from(".hcs-carousel-button",{
    opacity:0,
    y:-30,
    duration:1,
    scrollTrigger:{
        trigger:".hcs-carousel-button",
        scroller:"body",
        start:"top 80%",
        scrub:1
    }
});

// Home Team & Culture Animation
gsap.from(".htc-header p",{
    opacity:0,
    y:-30,
    duration:1,
    scrollTrigger:{
        trigger:".htc-header p",
        scroller:"body",
        start:"top 80%",
        scrub:1
    }
});
gsap.from(".htc-team-culture-big-bar-animation",{
    opacity:0,
    x:100,
    duration:0.7,
    scrollTrigger:{
        trigger:".htc-team-culture-big-bar-animation",
        scroller:"body",
        start:"top 80%",
        scrub:1
    }
});
gsap.from(".htc-team-culture-heading div, .htc-team-culture-heading-text p",{
    opacity:0,
    x:-100,
    duration:0.7,
    scrollTrigger:{
        trigger:".htc-team-culture-heading div, .htc-team-culture-heading-text p",
        scroller:"body",
        start:"top 80%",
        scrub:1
    }
});
gsap.from(".htc-boxes-extra-large div, .htc-boxes-large div, .htc-boxes-medium div, .htc-boxes-small div, .htc-boxes-extra-small div",{
    opacity:0,
    y:-60,
    stagger:0.1,
    duration:0.2,
    scrollTrigger:{
        trigger:".htc-boxes-extra-large div, .htc-boxes-large div, .htc-boxes-medium div, .htc-boxes-small div, .htc-boxes-extra-small div",
        scroller:"body",
        start:"top 85%"
    }
});
gsap.from(".home-team-culture .primary-button",{
    opacity:0,
    y:-30,
    duration:1,
    scrollTrigger:{
        trigger:".home-team-culture .primary-button",
        scroller:"body",
        start:"top 80%",
        scrub:1
    }
});

// Home Insights Animation
gsap.from(".home-insights-big-bar-animation-left",{
    opacity:0,
    x:-100,
    duration:0.7,
    scrollTrigger:{
        trigger:".home-insights-big-bar-animation-left",
        scroller:"body",
        start:"top 80%",
        scrub:1
    }
});
gsap.from(".home-insights-big-bar-animation-right",{
    opacity:0,
    x:100,
    duration:0.7,
    scrollTrigger:{
        trigger:".home-insights-big-bar-animation-right",
        scroller:"body",
        start:"top 80%",
        scrub:1
    }
});
gsap.from(".home-insights-cards .home-insights-card",{
    x:-30,
    opacity:0,
    delay:0.2,
    duration:0.6,
    stagger:0.2,
    scrollTrigger:{
        trigger:".home-insights-cards .home-insights-card",
        scroller:"body",
        start:"top 85%"
    }
});
gsap.from(".hcu-floating-items div",{
    y:30,
    duration:2,
    repeat:-1,
    ease: "slow(0.7,0.7,false)",
    yoyo:true,
    opacity:0.5
});

// Home-Contact-Us-Animation