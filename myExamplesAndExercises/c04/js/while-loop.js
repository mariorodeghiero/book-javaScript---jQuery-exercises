let i = 1;
let msg = '';

while (i < 10) {
    msg += i + ' x 5 = ' + (i * 5) + '<br/>' ;
    i++;
}

document.getElementById('answer').innerHTML = msg;

