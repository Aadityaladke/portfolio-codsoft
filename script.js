// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a simple alert with the form data
    alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Clear the form after submission
    document.getElementById('contact-form').reset();
});
