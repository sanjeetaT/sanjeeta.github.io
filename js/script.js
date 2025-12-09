
   /* Smooth Scroll for Navbar*/
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const section = document.querySelector(this.hash);
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});


/*  Back to Top Button*/
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);


/* 
   3. Contact Form Validation */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();
    const status = document.getElementById("formStatus");

    if (!name || !email || !message) {
      status.style.color = "red";
      status.textContent = "Please fill out all fields.";
      return;
    }

    status.style.color = "green";
    status.textContent = `Thank you, ${name}! Your message was sent successfully.`;

    this.reset();
  });
}


/* 4. Highlight Active Navbar Link */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});


/* 5. Dark Mode Toggle */
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


/*  Fade-In Elements on Scroll*/
const fadeElements = document.querySelectorAll(".fade-in");

function checkFade() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);


