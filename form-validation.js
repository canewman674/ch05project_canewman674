// form-validation.js
    function validateForm() {
        // Your validation logic goes here
        console.log("Form validation function executed.");
        // Example: Prevent form submission if a field is empty
        let username = document.getElementById("username").value;
        if (username === "") {
            alert("Username must be filled out");
            return false; // Prevent form submission
        }
        return true; // Allow form submission
    }
    document.addEventListener('DOMContentLoaded', function() {
    // Select all input elements that are not of type 'submit', 'reset', or 'button'
    const inputFields = document.querySelectorAll('input:not([type="submit"]):not([type="reset"]):not([type="button"])');

    inputFields.forEach(input => {
        // Check if the 'required' attribute is present on the input field
        if (input.hasAttribute('required')) {
            input.classList.add('required');
        }
    });
});
document.getElementById('my-form').addEventListener('submit', function(event) {
  // Prevent the form from submitting by default
  event.preventDefault();

  let incompleteFields = 0;
  const requiredFields = document.querySelectorAll('#my-form [required]');
  
  // Loop through all required fields
  requiredFields.forEach(field => {
    // If a field is empty, increment the counter
    if (field.value.trim() === '') {
      incompleteFields++;
    }
  });

  const missingCountSpan = document.getElementById('missing-count');

  if (incompleteFields > 0) {
    missingCountSpan.textContent = `You have ${incompleteFields} required fields left to complete.`;
  } else {
    missingCountSpan.textContent = ''; // Clear the message if everything is complete
    // Optional: Submit the form programmatically if all fields are complete
    // this.submit(); 
  }
});
function checkMissing() {
    const requiredFields = document.querySelectorAll('[required]'); // Select all elements with the 'required' attribute
    const errorMessageSpan = document.getElementById('error-message'); // Assuming you have a span with id 'error-message'

    let allFieldsFilled = true;
    let missingFields = [];

    requiredFields.forEach(field => {
        if (field.value.trim() === '') { // Use .trim() to handle whitespace-only input
            allFieldsFilled = false;
            missingFields.push(field.name || field.id || 'a required field'); // Get field name or ID for better message
            field.classList.add('is-invalid'); // Add a class for visual feedback (e.g., red border)
        } else {
            field.classList.remove('is-invalid'); // Remove invalid class if field is filled
        }
    });

    if (!allFieldsFilled) {
        errorMessageSpan.textContent = `Please fill in the following required fields: ${missingFields.join(', ')}.`;
        errorMessageSpan.style.display = 'block'; // Make the error message visible
    } else {
        errorMessageSpan.textContent = '';
        errorMessageSpan.style.display = 'none'; // Hide the error message
    }

    return allFieldsFilled;
}

// Example usage (e.g., on form submission)
const myForm = document.getElementById('myForm'); // Assuming your form has id 'myForm'
if (myForm) {
    myForm.addEventListener('submit', function(event) {
        if (!checkMissing()) {
            event.preventDefault(); // Prevent form submission if fields are missing
        }
    });
}
const myFormId = document.getElementById('myFormId'); // Replace 'myFormId' with the actual ID of your form
if (myFormId) {
    myFormId.addEventListener('submit', function(event) {
        // This function will run when the form is submitted
    });
    myFormId.addEventListener('submit', function(event) {
        if (checkMissing()) { // Assuming checkMissing() returns true if there are missing inputs
            event.preventDefault(); // Prevent the default form submission
            // Optionally, display an error message to the user
            alert('Please fill in all required fields.');
        }
    });
}
    function checkMissing() {
        const inputs = document.querySelectorAll('#myFormId input[required]'); // Select all required inputs within your form
        let hasMissing = false;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                hasMissing = true;
                input.classList.add('error'); // Optional: Add a class to highlight missing fields
            } else {
                input.classList.remove('error'); // Optional: Remove error class if field is filled
            }
        });
        return hasMissing;
    }
    function validateEmail(email) {
  // Check if the email string exists and its length is at least 8 characters
  if (email && email.length >= 8) {
    return true; // Email has at least 8 characters
  } else {
    return false; // Email is either empty or has less than 8 characters
  }
}
function checkMissing() {
  let isValid = true;
  const nameInput = document.getElementById('name');
  const nameError = document.getElementById('name-error');

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  } else {
    nameError.textContent = '';
  }
  return isValid;
}

// Function to validate the email format
function validateEmail() {
  let isValid = true;
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // A basic email regex

  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  } else {
    emailError.textContent = '';
  }
  return isValid;
}

// Combined function to run all validations
function validateForm() {
  const isNameValid = checkMissing();
  const isEmailValid = validateEmail();
  
  // Return true only if BOTH validations pass
  return isNameValid && isEmailValid;
}

// Add an event listener to the form's submit event
document.getElementById('myForm').addEventListener('submit', function(event) {
  // Call the combined validation function
  const formIsValid = validateForm();

  if (!formIsValid) {
    // If validation fails, prevent the form from submitting
    event.preventDefault();
  }
});
 function validateForm() {
        let username = document.getElementById('username').value;
        let email = document.getElementById('email').value;

        if (username === "") {
            alert("Please enter your username.");
            return false; // Prevent form submission
        }

        if (email === "") {
            alert("Please enter your email address.");
            return false; // Prevent form submission
        }

        // Basic email format validation (can be more robust)
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            return false; // Prevent form submission
        }

        // If all checks pass, allow form submission
        return true;
    }
/**
 * This function calculates the area of a rectangle.
 * It takes two parameters: 'width' and 'height', both expected to be numbers.
 * The function returns a number representing the calculated area.
 * For example, calling calculateArea(5, 10) will return 50.
 */
function calculateArea(width, height) {
  return width * height;
}

/**
 * This function greets a user by their name.
 * It takes a single parameter: 'name', which should be a string.
 * The function returns a string containing a personalized greeting.
 * If no name is provided, it will return a generic greeting.
 */
function greetUser(name) {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return "Hello there!";
  }
}
   