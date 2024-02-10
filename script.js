const showLoginBtn = document.getElementById('show-login');
const container = document.getElementById('container');
const closeBtns = document.querySelectorAll('.close-btn');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

// Initially hide the container
container.style.display = "none";

showLoginBtn.addEventListener('click', () => {
    container.style.display = "block";
    // Add a delay to ensure the transition effect
    setTimeout(() => {
        container.classList.add("active");
    }, 10);
});

closeBtns.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        container.classList.remove("active");
        // Add a delay to allow the transition before hiding
        setTimeout(() => {
            container.style.display = "none";
        }, 100); // Adjust the delay as needed
    });
});

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});