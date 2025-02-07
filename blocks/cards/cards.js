import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.innerHTML = row.innerHTML;
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);    
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
  // Find the existing strong tag in hero for updating input
var strongTag = document.querySelector(".button-container strong");

if (strongTag) {
    // Check if the input element already exists within the strong tag
    var inputElement = strongTag.querySelector("input.enteryouremail");

    if (!inputElement) {
        // Create a new input element
        inputElement = document.createElement("input");
        inputElement.type = "email"; // Set input type to 'email'
        inputElement.placeholder = "Enter email address"; // Set the placeholder text
        inputElement.className = "enteryouremail"; // Add a class to the input element

        // Add the input element to the existing strong tag
        strongTag.appendChild(inputElement);
    }
}

var cards=document.querySelectorAll(".section.cards-container")
if(cards){
   // cards[0].classList.add("card-details")
    cards[3].classList.add("card-details")
    cards[2].classList.add("card-details")
}
document.querySelector("main > div:nth-child(7)").classList.add('large-cards');
document.querySelector("main > div:nth-child(9)").classList.add('large-cards');
setTimeout(function() {
  document.querySelectorAll(".large-cards ul li").forEach((ele) => {
    ele.querySelector("div:last-child").classList.add('card-highlight');
    ele.querySelector("div:nth-child(2)").classList.add('card-middle');
  }); 
}, 200);
setTimeout(function() {
  let liEle = document.querySelectorAll(".large-cards ul li"); 
  let paraLen =  document.querySelectorAll(".large-cards ul li:first-child .cards-card-image > p").length;
  if(paraLen < 2) {
    liEle.forEach((li) => {
      let cardBtn = li.querySelector("div:last-child p:nth-child(1)").innerHTML;
      let cardRating = li.querySelector("div:last-child p:nth-child(2)").innerHTML;
      let imgEle = li.querySelector(".cards-card-image");
      let btnP = document.createElement('p');
      let logoP = document.createElement('p');
      logoP.innerHTML = cardRating;
      btnP.innerHTML = cardBtn;
      console.log(btnP);
      imgEle.append(logoP)
      imgEle.append(btnP);
    });  
  }
}, 500);

  
}
