document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Perform authentication (this is just a mock, replace with actual authentication logic)
      if (username === 'admin' && password === 'admin123') {
        alert('Login successful!');
        // Redirect to dashboard or perform any other action
        window.location.href = 'index.html'; // Redirect to cars.html page
      } else {
        alert('Invalid username or password. Please try again.');

        const mainString = JSON.stringify(main);
        localStorage.setItem('main', mainString);
      }
    });
  });
  