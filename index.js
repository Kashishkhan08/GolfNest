var crsr=document.querySelector("#cursor")
var crsrBlur=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
    crsrBlur.style.left=dets.x-200 +"px";
    crsrBlur.style.top=dets.y-200+"px";
})

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3;
        crsr.style.border="1px solid white";
        crsr.style.backgroundColor="transparent";
    });
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border="0px solid #95C11E";
        crsr.style.backgroundColor="#95C11E";
    });
});

// const qBtn=document.getElementsByClassName('q1-btn');
// const ans=document.querySelector('.ans1');

// qBtn.addEventListener("click",function(){
// ans.style.opacity=1;
// qBtn.style.border="white";
// });

// function show(){
//     ans.style.opacity=1;
// }


var h3all=document.querySelectorAll("#footer h3")
h3all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3;
        crsr.style.border="1px solid white";
        crsr.style.backgroundColor="transparent";
    });
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border="0px solid #95C11E";
        crsr.style.backgroundColor="#95C11E";
        
    });
});

gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        scrub:1,
        end:"top -11%"
    },
}) ;



gsap.to("#footer",{
    backgroundColor:"black",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#footer",
        scroller:"body",
        start:"top -10%",
        scrub:1,
        end:"top -11%"
    },
}) ;
gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    },
});  

gsap.from("#about-us img , #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    },
});

gsap.from(".card",{
    scale:0.8,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    },
});

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    },
});

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    },
});

gsap.from("#page4 h1",{
y:50,
scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    start:"top 75%",
    end:"top 70%",
    scrub:3
},
});

// let grpbttn=document.querySelector('#groupButton');
// let profileImage=document.querySelector('.profile-image');
// let headingGolf=document.querySelector('.heading');

// grpbttn.addEventListener("click",()=>{
//     profileImage.style.src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/03/lessons-group.jpg?strip=all&lossy=1&sharp=1&ssl=1";
//     headingGolf.innerHTML='Golf lessons';

// });

// // function group(){
// //     let headingGolf=document.querySelector('.heading');
// //     headingGolf.innerHTML="GOLF LESSONS";
// // }

// let qBtn=document.querySelector('.q1 button');
// let ans=document.querySelector('.ans1');

// qBtn.addEventListener("click",function(){
// qBtn.style.scale=2;
// qBtn.style.backgroundColor="white";
// });


// let grp=document.querySelector('#group');
// let dp=document.querySelector('.profile-image');

// grp.addEventListener("click",()=>{
//     dp.style.src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-lessons.jpg?strip=all&lossy=1&sharp=1&ssl=1"
// })