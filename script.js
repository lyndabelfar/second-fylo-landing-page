const span2 = document.querySelector('.span-bottom');
const span1 = document.querySelector('.input-span')
const input = document.querySelector('#email-input');
const input2 = document.querySelector('.email-input');

const submitBtn = document.querySelector('.submit-btn')
const topBtn = document.querySelector('.top-btn')
submitBtn.addEventListener('click', ValidateEmail)
topBtn.addEventListener('click', ValidateEmail2)



function ValidateEmail() {

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
        span2.classList.remove('active')
  
    } else {
        span2.classList.add('active')

    }
  
}

function ValidateEmail2() {

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input2.value.match(validRegex)) {
        span1.classList.remove('active')
  
    } else {
        span1.classList.add('active')

    }
  
}