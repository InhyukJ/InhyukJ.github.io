function displayChords() {
    document.getElementById("images").innerHTML = "";
    document.getElementById("test").innerHTML = "";
    var x = document.getElementById("form1").elements;
    var returnText = "";
    var i;

    //var test = "Asus4";
    //document.getElementById("test").innerHTML = "<img src='chordImages/" + test + ".png' height='150' width='150'>";


    for (i = 1;i < x.length;i++) {
	var chord = x.item(i).name;
	var newChord = formatChord(chord);

	if (x.item(i).checked) {
	    returnText += "<img src='chordImages/" + newChord + ".png' height='150' width='150'>";
	}
    }
		
    document.getElementById("images").innerHTML = returnText;
    

    function formatChord(chord) {
	var slashIndex = chord.indexOf("/");
	var sharpIndex = chord.indexOf("#");
	if (slashIndex != -1 && sharpIndex != -1) {
	    if (slashIndex > sharpIndex) {
		return chord.substring(0, sharpIndex) + "sharp" + chord.substring(sharpIndex + 1, slashIndex) + chord.substring(slashIndex + 1, chord.length);
	    }
	    else {
		return chord.substring(0, slashIndex) + chord.substring(slashIndex + 1, sharpIndex) + "sharp" + chord.substring(sharpIndex + 1, chord.length);
	    }
	}
	else if (slashIndex != -1) {
	     return chord.substring(0, slashIndex) + chord.substring(slashIndex + 1, chord.length);
	}
	else if (sharpIndex != -1) {
	    return chord.substring(0, sharpIndex) + "sharp" + chord.substring(sharpIndex + 1, chord.length);
	}
	else {
	     return chord;
	}
    }
}
