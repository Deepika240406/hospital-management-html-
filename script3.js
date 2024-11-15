document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('payment-form');
    const responseDiv = document.getElementById('payment-response');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Clear any previous response messages
        responseDiv.innerHTML = '';

        // Simulate payment processing (replace with actual payment processing logic)
        setTimeout(() => {
            displayMessage('Payment successful!', 'success');
            form.reset();
        }, 2000);
    });

    function displayMessage(message, type) {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messageElement.classList.add(type);
        responseDiv.appendChild(messageElement);
    }
});
