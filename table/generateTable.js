function generateTable() {
    console.log("generation started");
    var par = document.getElementById("tableContainer");
    for (var i = 0; i < 128; i++) {
        var child = document.createElement("div");
        child.setAttribute("class", "box littleBox");
        var number = document.createElement("p");
        number.setAttribute("class", "number");
        number.innerHTML = i;
        var character = document.createElement("p");
        character.setAttribute("class", "character");
        character.innerHTML = String.fromCharCode(i);
        child.appendChild(number);
        child.appendChild(character);
        par.appendChild(child);
    }
}