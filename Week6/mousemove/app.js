const changeBoxCl = document.querySelector(".red-box")

changeBoxCl.addEventListener("mouseover", function(e,){
    const x = e.pageX;
    const y = e.pageY;
    let cursor = `${x} : ${y}`;
    
    document.getElementById("target").innerHTML = cursor;
})
