var thisIsMyList = document.body.innerHTML += "<ul id='list'> This is my shooping List</ul>"

var shoppingList = [
    "Milk", 
    "Parm Cheese", 
    "Chicken Broth", 
    "Pasta", 
    "Bacon",
    "Feta Cheese"
];

var forList = document.getElementById("list")

for (var i = 0; i < shoppingList.length; i++) {
    forList.innerHTML += "<li>" + shoppingList[i] + "</li>"
    forList.style.fontSize = "20px"
    forList.style.fontWeight = "lighter"
    forList.style.fontFamily = "sans-serif"
    forList.style.color = "cornflowerblue"
    forList.style.textAlign = "center"
};
document.querySelector("#list").classList.add("border")