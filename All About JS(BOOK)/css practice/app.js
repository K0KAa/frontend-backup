/*
//Chapter 1
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = "Good Evening";
}
else if (hourNow > 12) {
    greeting = "Good Afternoon";
}
else {
    greeting = "Good Morning";
}

document.write('<h3>' + greeting + '</h3>');



/* Chapter two-Data Types
var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;
*/
/*Arrays

var colors = ["White", "red", "custom"];

var item = colors.length;
console.log(item);
*/
/*operators*
var firstName = "Kushal";
var lastName = "Kattel";

var fullName = firstName + " " + lastName;
console.log(fullName);

var greeting = "Holly";
var name = "Molly";

var welcomeMessage = greeting + name + '!';
var el = document.getElementById('greeting');
el.textContent = welcomeMessage;
*/


/* creating variables for welcome message*/
/*
var greeting = " OH my god";
var name = "Kushal";
var message = ",You don't have enough time";
//concatenate the three varables above to create the welcome message
var welcome = greeting + name + message;
console.log(welcome);
//windows object model
var el = document.getElementById("userSign");
var msg = "browser window width: " + window.innerWidth + '</p>';
msg += '<p>Height :' + window.innerHeight + '</p>';
msg += '<h2>History</h2><p>items: ' + window.history.length + '</p>';
msg += '<h2> screen</h2><p> width:' + window.screen.width + '</p>';
msg += '<p>height: ' + window.screen.height + '</p>';
var el = document.getElementById('info');
el.textContent = msg;
console.log(el);
alert('Current page: ' + window.location);

//create variables to hold details about the sign
var sign = "Montague House";
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;
//get the element that has an id of greeting and change content
var el = document.getElementById('greeting');
el.textContent = "Welcome";


//document object model
var msg = '<p><b>Page title:</b>' + document.title + '<br/>';
msg += '<b> page address: </b>' + document.URL + '</br>';
msg += '<b> Last Modified:</b>' + document.lastModified + '</p>';
var DocEg = document.getElementById('info');
DocEg.textContent = msg;
console.log(DocEg);



//get the element that has an id of useSign and change content
var el = document.getElementById('userSign');
el.textContent = sign;

//get the element that has an id of tiles and change content
var el = document.getElementById('tiles');
el.textContent = tiles;

//get the element that has an id of subTotal and change content
var el = document.getElementById('subTotal');
el.textContent = '$' + subTotal;
//get the element that has an id of shipping and change content
var el = document.getElementById('shipping');
el.textContent = '$' + shipping;

//get the element that has an id of grandTotal and change content
var el = document.getElementById('grandTotal');
el.textContent = '$' + grandTotal;


//for function
var msg = "Hello guys my name is powerbang";
function updateValue() {
    var el = document.getElementById("userSign");
    el.textContent = msg;
}
updateValue();


function calculateArea(width, height) {
    var area = height * width;
    return area;
}
var wallOne = calculateArea(4, 6);
console.log("The area for wallOne is " + wallOne);

function getSize(width, height, depth) {
    var area = width * height;

    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;
}
var areaOne = getSize(3, 2, 3)[0];
console.log("the area is given as:" + areaOne);
var volumeOne = getSize(3, 2, 3)[1];
console.log("the volume is given as:" + volumeOne);

var hotel = {
    name: "KOKAa",
    rooms: 24,
    booked: 16,
    checkAvailability: function () {
        return this.rooms - this.booked;
    }
};
var elName = document.querySelector(".Name");
hotel.name = "PARK";
elName.textContent = hotel.name;
*/

//constructor notation of object
/*
var hotel= new Object();
hotel.name="Quackady";
hotel.rooms=34;
hotel.booked=22;
hotel.availableRooms= function(){
    return this.rooms-this.booked;
}
*/
/*
function NewHotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function () {
        return this.rooms - this.booked;
    };
}

var MyHotel = new NewHotel('Kushal', 45, 23);
var YourHotel = new NewHotel('Pandu', 56, 37);

var details = MyHotel.name + ' rooms :';
details += MyHotel.checkAvailability();
var elHotel = document.getElementById('detail');
elHotel.innerHTML = details;

*/

(function () {
    // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS
    // Create a hotel obj ect using object lit eral syntax
    var hotel = {
        name: 'Park',
        roomRate: 240, //Amount in dollars
        discount: 15, //Percentage di scount
        offerPrice: function () {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    }
    // Write out the hotel name, standard rate, and the special rate
    var hotelName, roomRate, specialRate; // Declare variables
    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');
    // Get el ements
    hotelName.textContent = hotel.name; // Write hotel name
    roomRate.textContent = '$ ' + hotel.roomRate.toFixed(2); // Write room rate
    specialRate.textContent = '$' + hotel.offerPrice();

    var expiryMsg;//Message displayed to users 

    var today;//Today's date 
    var elEnds;//The element that shows the message about the offer ending 


    function offerExpires(today) {
        // Decl are variables within the functi on for l ocal scope
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        // Add 7 days time (added in milliseconds)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        //Create arrays to hol d t he names of days I months 
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurstday', 'Friday', 'Saturday'];
        monthNames = ['January', ' February', 'March', 'Apri l ', 'May ', 'June ', 'Jul y', 'August ', 'September', 'October', ' November', 'December'];
        //Collect the parts of the date to show on the page
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();
        // Create the message 
        expiryMsg = "Offer expering next";
        expiryMsg += day + '<br/>(' + date + ' ' + month + '' + year + ')';
        return expiryMsg;

    }
    today = new Date();//Put today's date in vari ble
    elEnds = document.getElementById('offerEnds');// Get the offerEnds element
    elEnds.innerHTML = offerExpires(today);//Add the expiry message 

}());
