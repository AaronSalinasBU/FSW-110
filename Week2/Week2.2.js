document.body.innerHTML += "<ul id='navbar'></ul>";

var myList = [
    "Home",
    "Login",
    "About"
];
var theList = document.getElementById("navbar");
for (var i = 0; i < myList.length; i++) {
theList.innerHTML += "<li>" + myList[i] + "</li>"
};

document.body.innerHTML += "<h1> this is my header </h1>";

document.body.innerHTML += "<p> this is my Paragraph </p>";

document.body.innerHTML += "<ul id='test'> This is a list of a list </ul>";

var myList = [
    "list 1",
    "list 2",
    "list 3"
];
var theList = document.getElementById("test");
for (var i = 0; i < myList.length; i++) {
theList.innerHTML += "<li>" + myList[i] + "</li>"
};

document.body.innerHTML += "<h3> @follow us on Facebook </h3>;"