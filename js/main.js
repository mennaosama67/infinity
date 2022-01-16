mybutton = document.getElementById("scroll-btn");
menubtn=document.querySelector(".navbar-toggler");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
      menubtn.style.backgroundColor="black";
    } else {
      mybutton.style.display = "none";
      menubtn.style.backgroundColor="transparent";
    }
  }
  function topFunction() {

    document.documentElement.scrollTop = 0;
  }

// gallery
  $(document).ready(function () {
    $('.fancybox').fancybox();
  });
  // preloader
  setTimeout(function(){
    $('.loader_bg').fadeToggle();
}, 2000);
// animation 
AOS.init();