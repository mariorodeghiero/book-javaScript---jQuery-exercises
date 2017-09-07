let hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    gym: true,
    roonsTypes: ['twin', 'double', 'suite'],
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

console.log('------------------------------------');
console.log(hotel.name);
console.log(hotel.rooms);
console.log(hotel.booked);
console.log(hotel.gym);
console.log(hotel.roonsTypes);
console.log(hotel.checkAvailability());
console.log('------------------------------------');

let elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

let elRooms = document.getElementById('roomsFree');
elRooms.textContent = hotel.checkAvailability();