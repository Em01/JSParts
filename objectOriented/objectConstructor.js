
var hotel = new Object();
hotel.name = 'Quay';
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvailability = function() {
    return this.rooms - this.booked;
};

//create an object with properties
function Hotel(name, rooms, booked){
this.name = name;
this.rooms = rooms;
this.booked = booked;
this.checkAvailability = function () {
    return this.rooms - this.booked;
};
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 3, 20)'


