function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
}

let quayHotel = new Hotel('Quay', 40, 25);
let parkHotel = new Hotel('Park', 120, 77);

console.log('------------------------------------');
console.log(quayHotel);
console.log(parkHotel);
console.log('------------------------------------');

let details1 = quayHotel.name + ' rooms: ';
    details1 += quayHotel.checkAvailability();
let elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

let details2 = parkHotel.name + ' rooms: ';
details2 += parkHotel.checkAvailability();
let elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;
