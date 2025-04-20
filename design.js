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

//   testimonies

let testimonialIndex = 0;
const testimonialTrack = document.querySelector('.testimonial-track');
const testimonials = document.querySelectorAll('.testimonial');
const testimonialDots = document.getElementById('testimonialDots');

// Create dots
testimonials.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => showTestimonial(i));
  testimonialDots.appendChild(dot);
});

function updateTestimonialDots() {
  const dots = testimonialDots.querySelectorAll('span');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[testimonialIndex].classList.add('active');
}

function showTestimonial(index) {
  testimonialIndex = index;
  testimonialTrack.style.transform = `translateX(-${testimonialIndex * 100}%)`;
  updateTestimonialDots();
}

function nextTestimonial() {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  showTestimonial(testimonialIndex);
}

function prevTestimonial() {
  testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(testimonialIndex);
}

document.getElementById('testimonialNext').addEventListener('click', nextTestimonial);
document.getElementById('testimonialPrev').addEventListener('click', prevTestimonial);

// Start slider
showTestimonial(testimonialIndex);
setInterval(nextTestimonial, 5000);

// featured dishes

let dishIndex = 0;
const dishTrack = document.querySelector('.featured-track');
const dishes = document.querySelectorAll('.featured-dish');
const dishDots = document.getElementById('dishDots');

// Create dots
dishes.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => showDish(i));
  dishDots.appendChild(dot);
});

function updateDishDots() {
  const dots = dishDots.querySelectorAll('span');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[dishIndex].classList.add('active');
}

function showDish(index) {
  dishIndex = index;
  dishTrack.style.transform = `translateX(-${dishIndex * 100}%)`;
  updateDishDots();
}

function nextDish() {
  dishIndex = (dishIndex + 1) % dishes.length;
  showDish(dishIndex);
}

function prevDish() {
  dishIndex = (dishIndex - 1 + dishes.length) % dishes.length;
  showDish(dishIndex);
}

document.getElementById('dishNext').addEventListener('click', nextDish);
document.getElementById('dishPrev').addEventListener('click', prevDish);

showDish(dishIndex);
setInterval(nextDish, 7000);


let dishInterval;

function startDishAutoSlide() {
  dishInterval = setInterval(nextDish, 5000);
}

function stopDishAutoSlide() {
  clearInterval(dishInterval);
}

// Start sliding on load
startDishAutoSlide();

// Pause/resume on hover
const featuredSlider = document.querySelector('.featured-slider');
featuredSlider.addEventListener('mouseenter', stopDishAutoSlide);
featuredSlider.addEventListener('mouseleave', startDishAutoSlide);







