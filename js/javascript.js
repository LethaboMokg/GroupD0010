// Function to validate the signup form
function validateSignUp(event) {
    event.preventDefault(); // Prevent the form from submitting

    const fullname = document.querySelector('input[name="fullname"]').value;
    const lastname = document.querySelector('input[name="lastname"]').value;
    const mobile = document.querySelector('input[name="mobile"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="passw"]').value;
    const confirmPassword = document.querySelector('input[name="confirm-passw"]').value;

    // Validate full name
    if (fullname.trim() === "") {
        alert("Full Name is required.");
        return;
    }

    // Validate last name
    if (lastname.trim() === "") {
        alert("Last Name is required.");
        return;
    }

    // Validate mobile number format (assuming a 10-14 digit number)
    const mobileRegex = /^\d{10,14}$/;
    if (!mobileRegex.test(mobile)) {
        alert("Please enter a valid mobile number (10 to 14 digits).");
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate password and confirm password
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // If all validations pass, show success message and redirect to Sign In page
    alert("Sign up successful! Redirecting to Sign In page...");
    window.location.href = 'signin.html'; // Redirect to the Sign In page
}

// Function to validate the signin form
function validateSignIn(event) {
    event.preventDefault(); // Prevent the form from submitting

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate password
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // If all validations pass, show success message and redirect to index.html
    alert("Sign in successful! Redirecting to the home page...");
    window.location.href = '../index.html'; // Redirect to index.html after successful sign-in
}

//search
// Function to handle the search action
function performSearch(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get the search term from the input field
    const searchQuery = document.getElementById('search-input').value.trim().toLowerCase();

    // Remove any existing highlights
    removeHighlights();

    if (!searchQuery) {
        alert("Please enter a search term.");
        return;
    }

    // Find all elements containing text on the page except for elements within the nav bar
    const textElements = document.querySelectorAll('h1, h2, h3, p, div, span, li');

    let found = false;

    // Loop through the text elements and search for the term
    textElements.forEach(element => {
        // Ignore elements that are within the navbar
        if (element.closest('.navbar') || element.closest('.nav-links')) return;

        if (element.textContent.toLowerCase().includes(searchQuery)) {
            highlightText(element, searchQuery);

            if (!found) {
                // Scroll to the first occurrence
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                found = true;
            }
        }
    });

    if (!found) {
        alert("No results found for: " + searchQuery);
    }
}

// Function to highlight the searched term
function highlightText(element, searchQuery) {
    const innerHTML = element.innerHTML;
    const lowerCaseInnerHTML = innerHTML.toLowerCase();
    const index = lowerCaseInnerHTML.indexOf(searchQuery);

    if (index >= 0) {
        // Safely replace the matching text with a highlighted version
        const highlightedText = `<span class="highlight">${innerHTML.substring(index, index + searchQuery.length)}</span>`;
        element.innerHTML = innerHTML.substring(0, index) + highlightedText + innerHTML.substring(index + searchQuery.length);
    }
}

// Function to remove existing highlights
function removeHighlights() {
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(element => {
        element.outerHTML = element.innerText; // Replace the highlighted element with its plain text
    });
}


// Function to validate the appointment form
function validateAppointment(event) {
    event.preventDefault(); // Prevent the form from submitting

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const appointmentDate = document.getElementById('appointment-date').value;
    const address = document.getElementById('address').value;
    const condition = document.getElementById('condition').value;
    const service = document.getElementById('service').value;

    // Validate first name
    if (firstName.trim() === "") {
        alert("First Name is required.");
        return;
    }

    // Validate last name
    if (lastName.trim() === "") {
        alert("Last Name is required.");
        return;
    }

    // Validate mobile number format (assuming a 10-14 digit number)
    const mobileRegex = /^\d{10,14}$/;
    if (!mobileRegex.test(mobile)) {
        alert("Please enter a valid mobile number (10 to 14 digits).");
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate address
    if (address.trim() === "") {
        alert("Address is required.");
        return;
    }

    // Validate patient's condition
    if (condition.trim() === "") {
        alert("Please describe your condition.");
        return;
    }

    // Validate medical service
    if (service.trim() === "") {
        alert("Please specify the medical service.");
        return;
    }

    // If all validations pass, show success message
    alert("Appointment booked successfully!");
    window.location.href = 'services.html';
}

// Function to validate the contact form
function validateContactForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Validate full name
    if (name.trim() === "") {
        alert("Full Name is required.");
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate message
    if (message.trim() === "") {
        alert("Message is required.");
        return;
    }

    // If all validations pass, show success message and redirect to index.html
    alert("Thank you for your message! We will get back to you shortly.");
    window.location.href = '../index.html'; // Redirect to index.html after successful submission
}
