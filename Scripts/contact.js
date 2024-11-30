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

        const webhook = "https://discord.com/api/webhooks/1312556287363383426/uvZ1GDPimQSvyXynZgxydu4LfEYqePVUm4g6jyie51wWmmLM8F06-neG-cWAwtoy4tND";

        if (!name || !email || !message) {
            alert('Please fill out all fields before submitting!');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address!');
            return;
        }

        const Information = `**Name**: ${name}\n**Email**: ${email}\n**Message**: ${message}`;

        const request = new XMLHttpRequest();

        request.open("POST", webhook);
        request.setRequestHeader("Content-type", "application/json");

        const params = {
            content: Information
        };

        request.send(JSON.stringify(params));

        alert("Message sent successfully! Thx for being with us :D");
        form.remove();
    });
});
