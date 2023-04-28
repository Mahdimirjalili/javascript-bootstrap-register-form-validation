function register() {

    if (userNameValidation() && emailValidation() && phoneValidation() && passwordValidation() && passwordConfirmation()) {
        alert("Sending Form to server!");
    }
}

function emailValidation() {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})$/;
    const emailMessage = document.getElementById('email-message');
    const emailInput = document.getElementById("email");

    if (!emailRegex.test(emailInput.value)) {
        emailMessage.classList.add('text-danger')
        emailInput.classList.add('is-invalid');
        emailMessage.innerHTML = "Invalid email address!";
        emailInput.classList.remove('is-valid');
        return false;
    } else {
        emailMessage.innerHTML = "";
        emailMessage.classList.remove('text-danger');
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
    }

    return true;
}

function phoneValidation() {
    const phoneInput = document.getElementById('phone');
    const phoneMessage = document.getElementById('phone-message');

    const regex = /^(?:\+98|0)?9\d{9}$/;
    if (!regex.test(phoneInput.value)) {
        phoneMessage.classList.add('text-danger');
        phoneMessage.innerHTML = 'Please enter a valid mobile number';
        phoneInput.classList.remove('is-valid');
        phoneInput.classList.add('is-invalid');
        return false;
    } else {
        phoneMessage.innerHTML = '';
        phoneMessage.classList.remove('text-danger');
        phoneInput.classList.remove('is-invalid');
        phoneInput.classList.add('is-valid');
    }

    return true;
}

function userNameValidation() {

    const usernameMessage = document.getElementById("username-message");
    const userNameInput = document.getElementById("user-name");
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*+\-/=_{}~.\s]{4,}$/;

    if (!regex.test(userNameInput.value)) {
        usernameMessage.classList.add('text-danger')
        userNameInput.classList.remove('is-valid');
        userNameInput.classList.add('is-invalid');
        usernameMessage.innerHTML = "Username must be at least 4 characters long and include both letters and digits (special characters !@#$%^&*~+-_=  are optional).";
        return false
    } else {
        usernameMessage.innerHTML = "";
        usernameMessage.classList.remove('text-danger');
        userNameInput.classList.remove('is-invalid');
        userNameInput.classList.add('is-valid');
    }

    return true

}

function passwordValidation() {

    const passwordMessage = document.getElementById('password-message');
    const passwordInput = document.getElementById('password');
    const allowWeakPassword = document.getElementById('allow-weak-password');
    const weak_password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    if (!weak_password_regex.test(passwordInput.value) && allowWeakPassword.checked == false) {
        passwordMessage.classList.remove('text-success');
        passwordMessage.classList.add('text-danger')
        passwordInput.classList.remove('is-valid');
        passwordInput.classList.add('is-invalid');
        passwordMessage.innerHTML = "Password must be at least 8 characters long and contain at least one digit, one lowercase letter, one uppercase letter, and one of the following special characters: !@#$%^&*";
        return false;
    } else if (allowWeakPassword.checked) {
        if (passwordInput.value.trim() == "") {
            passwordMessage.classList.remove('text-success');
            passwordMessage.classList.add('text-danger')
            passwordInput.classList.remove('is-valid');
            passwordInput.classList.add('is-invalid');
            passwordMessage.innerHTML = "Password is required!";
            return false;
        } else {
            passwordMessage.innerHTML = "";
            passwordMessage.classList.remove('text-danger');
            passwordInput.classList.remove('is-invalid');
            passwordInput.classList.add('is-valid');
            return true;
        }
    } else {
        passwordMessage.innerHTML = "Strong password";
        passwordMessage.classList.remove('text-danger');
        passwordInput.classList.remove('is-invalid');
        passwordMessage.classList.add('text-success');
        passwordInput.classList.add('is-valid');
    }


    return true;
}


function passwordConfirmation() {

    const passwordConfirmMessage = document.getElementById('confirm-password-message');
    const passwordInput = document.getElementById('password');
    const passwordConfirmationInput = document.getElementById('password-confirm')

    if (passwordConfirmationInput.value != passwordInput.value) {
        passwordConfirmMessage.classList.add('text-danger')
        passwordConfirmationInput.classList.remove('is-valid');
        passwordConfirmationInput.classList.add('is-invalid');
        passwordConfirmMessage.innerHTML = "Passwords do not match!";
        return false;
    } else {
        passwordConfirmMessage.innerHTML = "";
        passwordConfirmMessage.classList.remove('text-danger');
        passwordConfirmationInput.classList.remove('is-invalid');
        passwordConfirmationInput.classList.add('is-valid');
    }
    return true

}