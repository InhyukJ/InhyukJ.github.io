function displayBook() {  
    if (checkCredentials()) {
	//displayData(result);
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
    document.getElementById("transactions").innerHTML += "<br>loadFile() activated";
    var frame = document.getElementById("iFrameFile");
    document.getElementById("transactions").innerHTML += "<br>var frame";
   
    var rawStr = frame.contentDocument.body.firstChild.innerHTML;

    document.getElementById("transactions").innerHTML += "<br>" + rawStr + "<br>test1";
}

function displayData(data) {
    var returnStr = "<table>";
    
    for (i = 0;i < data.length;i++) {
 	if (i % 4 == 0) returnStr += "<tr><td>" + data[i] + "</td>";
	else if (i % 4 == 3) returnStr += "<td>" + data[i] + "</td></tr>";
	else returnStr += "<td>" + data[i] + "</td>";
    }
    returnStr += "</table>";

    var form = "<form id='form2' action='/action_page.php'><fieldset><legend>Add Transaction</legend>Date: <input type='date' id='date'><br><br>Event: <input type='text' id='event'><br><br>Change: <input type='number' id='change'></fieldset></form><button onclick='addTransaction()'>Add Transaction</button><p id='test'></p><script src='transactions.js'></script>";
    //document.getElementById("transactions").innerHTML = returnStr + form;
}

function displayForm() {
    document.getElementById("div1").style.display = "block";
}

function addTransaction() {
    document.getElementById("transactions").innerHTML += "<br>addTransaction() activated";
}
