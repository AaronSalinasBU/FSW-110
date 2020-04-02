function checkKeyPressed(event) {
    const x = event.which || event.keyCode;
    const y = event.key;
    document.getElementById("output").innerHTML = `You pressed "${y}"... The key code for that is: ${x}`;
  }
document.body.addEventListener("keydown", checkKeyPressed);