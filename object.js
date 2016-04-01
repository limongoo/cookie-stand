// See if js works or not
console.log("Start");


// CookieStand object constructor
var cookieStand = function(storeLocation, minCustomer, maxCustomer, avgSale, openHours, locationID) {
  this.storeLocation = storeLocation;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgSale = avgSale;
  this.openHours = openHours;
  this.salesArray = [];
  this.locationID = locationID;
}


//Generates random number of customers per hour.
cookieStand.prototype.generateCustomer = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Determines the number of cookies sold in a given hour. Pushes value to saleArray.
cookieStand.prototype.salesPerHour = function() {
  var cookieHourSales = Math.floor(this.generateCustomer(this.minCustomer, this.maxCustomer) * this.avgSale);
  this.salesArray.push(cookieHourSales);  // display array of sales every hour
  return cookieHourSales;
}


//Runs through each hour and adds to total sales and creates array of hourly sales.
cookieStand.prototype.dailySalesTotal = function() {
  var total = 0;
  for (i = 0; i < this.openHours; i++) {
    total += this.salesPerHour();
  }
  this.total = total;
  return total;
}


// create Table
cookieStand.prototype.addData = function() {
  var storeID = this.locationID;
  var location = document.createTextNode(this.storeLocation); //creates location text

  var table = document.createElement("table"); //create table
  document.getElementById("dataDIVtable").appendChild(table);
}


// // Method to add location in a ul format
// cookieStand.prototype.addData = function() {
//   this.dailySalesTotal();
//   var storeID = this.locationID;
//   var location = document.createTextNode(this.storeLocation);  // create location text
//
//   // Adds ul of title
//   var ul = document.createElement('ul');  //create ul list
//
//   ul.setAttribute('id', storeID);  //assigns storeID to ul id
//   ul.appendChild(location);  //adds location name to top of list
//   document.getElementById("dataDIV").appendChild(ul);  //adds ul to dataDIV
//
//   // Array to display time in list items
//   for (i=0; i < this.salesArray.length; i++) {
//     var hourArray = ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: "];  // Array to display hours
//
//     var hr = hourArray[i];
//     var hrsale = this.salesArray[i];
//
//     // Add list itmes of hours and sales per hour
//     var li = document.createElement("li");  //create list item
//     var stat = hr + hrsale;  //hours + sales
//
//     stat = document.createTextNode(stat);  //create hours + sales text
//     li.appendChild(stat); //add stat text to list item
//     document.getElementById(storeID).appendChild(li);  //add list to ul
//   }
//
//   // References from the dailySalesTotal function
//   var dailyTotal = this.total;  // reference to dailySalesTotal
//
//   //Adds list item for total of daily sales
//   var li = document.createElement("li");  //create list item
//   var sltotal = document.createTextNode("Total: " + dailyTotal + " Cookies");  //create text Total: dailyTotal Cookies text
//   li.appendChild(sltotal);  //add sltotal to list item
//   document.getElementById(storeID).appendChild(li);  //add list to ul
//
// }





// Location Data Array
var cookieAdd = new Array();

var test = new cookieStand("Pioneer Square", 17, 88, 5.2, 8, "pioneer");
test.addData()



cookieAdd.push(test);
cookieAdd.push(new cookieStand("Portland Airport", 6, 24, 1.2, 8, "airport"));
cookieAdd.push(new cookieStand("Washington Square", 11, 38, 1.9, 8, "washsquare"));
cookieAdd.push(new cookieStand("Sellwood", 20, 48, 3.3, 8, "sellwood"));
cookieAdd.push(new cookieStand("Pearl District", 3, 24, 2.6, 8, "pearl"));


// Function to put cookieAdd aray through the addData method
// function addNew() {
//   for (var i=0; i < cookieAdd.length; i++){
//     var cookieAddData = cookieAdd[i];
//     cookieAddData.addData();
//   }
// }


// Calling addNew Function
//addNew();


// See if console log runs through to the end
console.log("End");
