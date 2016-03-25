console.log("Start");

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
  this.salesArray.push(cookieHourSales);
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

cookieStand.prototype.addTitle = function() {
  //document.write("<ul id="location"></ul>");
  document.write("<ul id=this.locationID></ul>");
  document.getElementById('').innerHTML += this.storeLocation;
}


var pioneerSquare = new cookieStand("Pioneer Square", 17, 88, 5.2, 8, "pioneer");
var portlandAirport = new cookieStand("Portland Airport", 6, 24, 1.2, 8, "airport");
var washingtonSquare = new cookieStand("Washington Square", 11, 38, 1.9, 8, "washsquare");
var sellwood = new cookieStand("Sellwood", 20, 48, 3.3, 8, "sellwood");
var pearlDistrict = new cookieStand("Pearl District", 3, 24, 2.6, 8, "pearl");

console.log(pioneerSquare.dailySalesTotal())
console.log(pioneerSquare.salesArray)
pioneerSquare.addTitle();
portlandAirport.addTitle();
