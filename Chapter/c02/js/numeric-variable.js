// Create three variables to store the information needed.
var price;
var quantity;
var total;

// Assign values to the price and quantity variables.
price = 125;
quantity = 14;
// Calculate the total by multiplying the price by quantity.
total = price * quantity;

// Get the element with an id of cost.
var el = document.getElementById('cost');
el.textContent = 'Total: $' + total;

var qt = document.getElementById('quantity');
qt.textContent = 'Quantidade: ' + quantity;

var pItens = document.getElementById('pIten');
pItens.textContent = 'Preço Unitário: ' + price;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML, but note the security issues on p228-231
el.innerHTML = '$' + total;
*/