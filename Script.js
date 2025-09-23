
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', validateForm);
    nameInput.addEventListener('blur', () => validateName(nameInput));
    emailInput.addEventListener('blur', () => validateEmail(emailInput));
    phoneInput.addEventListener('blur', () => validatePhone(phoneInput));
    passwordInput.addEventListener('blur', () => validatePassword(passwordInput));

    function validateForm(event) {
        let isFormValid = true;

        if (!validateName(nameInput)) isFormValid = false;
        if (!validateEmail(emailInput)) isFormValid = false;
        if (!validatePhone(phoneInput)) isFormValid = false;
        if (!validatePassword(passwordInput)) isFormValid = false;

        if (!isFormValid) {
            event.preventDefault();
        } else {

            alert(' CONGRATULATIONS!! Your response has been recorded!');

            form.reset();
        }
    }


    function validateName(input) {
        if (input.value.trim() === '') {
            showError(input, 'Name is required.');
            return false;
        }
        showSuccess(input);
        return true;
    }

    function validateEmail(input) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (input.value.trim() === '') {
            showError(input, 'Email is required.');
            return false;
        } else if (!emailRegex.test(input.value.trim())) {
            showError(input, 'Please enter a valid email address.');
            return false;
        }
        showSuccess(input);
        return true;
    }

    function validatePhone(input) {
        const phoneRegex = /^\d{10,15}$/;
        if (input.value.trim() !== '' && !phoneRegex.test(input.value.trim())) {
            showError(input, 'Phone number must be between 10 and 15 digits.');
            return false;
        }
        showSuccess(input);
        return true;
    }

    function validatePassword(input) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (input.value.trim() === '') {
            showError(input, 'Password is required.');
            return false;
        } else if (!passwordRegex.test(input.value.trim())) {
            showError(input, 'Password must be at least 8 characters long and include an uppercase letter, lowercase letter, number, and special character.');
            return false;
        }
        showSuccess(input);
        return true;
    }


    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        errorElement.textContent = message;
        input.classList.add('invalid');
    }

    function showSuccess(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        errorElement.textContent = '';
        input.classList.remove('invalid');
    }
});