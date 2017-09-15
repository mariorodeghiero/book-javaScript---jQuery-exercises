let scores = [24, 32, 17];
let arrayLength = scores.length;
let roundNumber = 0;
let msg = '';
let i;

for (let i = 0; i < arrayLength; i++) {
    roundNumber = (i + 1)
    
    msg += ' Round ' + roundNumber + ': ';
    msg += scores[i];
}

console.log(msg);