document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // Smooth scroll
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
  });

  // Hero animations
  gsap.from('.hero-content h1',{y:-50,opacity:0,duration:1.2});
  gsap.from('.hero-content p',{y:30,opacity:0,duration:1.2,delay:0.5});
  gsap.from('.btn',{y:20,opacity:0,duration:1,stagger:0.2,delay:0.8});

  // Project parallax hover
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left)/rect.width - 0.5;
      const y = (e.clientY - rect.top)/rect.height - 0.5;
      gsap.to(card,{rotationY:x*15,rotationX:-y*15,duration:0.5});
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card,{rotationY:0,rotationX:0,duration:0.5});
    });
  });

  // About stats animation
  gsap.utils.toArray('.stat').forEach(stat => {
    gsap.from(stat,{
      scrollTrigger:{
        trigger:stat,
        start:'top 80%',
        toggleActions:'play none none none'
      },
      y:50,
      opacity:0,
      duration:1,
      stagger:0.3
    });
  });
});
