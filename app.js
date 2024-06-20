const accordionTitle = document.querySelectorAll('.question-title');


accordionTitle.forEach((accordionTitle) => {
  accordionTitle.addEventListener('click', function (e) {
    const content = this.nextElementSibling;
    const icon = this.querySelector('.accordion-icon');

    if (content.style.display === 'block') {
      content.style.display = 'none';
      icon.src = "/assets/images/icon-plus.svg";

    } else {
      content.style.display = 'block';
        icon.src = "/assets/images/icon-minus.svg";
    }
  })
})