document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (email && password) {
        // Disclaimer: In a real application, you wouldn't check login credentials in this way
        // Here you would typically send a request to the server
        console.log('Email:', email);
        console.log('Password:', password);
        
        // Example message for successful login simulation
        document.getElementById('message').textContent = 'Login successful!';
    } else {
        document.getElementById('message').textContent = 'Please enter your email and password.';
    }
});
