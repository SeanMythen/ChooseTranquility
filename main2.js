let body = document.getElementById('body');

window.onload = function(){
    body.classList.remove('preload')
};



// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navigation");
var home = document.getElementById("home-link");
var contact = document.getElementById("contact-link");
var faq = document.getElementById("faq-link");


// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset - 9 >= sticky) {
    navbar.classList.add("sticky")
    navbar.style.background=('rgba(255, 255, 255, 1)')   
    home.style.color=('black') 
    contact.style.color=('black') 
    faq.style.color=('black') 

  } else {
    navbar.classList.remove("sticky") 
    navbar.style.background=('url(images2/hero.jpg)')
    navbar.style.backgroundAttachment=('fixed')
    navbar.style.backgroundSize=('cover')
    home.style.color=('white') 
    contact.style.color=('white') 
    faq.style.color=('white') 
  }
}

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");

let form = document.getElementById('fullForm')

let button = document.getElementById('button');




function submitClear() {

 setTimeout(function(){
  firstName.value = ("")
  lastName.value = ("")
  email.value = ("")
  phone.value = ("")
  message.value = ("")
  button.value = "Thank you!";
 }, 2500)

 setTimeout(function(){
  button.value = "Send";
 }, 15000)

 

}




