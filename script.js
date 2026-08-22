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
