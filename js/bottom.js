async function getText(file) {
	var myObject = await fetch(file);
	var myText = await myObject.text();
	return myText;
}

async function roomList() {
	
	var container = document.getElementsByClassName("bottomSec")[0];
	var bottomHtml = await getText("../files/html/bottom.html");
	container.innerHTML = bottomHtml;
}

// some music rooms idk
roomList();
