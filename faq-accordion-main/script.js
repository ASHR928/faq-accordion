document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
      const button = header.querySelector('.btn');
      const content = item.querySelector('.accordion-content');

      header.addEventListener('click', function () {
        item.classList.toggle('active');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        button.classList.toggle('open');
      });
    });
  });