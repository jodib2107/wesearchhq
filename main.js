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

// FAQ clickable rows
document.querySelectorAll('.faq-hotspot').forEach((hotspot, index) => {
  hotspot.addEventListener('click', function (event) {
    event.preventDefault();

    const faqItems = document.querySelectorAll('.faq-item');
    const selectedItem = faqItems[index];

    if (!selectedItem) return;

    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== selectedItem) {
        item.removeAttribute('open');
      }
    });

    selectedItem.setAttribute('open', '');

    const overlay = document.querySelector('.faq-overlay');
    overlay.style.display = 'block';

 
  });
});