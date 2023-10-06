export default function init(el) {
    const titles = el.querySelectorAll(':scope > div:nth-child(odd)');
    
    titles.forEach((title) => {
        // Add a class to the title container
        title.classList.add('item-title');
        
        // Remove the empty div (if necessary)
        // title.querySelector(':scope > div:last-of-type').remove();
        
        // Add a class to the content
        const content = title.nextElementSibling;
        content.classList.add('item-content');
        
        // Add a click handler to open/close the content
        title.addEventListener('click', () => {
            // Close all other accordion sections
            titles.forEach((otherTitle) => {
                if (otherTitle !== title) {
                    otherTitle.classList.remove('open');
                    otherTitle.nextElementSibling.style.maxHeight = '0';
                }
            });
            
            // Toggle the open class and expand/collapse the content
            title.classList.toggle('open');
            if (title.classList.contains('open')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        });
        
        // Check if this accordion item should be initially open
        if (title.classList.contains('open')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
}
