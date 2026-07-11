// REMKIM V6 starter
/*==================================================
SCROLL REVEAL
==================================================*/

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const top = section.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

window.addEventListener("load", revealSections);
/*==================================================
HEADER SCROLL
==================================================*/

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});
/*==================================================
ACTIVE MENU
==================================================*/

const sections=document.querySelectorAll("section[id]");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-140;
        const height=section.offsetHeight;

        if(scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});
/*==================================================
MOBILE MENU
==================================================*/

const menuToggle=document.querySelector(".menu-toggle");
const nav=document.querySelector("nav");

menuToggle.addEventListener("click",()=>{

    nav.classList.toggle("open");

});
/*==================================================
MENU TOGGLE ANIMATION
==================================================*/

menuToggle.addEventListener("click",()=>{

    menuToggle.classList.toggle("active");

});
/*==================================================
AUTO CLOSE MENU
==================================================*/

const menuLinks=document.querySelectorAll("nav a");

menuLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("open");

        menuToggle.classList.remove("active");

    });

});
/*==================================================
CLICK OUTSIDE
==================================================*/

document.addEventListener("click",(e)=>{

    if(

        !nav.contains(e.target)

        &&

        !menuToggle.contains(e.target)

    ){

        nav.classList.remove("open");

        menuToggle.classList.remove("active");

    }

});
/*==================================================
CLOSE MENU ON SCROLL
==================================================*/

window.addEventListener("scroll",()=>{

    nav.classList.remove("open");

    menuToggle.classList.remove("active");

});
/*==================================================
PAGE PROGRESS
==================================================*/

const progressBar=document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

    const scrollTop=window.pageYOffset;

    const docHeight=document.documentElement.scrollHeight-window.innerHeight;

    const progress=(scrollTop/docHeight)*100;

    progressBar.style.width=progress+"%";

});
/*==================================================
BACK TO TOP
==================================================*/

const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});