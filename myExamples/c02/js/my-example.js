let name = 'Mário';
let sign = 'Montague House';
let tiles = sign.length;
let subTotal = tiles * 5;
let shipping = 7;
let grandTotal = subTotal + shipping;

let user = document.getElementById('name');
user.textContent = name;

let elUserSign = document.getElementById('userSign');
elUserSign.textContent = sign;

let elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

let elSubtotal = document.getElementById('subTotal');
elSubtotal.textContent = '$' + subTotal;

let elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

let elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;