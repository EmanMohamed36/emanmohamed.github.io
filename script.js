// Smooth scroll animation
const links = document.querySelectorAll('.nav-links a');


links.forEach(link => {
link.addEventListener('click', e => {
e.preventDefault();
document.querySelector(link.getAttribute('href'))
.scrollIntoView({ behavior: 'smooth' });
});
});


// Animate text
const text = document.querySelector('.animate-text');
let i = 0;
const message = text.innerText;
text.innerText = '';


function typeEffect() {
if (i < message.length) {
text.innerText += message.charAt(i);
i++;
setTimeout(typeEffect, 80);
}
}


typeEffect();
