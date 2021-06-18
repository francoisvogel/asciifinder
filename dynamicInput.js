function updateInteger() {
    var s = $('#character1').val();
    var ch = s.charAt(0);
    if (s.length > 1) document.getElementById("character1").value = ch;
    var conv = ch.charCodeAt(0);
    if (isNaN(conv)) document.getElementById("integer1").value = "type a character and its ASCII value should appear here";
    else document.getElementById("integer1").value = conv;
}

var intervalId1 = window.setInterval(function(){ updateInteger(); }, 1);

function updateCharacter() {
    var s = $("#integer2").val();
    var ch = String.fromCharCode(s);
    if (s == "") document.getElementById("character2").value = "type a number and its ASCII char should appear here";
    else if (isNaN(parseInt(s))) document.getElementById("character2").value = "please enter an integer";
    else if (s < 0 || s >= 128) document.getElementById("character2").value = "please enter a number in the range 0-127";
    else if (s <= 32 || s == 127) document.getElementById("character2").value = "please enter a displayable character";
    else document.getElementById("character2").value = ch;
}

var intervalId2 = window.setInterval(function(){ updateCharacter(); }, 1);

function updateArray() {
    var s = $("#string1").val();
    let r = "{";
    for (var i = 0; i < s.length; i++) {
        var l = s[i].charCodeAt(0);
        r += l.toString();
        if (i != s.length-1) r += ","
    }
    r += "}";
    document.getElementById("array1").value = r;
}

var intervalId3 = window.setInterval(function(){ updateArray(); }, 1);