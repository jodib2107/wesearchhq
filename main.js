// WESEARCH — MAIN JAVASCRIPT

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// FAQ ANSWERS
const faqAnswers = [
  "WeSearch provides independent product research tailored to your individual requirements, comparing suitable options and presenting the findings and recommendations in a clear, bespoke report.",
  "WeSearch saves you the time and effort of researching, comparing and checking products yourself. We narrow the options based on your specific requirements and present the findings clearly so you can make the final decision.",
  "No. WeSearch does not sell products. You purchase directly from the retailer.",
  "Our research packages start from R450. The final fee depends on the scope, complexity and depth of research required.",
  "A 50% deposit is required before research begins. The remaining 50% is payable before the final WeSearch report is released.",
  "No. Prices, availability and stock can change. We verify information during the research process but cannot guarantee it will remain unchanged.",
  "Our recommendations are based on the brief agreed with you during Discovery. You have seven days after delivery to ask reasonable questions or clarify information already included in your report.",
  "AI supports limited information gathering, organisation and wording. Research, assessment, verification, shortlisting and final recommendations are handled by WeSearch."
];

document.querySelectorAll('.faq-hotspot').forEach((hotspot, index) => {
  hotspot.addEventListener('click', function(event) {
    event.preventDefault();

    const popup = document.createElement('div');
    popup.className = 'faq-popup';

    popup.innerHTML = `
      <div class="faq-popup-box">
        <button class="faq-popup-close">&times;</button>
        <p>${faqAnswers[index]}</p>
      </div>
    `;

    document.body.appendChild(popup);

    popup.querySelector('.faq-popup-close').onclick = () => popup.remove();

    popup.onclick = (event) => {
      if (event.target === popup) popup.remove();
    };
  });
});