
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // First Name Validation
    const firstName = document.getElementById('firstName').value.trim();
    const firstNameError = document.getElementById('firstNameError');
    if (firstName === '') {
        firstNameError.classList.remove('hidden');
        isValid = false;
    } else {
        firstNameError.classList.add('hidden');
    }

    // Last Name Validation
    const lastName = document.getElementById('lastName').value.trim();
    const lastNameError = document.getElementById('lastNameError');
    if (lastName === '') {
        lastNameError.classList.remove('hidden');
        isValid = false;
    } else {
        lastNameError.classList.add('hidden');
    }

    // Phone Number Validation
    const phoneNumber = document.getElementById('phoneNumberInput').value.trim();
    const phoneError = document.getElementById('phoneError');
    if (phoneNumber === '' || !/^\d+$/.test(phoneNumber)) {
        phoneError.classList.remove('hidden');
        isValid = false;
    } else {
        phoneError.classList.add('hidden');
    }

    // Current Role Validation
    const currentRole = document.getElementById('currentRole').value;
    const roleError = document.getElementById('roleError');
    if (currentRole === 'Select') {
        roleError.classList.remove('hidden');
        isValid = false;
    } else {
        roleError.classList.add('hidden');
    }

    // Specialization Validation (Only check if current role is "Others")
    const specialization = document.getElementById('specialization').value;
    const specializationError = document.getElementById('specializationError');
    if (currentRole === 'Others' && specialization === 'Select') {
        specializationError.classList.remove('hidden');
        isValid = false;
    } else {
        specializationError.classList.add('hidden');
    }

    // If valid, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
        // Optionally, you can actually submit the form using:
        // document.getElementById('userForm').submit();
    }
});
