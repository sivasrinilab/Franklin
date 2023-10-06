export default function init(el) {
  const titles = el.querySelectorAll(':scope > div:nth-child(odd)');
  titles.forEach((title) => {
    // Add a class to the title container
    title.classList.add('item-title');
    // Add a class to the content
    title.nextElementSibling.classList.add('item-content');
    // Add a click handler to open/close the content
    title.addEventListener('click', () => {
      // Toggle the 'open' class for the clicked title
      title.classList.toggle('open');
      // Close other open accordions
      titles.forEach((otherTitle) => {
        if (otherTitle !== title) {
          otherTitle.classList.remove('open');
        }
      });
    });
  });

  //accordion
  const activeAccordion = document.querySelector('body > main > div.section.accordion-container .accordion-wrapper .item-title');
  if (activeAccordion !== null) {
    activeAccordion.classList.add('open');
  }
}
