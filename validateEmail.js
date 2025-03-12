function validateEmail() {
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');

    if (!email.includes('@')) {
        errorMessage.textContent = 'Error: Email must contain an "@" symbol.';
    } else {
        errorMessage.textContent = '';
        alert('Email is valid!');
    }
}
