function updateInteger() {
    var s = $('#character1').val();
    var ch = s.charAt(0);
    var conv = ch.charCodeAt(0);
    if (isNaN(conv)) document.getElementById("integer1").value = "type a character and its ASCII value should appear here";
    else document.getElementById("integer1").value = conv;
}

var intervalId1 = window.setInterval(function(){ updateInteger(); }, 1 );

function updateCharacter() {
    var s = $("#integer2").val();
    var ch = String.fromCharCode(s);
    if (s == 0) document.getElementById("character2").value = "type a number and its ASCII corresponding character should appear here";
    else if (s < 0 || s >= 128) document.getElementById("character2").value = "please enter a number in the range 0-127";
    else if (s <= 32 || s == 127) document.getElementById("character2").value = "please enter a displayable character";
    else document.getElementById("character2").value = ch;
}

var intervalId2 = window.setInterval(function(){ updateCharacter(); }, 1 );