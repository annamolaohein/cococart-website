const faqTitle = document.querySelector(".faq-title");
const faqContent = document.querySelector(".faq-content");
const faqIcon = document.querySelector(".faq-icon");

faqTitle.onclick = () => {
  faqContent.classList.toggle("show");
  faqIcon.classList.toggle("rotate-45");
};

