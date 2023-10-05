export default function init(el) {
	const titles = el.querySelectorAll(':scope > div:nth-child(odd)');
	
	//accordion
	var activeAccordion = document.querySelector('body > main > div.section.accordion-container .accordion-wrapper .item-title');
	if (activeAccordion !== null)
		document.querySelector('body > main > div.section.accordion-container .accordion-wrapper .item-title').classList.add('open');

}

