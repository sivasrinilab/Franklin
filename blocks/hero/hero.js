
const addEventListener = () => {
    const heroH1 = document.querySelector("#credit-cards");
    const nextSibling = document.querySelector("body > main > div:nth-child(2)");
    const nextSiblingWrapper = document.querySelector("body > main > div:nth-child(2) > div.default-content-wrapper");
    const heroPicure = document.querySelector("body > main > div.section.hero-container > div > div > div > div > picture");
    nextSiblingWrapper.prepend(heroH1);
    const clones = nextSibling.cloneNode(true);
    heroPicure.after(clones);
    nextSibling.remove();
};

document.addEventListener('DOMContentLoaded', addEventListener());
