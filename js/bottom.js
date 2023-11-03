async function getText(file) {
		var myObject = await fetch(file);
		var myText = await myObject.text();
		return myText;
}
	
async function roomList() {
	var finalCode = "";
	var container = document.getElementsByClassName("roomsSec")[0];
	const roomCode = await getText("/files/html/room.html");
    const infos = await getText("/files/infos/rooms.json");
}

// some music rooms idk
roomList();
