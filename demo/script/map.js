window.onload = function () {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        alert("location access denied");
    }

    document.getElementById("showMap").src = "https://www.google.com/maps/d/embed?mid=1IEVwjHNKZcYI5LKHZfRSFXEKyzg&ehbc=2E312F";

    //document.getElementById("showMap").src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyBJNY5Iw6lBN66wXCTmI1_gtV5u6pg2j7A&q=Space+Needle,Seattle+WA";
}

function showPosition(position) {
    var x = document.getElementById("demo");
    x.innerHTML = "User Latitude: " + position.coords.latitude +
        "<br> User Longitude: " + position.coords.longitude;
}

var time;
var distance = 33;
var addup = Math.floor(Math.random() * 4) + 1;
var minutes = Math.floor(Math.random() * 60) + 1;
var seconds = Math.floor(Math.random() * 60) + 1;
var d = new Date(); // for now
var hours = d.getHours(); // => 9
var tempcity1 = localStorage.getItem("city1");
var tempcity2 = localStorage.getItem("city2");
document.getElementById("userTime").innerHTML = hours + addup + ":" + minutes + ":" + seconds;
document.getElementById("userLocation").innerHTML = tempcity1;
//console.log(d + addup);



var map = tt.map({
    key: 'IH5ICZ4povMd8ytGHhialJxGLh5qlKYW',
    container: 'map',
    dragPan: !isMobileOrTablet()
});
map.addControl(new tt.FullscreenControl());
map.addControl(new tt.NavigationControl());




