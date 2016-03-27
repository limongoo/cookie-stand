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
  return total;
}


// Method to add location in a ul format
cookieStand.prototype.addData = function() {
  this.dailySalesTotal();
  var storeID = this.locationID;
  var location = document.createTextNode(this.storeLocation);

  // Adds ul of title
  var ul = document.createElement('ul');

  ul.setAttribute('id', storeID);
  ul.appendChild(location);
  document.getElementById("dataDIV").appendChild(ul);

  // Array to display time in list items
  for (i=0; i < this.salesArray.length; i++) {
    var hourArray = ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: "];

    var hr = hourArray[i];
    var hrsale = this.salesArray[i];

    // Add list itmes of hours and sales per hour
    var li = document.createElement("li");
    var stat = hr + hrsale + " Cookies";

    stat = document.createTextNode(stat);
    li.appendChild(stat);
    document.getElementById(storeID).appendChild(li);
  }




}





var pioneerSquare = new cookieStand("Pioneer Square", 17, 88, 5.2, 8, "pioneer");
var portlandAirport = new cookieStand("Portland Airport", 6, 24, 1.2, 8, "airport");
var washingtonSquare = new cookieStand("Washington Square", 11, 38, 1.9, 8, "washsquare");
var sellwood = new cookieStand("Sellwood", 20, 48, 3.3, 8, "sellwood");
var pearlDistrict = new cookieStand("Pearl District", 3, 24, 2.6, 8, "pearl");

// console.log(pioneerSquare.dailySalesTotal());
// console.log(pioneerSquare.salesArray);

// Calling functions
pioneerSquare.addData();
portlandAirport.addData();
washingtonSquare.addData();
sellwood.addData();
pearlDistrict.addData();
