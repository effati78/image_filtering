var img = document.getElementById("img");
var grayscale = document.getElementById("grayscale");
var blur = document.getElementById("blur");
var brightness = document.getElementById("brightness");
var contrast = document.getElementById("contrast");
var hue_rotate = document.getElementById("hue_rotate");
var invert = document.getElementById("invert");
var opacity = document.getElementById("opacity");
var saturate = document.getElementById("saturate");
var sepia = document.getElementById("sepia");

function change() {
    img.style.filter = "brightness(" + (brightness.value * 2) + "%) ";
    img.style.filter += "blur(" + blur.value + "px) ";
    img.style.filter += "grayscale(" + grayscale.value + "%) ";
    img.style.filter += "contrast(" + (contrast.value * 2) + "%) ";
    img.style.filter += "hue-rotate(" + (hue_rotate.value * 2) + "deg) ";
    img.style.filter += "invert(" + invert.value + "%) ";
    img.style.filter += "opacity(" + opacity.value + "%) ";
    img.style.filter += "saturate(" + (saturate.value * 10) + "%) ";
    img.style.filter += "sepia(" + sepia.value + "%) ";
}

function filter() {
    change();
}

function CLICK(obj) {
    var name = obj.getAttribute("data-name");
    var value = obj.getAttribute("data-value");
    document.getElementById(name).value = value;
    change();
}