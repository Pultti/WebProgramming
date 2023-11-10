
// Slides for the front page

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('prev').addEventListener('click', function() {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  slides[currentSlide].style.opacity = 1;
});

document.getElementById('next').addEventListener('click', function() {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].style.opacity = 1;
});





// Object n heritance






// contact form
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#contact-form form');
  const purposePriceCheckbox = document.querySelector('input[name="purpose-price"]');
  const purposeProjectCheckbox = document.querySelector('input[name="purpose-project"]');

  const nameInput = document.querySelector('#name');
  const subjectInput = document.querySelector('#subject');
  const messageTextarea = document.querySelector('#message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    

    

    // Purpose boxes
    let purposeMessage = '';
    
    if (purposePriceCheckbox.checked && purposeProjectCheckbox.checked) {
      purposeMessage = 'Price & project';
    } else if (purposePriceCheckbox.checked) {
      purposeMessage = 'Price';
    } else if (purposeProjectCheckbox.checked) {
      purposeMessage = 'Project';
    } else {
      purposeMessage = 'Did not specify a purpose.';
    }
     
    const name = nameInput.value;
    const subject = subjectInput.value;
    const message = messageTextarea.value;


    alert('Purpose: ' + purposeMessage + '\n' +
    'Subject: ' + subject + '\n' +
    'Message: ' + message + '\n\n\n' + 'Form submitted successfully, but not saved anywhere.' + '\n' +
    'My linkedIn hyperlink is right above the form');
});
}); 


// Addional info toggle - LinkedIn
function toggleAdditionalInfo() {
  var additionalInfo = document.getElementById('additionalInfo');
  if (additionalInfo.style.display === 'block' || additionalInfo.style.display === '') {
      additionalInfo.style.display = 'none';
  } else {
      additionalInfo.style.display = 'block';
  }
}



