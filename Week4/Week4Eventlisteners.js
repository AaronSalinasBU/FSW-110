const title = document.getElementById("header")
title.style.textAlign = "center";
title.style.color = "blue";

const changeBoxCl = document.getElementById("box")
document.querySelector("#box").classList.add("border")

changeBoxCl.addEventListener("mouseover", function(){
    changeBoxCl.style.backgroundColor = "blue"
})
changeBoxCl.addEventListener("mousedown", function(){
    changeBoxCl.style.backgroundColor = "red"
})
changeBoxCl.addEventListener("mouseup", function(){
    changeBoxCl.style.backgroundColor = "yellow"
})
changeBoxCl.addEventListener("dblclick", function(){
    changeBoxCl.style.backgroundColor = "green"
})
document.addEventListener("wheel", function(){
    changeBoxCl.style.backgroundColor = "orange"
})
changeBoxCl.addEventListener("mouseover", function(){
    changeBoxCl.style.backgroundColor = "blue"
})
document.addEventListener("keypress", function(event){
    // I could not figure this one out.
})
