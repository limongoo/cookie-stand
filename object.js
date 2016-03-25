var pioneer = {
  minCust = 17,
  maxCust = 88,
  avgCookie = 5.2
}

var portland = {
  minCust = 6,
  maxCust = 24,
  avgCookie = 1.2
}

var washington = {
  minCust = 11,
  maxCust = 38,
  avgCookie = 1.9
}

var sellwood = {
  minCust = 20,
  maxCust = 48,
  avgCookie = 3.3
}

var pearl = {
  minCust = 3,
  maxCust = 24,
  avgCookie = 2.6
}


var hours = ["10am","11am","12am","1am","2am","3am","4am","5am","6am"];


function store(minCust, maxCust, avgCookie, hours) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.hours = hours;
}


function randomNumber() {
  return Math.random() * (this.maxCust - this.minCust) + this.minCust;
}


var location = new Array();
location.push(pioneer);
location.push(portland);
location.push(washington);
location.push(sellwood);
location.push(pearl);
