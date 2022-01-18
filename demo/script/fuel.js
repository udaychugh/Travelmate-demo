var min = Math.floor(Math.random() * 30) + 1.31;
var maz = Math.floor(Math.random() * 50) + 1.23;

var carFuel = Math.floor(Math.random() * ((maz / min) + 1.54)) + min;
document.getElementById("showfuelcomsuption").innerHTML = carFuel;

var station = Math.floor(Math.random() * 10) + 1;
document.getElementById("station").innerHTML = station;


var tempcity1 = localStorage.getItem("city1");
var tempcity2 = localStorage.getItem("city2");

var city1 = tempcity1.toLowerCase();
var city2 = tempcity2.toLowerCase();


document.getElementById("city1").innerHTML = city1;
document.getElementById("city2").innerHTML = city2;

var states = {
    'agra': '95.05',
    'ahmedabad': '95.13',
    'allahabad': '95.35',
    'aurangabad': '111.64',
    'bangalore': '100.58',
    'bhopal': '107.23',
    'bhubaneswar': '101.81',
    'chandigarh': '94.23',
    'chennai': '101.4',
    'coimbatore': '101.89',
    'dehradun': '94',
    'delhi': '95.41',
    'erode': '101.89',
    'gurgaon': '95.9',
    'guwahati': '94.58',
    'hyderabad': '108.2',
    'indore': '107.26',
    'jaipur': '107.06',
    'jammu': '96.15',
    'jamshedpur': '98.45',
    'kanpur': '94.97',
    'kolhapur': '110.09',
    'kolkata': '104.67',
    'kozhikode': '104.46',
    'lucknow': '95.28',
    'ludhiana': '95.57',
    'madurai': '101.98',
    'mangalore': '99.76',
    'mumbai': '109.98',
    'mysore': '100.08',
    'nagpur': '95.27',
    'nashik': '110.4',
    'patna': '105.9',
    'pune': '109.52',
    'raipur': '101.11',
    'rajkot': '94.89',
    'ranchi': '98.52',
    'salem': '102.17',
    'shimla': '96.06',
    'srinagar': '100.36',
    'surat': '95.01',
    'thane': '110.12',
    'trichy': '101.85',
    'vadodara': '94.78',
    'varanasi': '96.12',
    'visakhapatnam': '109.05',
    'faridabad': '96.22',
    'ghaziabad': '95.29',
    'noida': '95.51',
    'thiruvananthapuram': '106.36',
};

var price1 = 0;
var price2 = 0;

if (city1 in states) {
    document.getElementById("price1").innerHTML = states[city1];
    price1 = states[city1];
} else {
    document.getElementById("price1").innerHTML = "Invalid City Found";
}

if (city2 in states) {
    document.getElementById("price2").innerHTML = states[city2];
    price2 = states[city2];
} else {
    document.getElementById("price2").innerHTML = "Invalid City Found";
}


var diff = 0;
if (price1 > price2) {
    diff = price2 - price1;
    document.getElementById("fueldiff").innerHTML = diff.toFixed(2) + " loss";
    document.getElementById("fueldiff").style.color = "red";
} else if (price2 > price1) {
    diff = price1 - price2;
    document.getElementById("fueldiff").innerHTML = diff.toFixed(2) + " profit";
    document.getElementById("fueldiff").style.color = "green";
} else {
    document.getElementById("fueldiff").innerHTML = "neither profit nor loss";
}
