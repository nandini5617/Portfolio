// ==============================
// Smooth Scrolling
// ==============================

document.querySelectorAll("nav a").forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ==============================
// Active Navbar Link
// ==============================

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


// ==============================
// Reveal Sections on Scroll
// ==============================

const revealSections = document.querySelectorAll(".section");

function reveal() {

    revealSections.forEach(section => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// ==============================
// Navbar Background on Scroll
// ==============================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("sticky");

    }

    else {

        navbar.classList.remove("sticky");

    }

});


// ==============================
// Typing Animation
// ==============================

const typingElement = document.querySelector(".hero-text p");

const text = "Aspiring Software Developer | Tech Enthusiast";

typingElement.innerHTML = "";

let index = 0;

function typeWriter() {

    if (index < text.length) {

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 60);

    }

}

typeWriter();


// ==============================
// Back To Top Button
// ==============================

// Create Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

// Show/Hide

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

// Scroll to Top

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==============================
// Hero Fade In
// ==============================

window.addEventListener("load", () => {

    document.querySelector(".hero").classList.add("showHero");

});