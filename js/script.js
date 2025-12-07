// Select elements
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const navMenu = document.getElementById("navMenu");

// Open mobile menu
menuBtn.addEventListener("click", () => {
  navMenu.classList.add("active");
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  document.body.style.overflow = "hidden"; // prevent background scroll
});

// Close mobile menu
closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
  document.body.style.overflow = "";
});

// Close menu if nav link clicked (for mobile)
navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      closeBtn.style.display = "none";
      menuBtn.style.display = "block";
      document.body.style.overflow = "";
    }
  });
});

//Reservation Form Logic //
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#reservation form");
  const button = form.querySelector("button");

  button.addEventListener("click", function () {
    let inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        input.style.border = "2px solid red";
        valid = false;
      } else {
        input.style.border = "1px solid #ccc";
      }
    });

    if (!valid) {
      alert("Please fill out all fields!");
      return;
    }

    alert("Your reservation has been submitted!");
    form.reset();
  });
});

