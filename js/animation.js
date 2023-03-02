$(document).ready(function(){
    
    
    // main container animation
    $("#btn-profile, #btn-resume, #btn-portfolio").on('click', () => {
        gsap.fromTo("#main-container", {x: 300, opacity: 0}, {x: 0, opacity: 1, duration: .5})
    })
    
    
    // Contact boxes
    $('.contact-container > a').on('mouseenter', function() {
        gsap.to($(this), {scale: 1.1, duration: .3});
        console.log('------');
    })
    $('.contact-container > a').on('mouseleave', function() {
        gsap.to($(this), {scale: 1, duration: .3});
    })
    
    //buttons 
    $('.see-project-btn').on('mouseenter', function() {
        gsap.to($(this), {scale: 1.2, duration: .3});
        
    })
    $('.see-project-btn').on('mouseleave', function() {
        gsap.to($(this), {scale: 1, duration: .3});
    })

    $('.download-btn').on('mouseenter', function() {
        gsap.to($(this), {scale: 1.2, duration: .3});
        
    })

    $('.download-btn').on('mouseleave', function() {
        gsap.to($(this), {scale: 1, duration: .3});
    })


    
    
    
    // gsap.to(".gs_reveal_fromRight", {
        //     x:100,
        //     duration: 2,
        //     ScrollTrigger: {
            //         ScrollTrigger: ".gs_reveal_fromRight"
            //         // start: "top center"
            //         // markers: true
            //     }
            // })
            
//             gsap.registerPlugin(ScrollTrigger)
//     /////////////////////////////////////////////////////////////////
//     function animateFrom(elem, direction) {

//   direction = direction || 1;
//   var x = 0,
//       y = direction * 100;
//   if(elem.classList.contains("gs_reveal_fromLeft")) {
//     x = -50;
//     y = 0;
//   } else if (elem.classList.contains("gs_reveal_fromRight")) {
//     x = 50;
//     y = 0;
//   }
//   elem.style.transform = "translate(" + x + "px, " + y + "px)";
//   elem.style.opacity = "0";
//   gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
//     duration: 1.25, 
//     x: 0,
//     y: 0, 
//     autoAlpha: 1, 
//     ease: "expo", 
//     overwrite: "auto"
//   });
// }

// function hide(elem) {
//   gsap.set(elem, {autoAlpha: 0});
// }

// document.addEventListener("DOMContentLoaded", function() {
//   gsap.registerPlugin(ScrollTrigger);
  
//   gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
//     console.log("------------");
//     hide(elem); // assure that the element is hidden when scrolled into view
    
//     ScrollTrigger.create({
//       trigger: elem,
//       markers: true,
//       onEnter: function() { animateFrom(elem) }, 
//       onEnterBack: function() { animateFrom(elem, -1) },
//       onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
//     });
//   });
// });

//////////////////////////////////////////////////////////



  
    
});





