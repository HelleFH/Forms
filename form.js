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
        document.getElementById("firstNameError").textContent = "Indtast venligst dit fornavn";
        firstNameInput.focus();
        isValid = false;
    } else if (!namePattern.test(firstName)) {
        document.getElementById("firstNameError").textContent = "Indtast venligst et gyldigt fornavn";
        firstNameInput.focus();
        isValid = false;
    }
  
    if (!lastName) {
        document.getElementById("lastNameError").textContent = "Indtast venligst dit efternavn";
        lastNameInput.focus();
        isValid = false;
    } else if (!namePattern.test(lastName)) {
        document.getElementById("lastNameError").textContent = "Indtast venligst et gyldigt efternavn";
        lastNameInput.focus();
        isValid = false;
    }
  
    if (!age) {
        document.getElementById("ageError").textContent = "Indtast venligst din alder";
        ageInput.focus();
        isValid = false;
    } else if (!agePattern.test(age)) {
        document.getElementById("ageError").textContent = "Indtast venligst en gyldig alder";
        ageInput.focus();
        isValid = false;
    }
  
    if (!email) {
        document.getElementById("emailError").textContent = "Indtast venligst din e-mail";
        emailInput.focus();
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Indtast venligst en gyldig e-mail";
        emailInput.focus();
        isValid = false;
    }
  
    if (password.length < 3) {
        document.getElementById("passwordError").textContent = "Indtast venligst et kodeord med mindst 3 tegn";
        passwordInput.focus();
        isValid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    if (password !== passwordRepeat) {
        document.getElementById("passwordRepeatError").textContent = "Kodeordene matcher ikke";
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
