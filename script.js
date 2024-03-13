
const showLoginBtn = document.getElementById('show-login');
const showLoginBtn2 = document.getElementById('show-login2');
const container = document.getElementById('container');
const closeBtns = document.querySelectorAll('.close-btn');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const loginContainer = document.querySelector('.login_container');

container.style.display = "none";
loginContainer.style.display = "none";

showLoginBtn.addEventListener('click', () => {
container.style.display = "block";

setTimeout(() => {
container.classList.add("active");
}, 10);
});

showLoginBtn2.addEventListener('click', () => {
container.style.display = "none";
loginContainer.style.display = "block"; 
setTimeout(() => {
container.classList.add("active");
}, 10);
});

closeBtns.forEach(closeBtn => {
closeBtn.addEventListener('click', () => {
container.classList.remove("active");

setTimeout(() => {
  container.style.display = "none";
  loginContainer.style.display = "none";
}, 100); 
});
});

signUpButton.addEventListener('click', () => {
container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
container.classList.remove("right-panel-active");
});

document.addEventListener("DOMContentLoaded", function () {

document.querySelectorAll('section.navbar a').forEach(anchor => {
anchor.addEventListener('click', function (e) {
  e.preventDefault();

  const targetId = this.getAttribute('href').substring(1); 
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
      targetElement.scrollIntoView({
          behavior: 'smooth'
      });
  }
});
});
});

window.addEventListener('scroll', reveal);

    function reveal() {
        var reveals = document.querySelectorAll('.d');
        for (var i = 0; i < reveals.length; i++) {
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }
