document.body.innerHTML += "<h1 id= 'arrayTimes'></h1> ";

var repeat = document.getElementById("arrayTimes");
const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];
for(var i = 0; i < names.length; i++){
    var newWord = document.createElement("h1")
    newWord.textContent = names[i]
    newWord.style.backgroundColor = "blue"
    newWord.style.textAlign = "center"
    repeat.append(newWord)
};