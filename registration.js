document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.querySelector('.registration-form');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

       
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            phone: document.getElementById('phone').value,
            gender: document.querySelector('input[name="gender"]:checked')?.value,
            dob: document.getElementById('dob').value,
            languages: Array.from(document.querySelectorAll('input[name="languages"]:checked'))
                .map(checkbox => checkbox.value),
            address: document.getElementById('address').value
        };

        if (!validateForm(formData)) {
            return;
        }

       
        saveUserData(formData);

        
        alert('Registration Successful!');
        window.location.href = 'login.html';
    });

    function validateForm(data) {
       
        if (data.password.length < 8) {
            alert('Password must be at least 8 characters long');
            return false;
        }

       
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address');
            return false;
        }

       
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(data.phone)) {
            alert('Please enter a valid 10-digit phone number');
            return false;
        }

        return true;
    }

    function saveUserData(userData) {
        let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        
        
        const existingUser = registeredUsers.find(user => user.email === userData.email);
        if (existingUser) {
            alert('Email already registered');
            return false;
        }
    
        
        registeredUsers.push(userData);
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        return true;
    }
});



