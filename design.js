document.addEventListener('DOMContentLoaded', function() {
    let myContent = document.getElementById('content');
    let myButton = document.getElementById('show-more');

    myButton.addEventListener('click', function() {
<<<<<<< HEAD
        event.preventDefault
=======
>>>>>>> 127c3af0ee1570f87f9aec2e761141865a179f15
        if (myContent.classList.contains('open')) {
            // shrink the box
            myContent.classList.remove('open');
            myButton.innerHTML = 'Show More';
        } else {
            // expand the box
            myContent.classList.add('open');
            myButton.innerHTML = 'Show Less';
        }
<<<<<<< HEAD
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
})


=======
    });
});

$(document).ready(function() {
    $(`.burger-nav`).on(`click`, function() {
        $(`header nav ul`).toggleClass(`open`);
    })
});
>>>>>>> 127c3af0ee1570f87f9aec2e761141865a179f15
