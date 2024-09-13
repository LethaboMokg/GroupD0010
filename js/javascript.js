
// Function to validate the form and redirect on success
function validateForm(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the password and confirm password values
    let password = document.querySelector('input[name="passw"]').value;
    let confirmPassword = document.querySelector('input[name="confirm-passw"]').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return; // Stop further execution if passwords don't match
    }

    // Simulate form submission and redirect to Sign In page
    alert('Sign up successful!');
    window.location.href = 'Signin.html';

     // Simulate form submission and redirect to Sign In page
     alert('Sign up successful!');
     window.location.href = 'Signin.html'; // Redirect to Sign In page

}