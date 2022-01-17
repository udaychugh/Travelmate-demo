function start() {
    location.replace("first-form.html");
}

function next1() {
    location.replace("second-form.html");
}

function next2() {
    location.replace("journey.html");
}

function showWorks(){
    location.replace("works.html");
}

function help(){
    location.replace("help.html");
}

function gotomaps(){
    location.replace("map.html");
    var city1 = document.getElementById("location").value;
    var city2 = document.getElementById("destination").value;
    localStorage.setItem("city1", city1);
    localStorage.setItem("city2", city2);
}

