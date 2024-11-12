function toggleMenu() {
    document.querySelector('.menu-overlay').classList.toggle('show-menu');
}
// Close the menu overlay when clicking the back button
function goBack() {
    history.back(); // Go to the previous page
    toggleMenu();   // Close the menu overlay
}
// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form form');
    const nameInput = document.getElementById('name');
    const contactInput = document.getElementById('contact');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const dobInput = document.getElementById('dob');

    // Function to validate email
    function isValidEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    // Function to validate phone number
    function isValidPhone(phone) {
        const regex = /^[0-9]{10}$/;
        return regex.test(phone);
    }

    // Add event listeners for form validation
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        // Name Validation
        if (nameInput.value.trim() === '') {
            alert('Name is required');
            isValid = false;
        }

        // Phone Number Validation
        if (!isValidPhone(contactInput.value)) {
            alert('Please enter a valid 10-digit phone number');
            isValid = false;
        }

        // Email Validation
        if (!isValidEmail(emailInput.value)) {
            alert('Please enter a valid email address');
            isValid = false;
        }

        // Password Validation (Minimum 6 characters)
        if (passwordInput.value.length < 6) {
            alert('Password must be at least 6 characters');
            isValid = false;
        }

        // Date of Birth Validation (must be in the past)
        if (new Date(dobInput.value) > new Date()) {
            alert('Date of Birth must be in the past');
            isValid = false;
        }

        if (isValid) {
            form.submit(); // Submit form if all fields are valid
        }
    });
});
// Toggle Theme (Light/Dark Mode)
const themeToggleButton = document.getElementById('theme-toggle');

// Check stored theme in localStorage (if any)
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Store theme preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
// Smooth Scroll Navigation
