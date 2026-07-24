// ==========================
// MOBILE MENU
// ==========================

const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");

if (menu && navbar) {
    menu.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}

// ==========================
// CLOSE MENU AFTER CLICK
// ==========================

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        if (navbar) {
            navbar.classList.remove("active");
        }
    });
});

// ==========================
// HEADER BACKGROUND
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.style.background = "rgba(0,0,0,0.92)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(0,0,0,.55)";
        header.style.boxShadow = "none";

    }

});

// ==========================
// SCROLL TO TOP
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 400);

    }

});

// ==========================
// FADE ANIMATION
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".fade-up").forEach(el => {

    observer.observe(el);

});

// ==========================
// ACTIVE NAVIGATION
// ==========================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {

        link.classList.add("active");

    }

});

// ==========================
// BUTTON RIPPLE EFFECT
// ==========================

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        ripple.className = "ripple";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

// ==========================
// COUNTER ANIMATION
// ==========================

const counters = document.querySelectorAll(".counter-box h1");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    if (isNaN(target)) return;

    let count = 0;

    const speed = target / 100;

    const update = () => {

        if (count < target) {

            count += speed;

            counter.innerText = Math.ceil(count) + "+";

            requestAnimationFrame(update);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

});

// ==========================
// IMAGE HOVER ZOOM
// ==========================

document.querySelectorAll(".card img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

// ==========================
// CONSOLE MESSAGE
// ==========================

console.log("====================================");
console.log(" Phoenix Digital Website Loaded ");
console.log(" Designed by Phoenix Digital ");
console.log("====================================");

// ==========================
// CONTACT FORM WHATSAPP
// ==========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value;

        const text =
`*Phoenix Digital Contact Form*

👤 Name: ${name}
📧 Email: ${email}
📱 Mobile: ${mobile}
🎨 Service: ${service}

📝 Message:
${message}`;

        window.open(
            "https://wa.me/918122622797?text=" + encodeURIComponent(text),
            "_blank"
        );

    });
}
// ==========================
// SOCIAL ICON RIPPLE EFFECT
// ==========================

document.querySelectorAll(".social a").forEach(icon => {

    icon.addEventListener("click", function () {

        this.style.transform = "scale(0.9)";

        setTimeout(() => {
            this.style.transform = "";
        }, 150);

    });

});
