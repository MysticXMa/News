document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields before submitting!');
            return;
        }

        console.log({
            name: name,
            email: email,
            message: message
        });
    });
});
