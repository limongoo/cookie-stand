console.log("Start");

var cookieStand = function(storeLocation, minCustomer, maxCustomer, avgSale, openHours) {
  this.storeLocation = storeLocation;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgSale = avgSale;
  this.openHours = openHours;
}

//Generates random number of customers per hour.
cookieStand.prototype.generateCustomer = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Determines the number of cookies sold in a given hour
cookieStand.prototype.salesPerHour = function() {
  var cookieHourSales = this.generateCustomer(this.minCustomer, this.maxCustomer) * this.avgSale;
  return cookieHourSales;
}

//Runs through each hour and adds to total sales.
cookieStand.prototype.dailySalesTotal = function() {
  var total = 0
  var hoursSales = [];

  for (i = 0; i < this.openHours; i++) {
    total += this.salesPerHour();
  }

  return total;
}


var pioneerSquare = new cookieStand("Pioneer Square", 17, 88, 5.2, 8);
var portlandAirport = new cookieStand("Portland Airport", 6, 24, 1.2, 8);
var washingtonSquare = new cookieStand("Washing Square", 11, 38, 1.9, 8);
var sellwood = new cookieStand("Sellwood", 20, 48, 3.3, 8);
var pearlDistrict = new cookieStand("Pearl District", 3, 24, 2.6, 8);

console.log(pioneerSquare.dailySalesTotal())
