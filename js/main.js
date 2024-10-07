const faqsRows = document.querySelectorAll(".faqs .content .faqs-row");
const questions = document.querySelectorAll(
  ".faqs .content .faqs-row .question"
);

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    if (e.currentTarget.parentElement.classList.contains("active")) {
      faqsRows.forEach((row) => row.classList.remove("active"));
    } else {
      faqsRows.forEach((row) => row.classList.remove("active"));
      e.currentTarget.parentElement.classList.add("active");
    }
  });
});

