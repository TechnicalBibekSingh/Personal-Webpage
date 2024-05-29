document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', () => {
        alert('Search button clicked!');
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Sign In form submitted');
    });

    const signinForm = document.getElementById('signinForm');
    signinForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Sign In form submitted');
    });

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Log In form submitted');
    });
});
