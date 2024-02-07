document.querySelector("#create-user").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Clear previous error messages
    document.getElementById("firstNameError").textContent = "";
    document.getElementById("lastNameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("ageError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("passwordRepeatError").textContent = "";
  
    // Retrieving input elements
    var firstNameInput = document.getElementsByName("firstName")[0];
    var lastNameInput = document.getElementsByName("lastName")[0];
    var ageInput = document.getElementsByName("age")[0];
    var emailInput = document.getElementsByName("email")[0];
    var passwordInput = document.getElementsByName("password")[0];
    var passwordRepeatInput = document.getElementsByName("passwordRepeat")[0];
  
    // Retrieving input values
    var firstName = firstNameInput.value.trim();
    var lastName = lastNameInput.value.trim();
    var age = ageInput.value.trim();
    var email = emailInput.value.trim();
    var password = passwordInput.value;
    var passwordRepeat = passwordRepeatInput.value;
  
    // Regular expression patterns
    var namePattern = /^[A-Za-z\s]+$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var agePattern = /^\d+$/;
  
    var isValid = true;
  
    if (!firstName) {
        document.getElementById("firstNameError").textContent = "Please enter your first name";
        firstNameInput.focus();
        isValid = false;
    } else if (!namePattern.test(firstName)) {
        document.getElementById("firstNameError").textContent = "Please enter a valid first name";
        firstNameInput.focus();
        isValid = false;
    }
  
    if (!lastName) {
        document.getElementById("lastNameError").textContent = "Please enter your last name";
        lastNameInput.focus();
        isValid = false;
    } else if (!namePattern.test(lastName)) {
        document.getElementById("lastNameError").textContent = "Please enter a valid last name";
        lastNameInput.focus();
        isValid = false;
    }
  
    if (!age) {
        document.getElementById("ageError").textContent = "Please enter your age";
        ageInput.focus();
        isValid = false;
    } else if (!agePattern.test(age)) {
        document.getElementById("ageError").textContent = "Please enter a valid age";
        ageInput.focus();
        isValid = false;
    }
  
    if (!email) {
        document.getElementById("emailError").textContent = "Please enter your email";
        emailInput.focus();
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email";
        emailInput.focus();
        isValid = false;
    }
  
    if (password.length < 3) {
        document.getElementById("passwordError").textContent = "Please enter your password";
        passwordInput.focus();
        isValid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    if (password !== passwordRepeat) {
        document.getElementById("passwordRepeatError").textContent = "Passwords do not match";
        passwordRepeatInput.focus();
        isValid = false;
    } else {
        document.getElementById("passwordRepeatError").textContent = "";
    }
  
    if (!isValid) {
        return false;
    }
  
    // Redirect to the same page
    window.location.href = window.location.href;
});
