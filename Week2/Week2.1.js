var header = document.createElement("h1");
header.textContent = "Welcome to my JS site";
header.style.textAlign = "center";
document.body.append(header);

var firstP = document.createElement("P");
firstP.textContent = "All of this was created with Javascript";
document.body.append(firstP);

document.body.innerHTML += "<ul id='test'></ul>"

var myList = [
    "list 1",
    "list 2",
    "list 3"
];
var theList = document.getElementById("test");
for (var i = 0; i < myList.length; i++) {
theList.innerHTML += "<li>" + myList[i] + "</li>"
};
