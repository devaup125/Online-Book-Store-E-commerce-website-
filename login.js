document.addEventListener('DOMContentLoaded', function() {
    
    const loginForm = document.querySelector('.login-form');

     
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

         
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

         
        const user = registeredUsers.find(
            user => user.email === email && user.password === password
        );

        if (user) {
             
            alert('Login Successful! Welcome to BookStore');
            
             
            window.location.href = 'index.html';
        } else {
             
            alert('Invalid email or password. Please try again.');
        }
    });

     
    const forgotPasswordLink = document.createElement('a');
    forgotPasswordLink.href = '#';
    forgotPasswordLink.textContent = 'Forgot Password?';
    forgotPasswordLink.addEventListener('click', function() {
        alert('Password reset functionality will be implemented soon.');
    });

     
    loginForm.appendChild(forgotPasswordLink);
});
