/* =====================================================
   AYOMIDE BOLADELE — PERSONAL BRAND WEBSITE V2
   ===================================================== */


// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ================= CURRENT YEAR =================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".section-heading, .direction-card, .timeline-item, .project-card, .value, .leadership-main, .leadership-list > div"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

            }

        });

    },

    {
        threshold: 0.1
    }

);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});
