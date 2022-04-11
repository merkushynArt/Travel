let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
}

document.querySelectorAll('.control-btn').forEach(btn =>{
   btn.onclick = () => {
      let src = btn.getAttribute('data-src');
      document.querySelector('.video').src = src;
   }
})

