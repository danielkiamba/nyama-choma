const accordionItem = document.querySelector(`.accordion-item`);
const accordionContent = document.querySelector(`.accordion-content`);

accordionItem.addEventListener(`click`, () => {

accordionContent.classList.toggle(`active`);

})