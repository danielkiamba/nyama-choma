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
    });
});

$(document).ready(function() {
    $(`.burger-nav`).on(`click`, function() {
        $(`header nav ul`).toggleClass(`open`);
    })
});