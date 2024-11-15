document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const responseDiv = document.getElementById('response');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            responseDiv.innerHTML = `<p>${data.message}</p>`;
            form.reset();
        })
        .catch(error => {
            responseDiv.innerHTML = `<p>An error occurred: ${error}</p>`;
        });
    });
    
    });
