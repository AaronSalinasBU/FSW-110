const groceryList = document.myForm;

groceryList.addEventListener("submit", (event) => {
    event.preventDefault();

    const resultOne = groceryList.input1.value;
    const resultTwo = groceryList.input2.value;

    document.getElementById("item1").innerHTML += resultOne;
    document.getElementById("item2").innerHTML += resultTwo;
})

const deleteItem = document.getElementById("delete1");

deleteItem.addEventListener("dblclick", (event) => {
    event.preventDefault()
    const itemOne = document.getElementById("item1");
    
    itemOne.replaceWith(" ")
})

const deleteItemTwo = document.getElementById("delete2");

deleteItemTwo.addEventListener("mouseup", (event) => {
    event.preventDefault()
    const itemTwo = document.getElementById("item2");
    
    itemTwo.replaceWith(" ")
})



