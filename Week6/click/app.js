// make the box disapear when the user clicks it
const changeBoxCl = document.querySelector(".red-box")

changeBoxCl.addEventListener("mouseup", function(){
    changeBoxCl.style.backgroundColor = "white"
})