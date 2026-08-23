const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const faqItems = document.querySelectorAll(".faq-item");

menuToggle.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", String(isOpen));

  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");

  button.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach((faqItem) => {
      faqItem.classList.remove("active");
    });

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

window.addEventListener(
  "scroll",
  () => {
    navbar.classList.toggle("scrolled", window.scrollY > 12);
  },
  { passive: true },
);

const revealTargets = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealTargets.length) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -60px 0px",
    },
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}
