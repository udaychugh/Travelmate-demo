window.onload = function () {
    document.getElementById("restro").style.borderBottom = "4px solid #66045E";
    //document.getElementById("hotelshow").style.display = "none";
}

document.getElementById("restro").onclick = function () {
    document.getElementById("hotel").style.borderBottom = "none";
    document.getElementById("restro").style.borderBottom = "4px solid #66045E";
    document.getElementById("hotelshow").style.display = "none";
    document.getElementById("restoshow").style.display = "flex";
}

document.getElementById("hotel").onclick = function () {
    document.getElementById("restro").style.borderBottom = "none";
    document.getElementById("hotel").style.borderBottom = "4px solid #66045E";
    document.getElementById("restoshow").style.display = "none";
    document.getElementById("hotelshow").style.display = "flex";
}


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide-container");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000);
} {
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dotA");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
}
