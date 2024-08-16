
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;

    // Validate email
    const emailError = document.getElementById('emailError');
    if (!validateEmail(email)) {
        emailError.classList.remove('hidden');
        isValid = false;
    } else {
        emailError.classList.add('hidden');
    }

    // Validate password
    const passwordError = document.getElementById('passwordError');
    if (password === '') {
        passwordError.classList.remove('hidden');
        isValid = false;
    } else {
        passwordError.classList.add('hidden');
    }

    // If valid, submit the form (for now, just alert success)
    if (isValid) {
        alert('Login successful!');
        // Here you can actually submit the form or redirect
        // this.submit();
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
