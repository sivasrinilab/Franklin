

export default function init(el) {

	const titles = el.querySelectorAll(':scope > div:nth-child(odd)');

	titles.forEach((title) => {

		// Add a class to the title container

		title.classList.add('item-title');

		// Remove the empty div

		// title.querySelector(':scope > div:last-of-type').remove();

		// Add a class to the content

		title.nextElementSibling.classList.add('item-content');

		// Add a click handler to open the content

		$(".accordion-wrapper .item-content:not(:first)").css("display", "none");

		title.addEventListener('click', (event) => {

			//title.classList.toggle('open');

			var isOpen = $(this).hasClass("open");

			$(".accordion-wrapper .item-title").removeClass("open");

			if (!isOpen) {
				$(event.target.closest('.item-title')).addClass("open");
				

			} else {

				$(event.target.closest('.item-title')).removeClass("open");

			}

			//$(this).toggleClass("open");

			$(this).next(".item-content").css("display", function(_, value) {

				return value === "none" ? "block" : "none";

			});

			$(".accordion-wrapper .item-content").not($(this).next()).css("display", "none");

		});

		// Select the source element

 

	});

	//accordion

	var activeAccordion = document.querySelector('body > main > div.section.accordion-container .accordion-wrapper .item-title');

	if (activeAccordion !== null)

		document.querySelector('body > main > div.section.accordion-container .accordion-wrapper .item-title').classList.add('open');

 

}
