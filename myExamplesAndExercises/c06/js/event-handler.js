
function checkUserName() {
    var message = document.getElementById('feedback');
    if (this.value.length < 5 ) {
        message.textContent = 'Your username minor 5 characters!'
    }else
    message.textContent = '';
}

var user = document.getElementById('username');
user.onblur = checkUserName;