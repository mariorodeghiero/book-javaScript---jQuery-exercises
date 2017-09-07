function getSize(width, height, depth){
    let area = width * height;
    let volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;
}

let areaOne = getSize(2, 3, 3)[0];
let volumeOne = getSize(3, 2, 3)[1];

console.log('------------------------------------');
console.log(`area: ` + areaOne);
console.log(`volume: ` + volumeOne);
console.log('------------------------------------');