document.addEventListener('DOMContentLoaded', function() {
    // handle 'show more' button functionality
    let myContent = document.getElementById('content');
    let myButton = document.getElementById('show-more');

    if (myButton && myContent){
    myButton.addEventListener('click', function() {
       
        if (myContent.classList.contains('open')) {
            // shrink the box
            myContent.classList.remove('open');
            myButton.innerHTML = 'Show More';
        } else {
            // expand the box
            myContent.classList.add('open');
            myButton.innerHTML = 'Show Less';
        }
    })

}

})


// navbar ul dropmenu

document.addEventListener('DOMContentLoaded', function() {
document.getElementById(`dropmenu`).addEventListener(`click`, function() {
    event.preventDefault();
let x = document.getElementById(`nav-menu`);
if(x.classList.contains(`opena`)) {
    x.classList.remove(`opena`);

} else {
    x.classList.add(`opena`);
}


})
}); 

// dropdown menu onclick. min-width of 900px


const navigationMenu = document.querySelector(`.dropdown`);
const dropdownMenu = document.querySelector(`.dropdown-menu`);

navigationMenu.addEventListener(`click`, () => {
    dropdownMenu.classList.toggle(`show-menu`);
});

// drop down menu max width 600px

const dropMenu = document.querySelector(`.dropdown-toggle`);
const dropContent = document.querySelector(`.dropdown-menu`);
const deuces = document.querySelector(`.deuce`);

deuces.addEventListener(`click`, () => {
    
    dropContent.classList.toggle(`show`);
})


dropMenu.addEventListener(`click`, (event) => {
    event.preventDefault()
    dropMenu.classList.toggle(`show`);
    
});

// dotted icon


  const toggleBtn = document.getElementById('toggleSocial');
  const floatingSocial = document.getElementById('floatingSocial');
  const toggleIcon = document.getElementById('toggleIcon');

  toggleBtn.addEventListener('click', () => {
    floatingSocial.style.display = floatingSocial.style.display === 'flex' ? 'none' : 'flex';
    toggleIcon.classList.toggle('fa-ellipsis-h');
    toggleIcon.classList.toggle('fa-times');
  });






