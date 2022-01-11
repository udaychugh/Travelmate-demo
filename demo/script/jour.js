document.getElementById("exchangeLocation").onclick = function () {
    var location = document.getElementById("location").value;
    var destination = document.getElementById("destination").value;
    if (location.length == 0 || destination.length == 0) {
        alert("Enter the location and destination first");
    } else {
        var obj1 = document.getElementById('location').value;
        var obj2 = document.getElementById('destination').value;

        var temp = obj1;
        obj1 = obj2;
        obj2 = temp;

        // Save the swapped values to the input element.
        document.getElementById('location').value = obj1;
        document.getElementById('destination').value = obj2;

    }
}
