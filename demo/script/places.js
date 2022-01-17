window.onload = function(){
    document.getElementById("restro").style.borderBottom = "4px solid #66045E";
}

document.getElementById("restro").onclick = function () {
    document.getElementById("hotel").style.borderBottom = "none";
    document.getElementById("restro").style.borderBottom = "4px solid #66045E";
}

document.getElementById("hotel").onclick = function () {
    document.getElementById("restro").style.borderBottom = "none";
    document.getElementById("hotel").style.borderBottom = "4px solid #66045E";
}