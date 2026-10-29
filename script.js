
const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// Mobile navigation
menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "✕" : "☰";
});

// Close mobile menu after choosing a section
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

// Automatically update copyright year
document.querySelector("#year").textContent = new Date().getFullYear();

// Reveal sections as they enter the viewport
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}
