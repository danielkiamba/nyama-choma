document.addEventListener('DOMContentLoaded', function() {
    let myContent = document.getElementById('content');
    let myButton = document.getElementById('show-more');

    myButton.addEventListener('click', function() {
        event.preventDefault
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
})


