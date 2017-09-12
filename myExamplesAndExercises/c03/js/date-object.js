let today = new Date();
let year =  today.getFullYear();
let hour = today.getHours();
let minute = today.getMinutes();

let el = document.getElementById('date');
el.innerHTML = 'CopyRight &copy;' + year;

let elHours = document.getElementById('hours');
elHours.innerHTML = 'São exatamente: ' + hour + ':' + minute;