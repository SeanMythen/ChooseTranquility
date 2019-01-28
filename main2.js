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
var testimonialsButton = document.getElementById("testimonials-link")


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
    testimonialsButton.style.color=('black') 

  } else {
    navbar.classList.remove("sticky") 
    navbar.style.background=('url(images2/hero.jpg)')
    navbar.style.backgroundAttachment=('fixed')
    navbar.style.backgroundSize=('cover')
    home.style.color=('white') 
    contact.style.color=('white') 
    faq.style.color=('white') 
    testimonialsButton.style.color=('white') 
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


let count = 2;

let testimonialText = document.getElementById('testimonialText');

testimonialText.addEventListener('click', function () {
  testimonialText.innerHTML = (testimonials[count])
  count++;
  if (count == 5) {
    count = 1;
  }
  console.log(count)
})


let testimonials = {
  1: `I had my first vibration sound therapy session at Choose Tranquility and was very impressed. I have an incredibly stressful new job and am very tense all the time. I also have a hard time falling asleep. During the vibration session, I actually fell asleep. I have had numerous massages and pampering facials and have NEVER fallen asleep during any of those treatments. The vibration session was truly relaxing. Not only did I fall asleep, but I felt incredibly calm and at east the rest of the day. Sonia is very professional, explains the technique to you beforehand ensuring you are completely comfortable with everything. I highly recommend Sonia and vibration sound therapy - it really works! <br><br>- Desiree Khan` ,
  2: `I took a one on one chair yoga class with Sonia in January of this year. I have severe osteoarthritis and at that time I had been diagnosed with lymphedema. So I was wrapped in bandages from my knees to my feet. The atmosphere was extremely relaxing and Sonia was aware of my physical limitations so she proceeded slowly.The class lasted sbout an hour and I was totally relaxed while doing the positions and as an added benefit had no pain for several hours afterward.  Sonia is an easy going person who is passuonate about the art of relaxation.I enjoyed my time with her immensely. <br><br>- Denise Kavanaugh`,
  3: `I did the one hour massage. I was skeptical at first but Sonia explained the therapy very well. I was pleasantly surprised at the calmness and bell sounds that relaxed my body. Truly worth my time. I'm sure I will continue with Sonia as my massage therapist. <br><br>- Terry Littleton`,
  4: `The massage I received from Sonia was a truly eye opening experience! Or should I say eye closing. This was one of the most relaxing massages I've ever received. It's been a long time since I experienced that much serenity and peace. The rhytmic sounds from the bowls and the deep yet gentle vibrations eased me into a light sleep and I woke up feeling calmer and rested, ready to take on the rest of my day! Thank you Sonia for this experience. <br><br>- Amanda M`,
}

window.onload = setInterval(function(){
  testimonialText.innerHTML = (testimonials[count])
  count++;
  if (count == 5) {
    count = 1;
  }
  console.log(count)
}, 2000);