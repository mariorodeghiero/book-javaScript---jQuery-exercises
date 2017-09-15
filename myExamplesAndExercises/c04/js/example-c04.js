let i = 1;
let msg = '';
let operator = 'addition'
let table = 3;


if (operator == 'addition') {
    while (i < 11) {
        msg += i + ' + ' + table + ' = ' + (i + table) + '<br/>' ;
        i++;
    }
} else {
    while (i < 11) {
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br/>' ;
        i++;
    }
}




document.getElementById('answer').innerHTML = msg;

