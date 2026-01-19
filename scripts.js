/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.newsletter form');
    var emailInput = document.querySelector('#email') || document.querySelector('.newsletter input[type="email"]');
    var messageDiv = document.querySelector('.newsletter .message');

    if (!form || !messageDiv) {
        // nothing to wire up (safeguard)
        return;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var email = emailInput ? emailInput.value.trim() : '';

        if (!email) {
            // show error message
            messageDiv.style.color = '#c0392b'; // red-ish
            messageDiv.textContent = 'Please enter a valid email address.';
            return;
        }

        // show success message (email displayed inside backticks and angle brackets)
        // Use textContent so any entered text is treated as plain text (prevents XSS)
        messageDiv.style.color = '#0b5cff'; // success color
        messageDiv.textContent = `Thank you! Your email address \`<${email}>\` has been added to our mailing list!`;
    });
});