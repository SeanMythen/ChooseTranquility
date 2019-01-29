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


let count = Math.floor(Math.random() * 7) + 1;


let testimonialText = document.getElementById('justText');

let rightArrow = document.getElementById('arrowRight');
let leftArrow = document.getElementById('arrowLeft');


rightArrow.addEventListener('click', function () {
  count++;
  console.log(count)
  if (count == 8) {
    count = 1;
  }
  testimonialText.innerHTML = (testimonials[count])
  
 
  
})


leftArrow.addEventListener('click', function () {
  count--;
  console.log(count)
  if (count == 0) {
    count = 7;
  }
  testimonialText.innerHTML = (testimonials[count])  
  
  
})


let testimonials = {
  1: `I had my first vibration sound therapy session at Choose Tranquility and was very impressed. I have an incredibly stressful new job and am very tense all the time. I also have a hard time falling asleep. During the vibration session, I actually fell asleep. I have had numerous massages and pampering facials and have NEVER fallen asleep during any of those treatments. The vibration session was truly relaxing. Not only did I fall asleep, but I felt incredibly calm and at ease the rest of the day. Sonia is very professional, explains the technique to you beforehand ensuring you are completely comfortable with everything. I highly recommend Sonia and vibration sound therapy - it really works! <br><br>- Desiree K.`,
  2: `I took a one on one chair yoga class with Sonia in January of this year. I have severe osteoarthritis and at that time I had been diagnosed with lymphedema. So I was wrapped in bandages from my knees to my feet. The atmosphere was extremely relaxing and Sonia was aware of my physical limitations so she proceeded slowly. The class lasted about an hour and I was totally relaxed while doing the positions and as an added benefit had no pain for several hours afterward. Sonia is an easy going person who is passionate about the art of relaxation. I enjoyed my time with her immensely. <br><br>- Denise K.`,
  3: `I did the one hour massage. I was skeptical at first but Sonia explained the therapy very well. I was pleasantly surprised at the calmness and bell sounds that relaxed my body. Truly worth my time. I'm sure I will continue with Sonia as my massage therapist. <br><br>- Terry L.`,
  4: `The massage I received from Sonia was a truly eye opening experience! Or should I say eye closing. This was one of the most relaxing massages I've ever received. It's been a long time since I experienced that much serenity and peace. The rhythmic sounds from the bowls and the deep yet gentle vibrations eased me into a light sleep and I woke up feeling calmer and rested, ready to take on the rest of my day! Thank you Sonia for this experience. <br><br>- Amanda M.`,
  5: `Sonia has a down to earth, grounding presence which makes relaxation easy. <br><br>- Angelica O.`,
  6: `What a wonderful, relaxing experience! As relaxing as, if not more so than, a traditional massage.  Without the hassles of undressing, being covered in oil and being sore the next day. I was not familiar with Vibrational Sound Therapy prior to my session with Sonia but I am so glad I gave it a try. Sonia is professional, very informative on how Vibrational Sound Therapy works and made me feel very comfortable. I will definitely be back for more sessions. Well worth it!!!! <br><br>- Anita M.`,
  7: `Sonia is very patient and accommodating. She adjusted yoga poses for me, due to my bad knees. <br><br>- Bea O.`
}


window.onload = function(){
  testimonialText.innerHTML = (testimonials[count])
}

// window.onload = setInterval(function(){
//   testimonialText.innerHTML = (testimonials[count])
//   count++;
//   if (count == 5) {
//     count = 1;
//   }
//   console.log(count)
// }, 200000);