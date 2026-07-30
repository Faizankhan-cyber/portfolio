// ======================================
// Typing Animation
// ======================================

const roles = [
    "Cloud & Cybersecurity Student",
    "Python Learner",
    "Azure Security Learner",
    "Future Cloud Security Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent = currentRole.substring(0, charIndex++);

    } else {

        typingElement.textContent = currentRole.substring(0, charIndex--);

    }

    let speed = deleting ? 50 : 90;

    if (!deleting && charIndex > currentRole.length) {

        deleting = true;
        speed = 1800;

    }

    if (deleting && charIndex === 0) {

        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();


// ======================================
// Active Navbar
// ======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ======================================
// Scroll Reveal Animation
// ======================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ======================================
// Scroll To Top Button
// ======================================

const topButton = document.createElement("button");

topButton.id = "topBtn";
topButton.innerHTML = "↑";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "flex";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ======================================
// Dynamic Footer Year
// ======================================

const footer = document.querySelector("footer");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Faizan Khan | Built with HTML, CSS & JavaScript`;

}


// ======================================
// Navbar Shadow
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ======================================
// Smooth Scroll
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ======================================
// Profile Image Hover Effect
// ======================================

const image = document.querySelector(".image-box");

if (image) {

    image.addEventListener("mousemove", () => {

        image.style.transform = "scale(1.04) rotate(2deg)";
        image.style.transition = ".35s";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1) rotate(0deg)";

    });

}


// ======================================
// Fade In Page
// ======================================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});