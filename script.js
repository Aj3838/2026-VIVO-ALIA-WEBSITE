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

    // Fecha todos
    faqItems.forEach((faqItem) => {
      faqItem.classList.remove("active");
    });

    // Se o clicado estava fechado, abre
    if (!isActive) {
      item.classList.add("active");
    }
  });
});

// =====================================================
// SOMBRA DA NAVBAR AO ROLAR
// Dá profundidade à navbar assim que a página sai do topo.
// =====================================================
window.addEventListener(
  "scroll",
  () => {
    navbar.classList.toggle("scrolled", window.scrollY > 12);
  },
  { passive: true },
);

// =====================================================
// SCROLL REVEAL
// Anima a entrada de seções, títulos e dos cards de perfil
// conforme eles entram na viewport, deixando o fluxo da
// página mais orgânico em vez de tudo aparecer estático.
// =====================================================
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
  // Fallback: navegadores sem suporte simplesmente mostram tudo.
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}
