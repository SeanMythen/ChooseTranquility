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


let count = Math.floor(Math.random() * 8) + 1;


let testimonialText = document.getElementById('justText');

let rightArrow = document.getElementById('arrowRight');
let leftArrow = document.getElementById('arrowLeft');


rightArrow.addEventListener('click', function () {
  count++;
  console.log(count)
  if (count == 9) {
    count = 1;
    testimonialText.innerHTML = (testimonials[count]);
  }
  else{
    testimonialText.innerHTML = (testimonials[count]);
  }
  

})


leftArrow.addEventListener('click', function () {
  count--;
  console.log(count)
  if (count == 0) {
    count = 8;
    testimonialText.innerHTML = (testimonials[count]);
  }
  else{
    testimonialText.innerHTML = (testimonials[count]);
  }
  
  
  
})


let testimonials = {
  1: `I had my first vibration sound therapy session at Choose Tranquility and was very impressed. I have an incredibly stressful new job and am very tense all the time. I also have a hard time falling asleep. During the vibration session, I actually fell asleep. I have had numerous massages and pampering facials and have NEVER fallen asleep during any of those treatments. The vibration session was truly relaxing. Not only did I fall asleep, but I felt incredibly calm and at ease the rest of the day. Sonia is very professional, explains the technique to you beforehand ensuring you are completely comfortable with everything. I highly recommend Sonia and vibration sound therapy - it really works! <br><br>- Desiree K.`,
  2: `I took a one on one chair yoga class with Sonia in January of this year. I have severe osteoarthritis and at that time I had been diagnosed with lymphedema. So I was wrapped in bandages from my knees to my feet. The atmosphere was extremely relaxing and Sonia was aware of my physical limitations so she proceeded slowly. The class lasted about an hour and I was totally relaxed while doing the positions and as an added benefit had no pain for several hours afterward. Sonia is an easy going person who is passionate about the art of relaxation. I enjoyed my time with her immensely. <br><br>- Denise K.`,
  3: `I did the one hour massage. I was skeptical at first but Sonia explained the therapy very well. I was pleasantly surprised at the calmness and bell sounds that relaxed my body. Truly worth my time. I'm sure I will continue with Sonia as my massage therapist. <br><br>- Terry L.`,
  4: `The massage I received from Sonia was a truly eye opening experience! Or should I say eye closing. This was one of the most relaxing massages I've ever received. It's been a long time since I experienced that much serenity and peace. The rhythmic sounds from the bowls and the deep yet gentle vibrations eased me into a light sleep and I woke up feeling calmer and rested, ready to take on the rest of my day! Thank you Sonia for this experience. <br><br>- Amanda M.`,
  5: `Sonia has a down to earth, grounding presence which makes relaxation easy. <br><br>- Angelica O.`,
  6: `What a wonderful, relaxing experience! As relaxing as, if not more so than, a traditional massage.  Without the hassles of undressing, being covered in oil and being sore the next day. I was not familiar with Vibrational Sound Therapy prior to my session with Sonia but I am so glad I gave it a try. Sonia is professional, very informative on how Vibrational Sound Therapy works and made me feel very comfortable. I will definitely be back for more sessions. Well worth it!!!! <br><br>- Anita M.`,
  7: `Sonia is very patient and accommodating. She adjusted yoga poses for me, due to my bad knees. <br><br>- Bea O.`,
  8: `I am not the alternative health believer kind of person. So, with skepticism and resistance I had a vibrational sound therapy with Sonia. Part of me wanted to proof that it is all a sham. I was ready to rumble but Sonia was so patient and kind that if I continued with my plan, I was just going to be a jerk. And jerk I am not, but I kept thinking of all the work I had to do and how much longer I needed to be laying there being a guinea pig. Sonia somehow brought my defenses down and with her soft voice explained everything along the way. At the beginning the bowl on your body feels kind of awkward but once you adapt to its weight, the sensation of the vibrations penetrating your body are soothing. So, crap… this actually feels good. I went through the day without giving it too much thought. However, the overwhelming stress that I get when I have so much to do was not there. As such, space opened up in my mind for clarity, calmness and intention. Not bad eh… Take my review for what it’s worth, but if you are overwhelmed, overworked, blocked mentally, and/or scattered this thing might actually help you. <br><br>- Maritza C.`
}


window.onload = function () {
  testimonialText.innerHTML = (testimonials[count])
  if (count == 9) {
    count = 1;
  }
  setInterval(function () {    
    count++;
    if (count == 9) {
      count = 1;
    }
    testimonialText.innerHTML = (testimonials[count])
    console.log(count)
  }, 30000);
}