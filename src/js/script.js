(function() {

    // Toggle Main Menu Mobile
    const control = document.getElementById('main-nav-toggle');
    control.addEventListener('click', (e) => {
      const control = e.target;
      const body = document.querySelector('body');
      const expanded = body.classList.contains('show-nav');

      if (expanded) {
        control.setAttribute('aria-expanded', 'false');
      } else {
        control.setAttribute('aria-expanded', 'false');
      }
      body.classList.toggle('show-nav');
    });

    // FAQ Section 
    const faqs = document.querySelectorAll('.faq-question');
    faqs.forEach((faq) => {
      faq.addEventListener('click', (e) => {
        const question = e.target;
        const answer = question.nextElementSibling;
        answer.classList.toggle('active');
      })
    })

})();