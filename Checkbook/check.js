function displayBook() {  
    if (checkCredentials()) {
	var rawStr = loadFile();
	displayData(rawStr);
	displayForm();
    }
    else {
	document.getElementById("transactions").innerHTML = "<b>THE ID AND/OR THE PASSWORD IS INCORRECT. PLEASE TRY AGAIN.</b>";
    }
}

function checkCredentials() {
    var x = document.getElementById("form1").elements;
  
    if (x.item(1).value == "" &&
	x.item(2).value == "") {
	
	x.item(1).value = "";
	x.item(2).value = "";
	return true;
    }

    else {
	x.item(1).value = "";
	x.item(2).value = "";
	return false;
    }
}

function loadFile() {
    var frame = document.getElementById("iFrameFile");
    var rawStr = frame.contentDocument.body.firstChild.innerHTML;
    return rawStr;
}

function displayData(rawStr) {
    var rawArray = rawStr.split(",");
    var returnStr = "<table>";
    
    for (i = 0;i < rawArray.length;i++) {
 	if (i % 4 == 0) returnStr += "<tr><td>" + rawArray[i] + "</td>";
	else if (i % 4 == 3) returnStr += "<td>" + rawArray[i] + "</td></tr>";
	else returnStr += "<td>" + rawArray[i] + "</td>";
    }
    returnStr += "</table>";
    document.getElementById("transactions").innerHTML += returnStr;
}

function displayForm() {
    document.getElementById("div1").style.display = "block";
}

function addTransaction() {
    //document.getElementById("transactions").innerHTML += "<br>addTransaction() activated";
    var form2 = document.getElementById("form2");
    var date = form2.item(1).value;
    //var date = document.getElementById("date").value;
    document.getElementById("transactions") += date;
}
