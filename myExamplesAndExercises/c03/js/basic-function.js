let msg = 'Sign up to receive our newsletter for 10% off!';

function updateMessage() {
    let elMessage = document.getElementById('message');
    elMessage.textContent = msg;
}

updateMessage();