document.addEventListener('DOMContentLoaded', function() {
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');
    const modal = document.getElementById('loginModal');
    const modalContent = document.getElementById('modalContent');

    // Function to fetch and insert login HTML content
    function loadLoginComponent() {
        fetch('./login/login.html')
            .then(response => response.text())
            .then(data => {
                modalContent.innerHTML = data;
                addLoginFormEventListener(); // Add event listener after loading content
            })
            .catch(error => console.error('Error loading login component:', error));
    }

    // Open modal and load the login component
    openModalButton.addEventListener('click', function() {
        loadLoginComponent();
        modal.style.display = 'flex';
        console.log('clicked');
        
    });

    // Close modal
    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Function to add event listener to the login form
    function addLoginFormEventListener() {
        const loginForm = document.getElementById('loginForm');
        const message = document.getElementById('message');
        if (loginForm) {
            loginForm.addEventListener('submit', function(event) {
                event.preventDefault();

                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;

                if (email && password) {
                    console.log('Email:', email);
                    console.log('Password:', password);
                    message.textContent = 'Login successful!';
                    modal.style.display = 'none'; // Close modal on success (for demo purposes)
                } else {
                    message.textContent = 'Please enter your email and password.';
                }
            });
        }
    }
});
