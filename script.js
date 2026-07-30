/*==========================================================
    PORTFOLIO V3.0
    Cloud Computing & Cybersecurity Portfolio
==========================================================*/


/*==========================================================
    DOM ELEMENTS
==========================================================*/

const header = document.querySelector("header");

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

const navItems = document.querySelectorAll(".nav-links a");

const backToTop = document.querySelector(".back-to-top");


/*==========================================================
    STICKY NAVBAR
==========================================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/*==========================================================
    MOBILE MENU
==========================================================*/

if(menuToggle){

menuToggle.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active");

});

}


/*==========================================================
    CLOSE MENU WHEN LINK IS CLICKED
==========================================================*/

navItems.forEach(link=>{

link.addEventListener("click",()=>{

    navLinks.classList.remove("active");

    menuToggle.classList.remove("active");

});

});


/*==========================================================
    ACTIVE NAVIGATION LINK
==========================================================*/

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.offsetHeight;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});


/*==========================================================
    BACK TO TOP
==========================================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backToTop.classList.add("active");

}else{

backToTop.classList.remove("active");

}

});


if(backToTop){

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}
/*==========================================================
    SCROLL REVEAL
==========================================================*/

const revealElements = document.querySelectorAll(
".reveal, .fade-left, .fade-right, .zoom"
);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{

threshold:0.15

});

revealElements.forEach(el=>{

revealObserver.observe(el);

});


/*==========================================================
    DASHBOARD COUNTERS
==========================================================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter=entry.target;

const target=+counter.dataset.target;

let current=0;

const increment=Math.max(1,Math.ceil(target/100));

const updateCounter=()=>{

current+=increment;

if(current>=target){

counter.innerText=target;

}else{

counter.innerText=current;

requestAnimationFrame(updateCounter);

}

};

updateCounter();

counterObserver.unobserve(counter);

});

},{

threshold:.5

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/*==========================================================
    PARALLAX GLOW
==========================================================*/

const glow=document.querySelector(".background-glow");

window.addEventListener("mousemove",(e)=>{

if(!glow) return;

const x=(e.clientX/window.innerWidth-.5)*30;

const y=(e.clientY/window.innerHeight-.5)*30;

glow.style.transform=`translate(${x}px, ${y}px)`;

});


/*==========================================================
    PROJECT CARD TILT
==========================================================*/

const projectCards=document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=((y/rect.height)-0.5)*-8;

const rotateY=((x/rect.width)-0.5)*8;

card.style.transform=`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});


/*==========================================================
    BUTTON RIPPLE EFFECT
==========================================================*/

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

const rect=button.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.classList.add("ripple");

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});
/*==========================================================
    TYPEWRITER EFFECT
==========================================================*/

const typingElement = document.querySelector(".typing");

const words = [
    "Cloud Computing",
    "Cybersecurity",
    "Azure",
    "Python Developer",
    "BCA Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

            charIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 40 : 90);

}

typeEffect();


/*==========================================================
    SMOOTH SCROLL
==========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});


/*==========================================================
    PRELOADER
==========================================================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".preloader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},600);

}

});


/*==========================================================
    DYNAMIC YEAR
==========================================================*/

const year=document.querySelector(".year");

if(year){

year.textContent=new Date().getFullYear();

}


/*==========================================================
    NETWORK PARTICLES
==========================================================*/

const canvas=document.getElementById("networkCanvas");

if(canvas){

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

const particles=[];

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

vx:(Math.random()-0.5)*0.4,

vy:(Math.random()-0.5)*0.4

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

p.x+=p.vx;

p.y+=p.vy;

if(p.x<0||p.x>canvas.width)p.vx*=-1;

if(p.y<0||p.y>canvas.height)p.vy*=-1;

ctx.beginPath();

ctx.arc(p.x,p.y,2,0,Math.PI*2);

ctx.fillStyle="#00C2FF";

ctx.fill();

for(let j=index+1;j<particles.length;j++){

const p2=particles[j];

const dx=p.x-p2.x;

const dy=p.y-p2.y;

const distance=Math.sqrt(dx*dx+dy*dy);

if(distance<120){

ctx.beginPath();

ctx.moveTo(p.x,p.y);

ctx.lineTo(p2.x,p2.y);

ctx.strokeStyle=`rgba(0,194,255,${
1-distance/120
})`;

ctx.stroke();

}

}

});

requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});

}


/*==========================================================
    IMAGE LAZY LOADING
==========================================================*/

const lazyImages=document.querySelectorAll("img[data-src]");

const imageObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const img=entry.target;

img.src=img.dataset.src;

img.removeAttribute("data-src");

imageObserver.unobserve(img);

}

});

});

lazyImages.forEach(img=>{

imageObserver.observe(img);

});


/*==========================================================
    CONSOLE MESSAGE
==========================================================*/

console.log(
"%cWelcome to Faizan Khan's Portfolio",
"color:#00C2FF;font-size:18px;font-weight:bold;"
);

console.log(
"%cCloud Computing & Cybersecurity",
"color:#38BDF8;font-size:14px;"
);