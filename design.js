document.addEventListener('DOMContentLoaded', function() {
    let myContent = document.getElementById('content');
    let myButton = document.getElementById('show-more');

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
}); 
document.addEventListener('DOMContentLoaded', function() {
document.getElementById(`dropmenu`).addEventListener(`click`, function() {
    event.preventDefault();
var x = document.getElementById(`nav-menu`);
if(x.classList.contains(`opena`)) {
    x.classList.remove(`opena`);

} else {
    x.classList.add(`opena`);
}


})
}); 



const navigationMenu = document.querySelector(`.dropdown`);
const dropdownMenu = document.querySelector(`.dropdown-menu`);

navigationMenu.addEventListener(`click`, () => {
    dropdownMenu.classList.toggle(`show-menu`);
});

/*
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach((dropdown) => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');

        toggle.addEventListener('click', (e) => {
            e.preventDefault();

            // Close all other dropdowns (accordion behavior)
            dropdowns.forEach((otherDropdown) => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });

            // Toggle the clicked dropdown
            dropdown.classList.toggle('active');
        });
    });
}); */

