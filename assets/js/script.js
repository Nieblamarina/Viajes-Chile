function scrollValue(){
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    if (croll< 200) {
        navbar.classList.remove('BgColour');
        } else {
            navbar.classList.add('BgColour');
        }
  }

  window.addEventListener('scroll',scrollValue);
  
