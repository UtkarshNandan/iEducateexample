window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
        document.getElementById("n-1").style.background = "#151515e4";
        document.getElementById("n-1").style.transition = "0.4s";
    } else {
        document.getElementById("n-1").style.background = "transparent";
    }
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});