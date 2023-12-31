
async function getText(file) {
		var myObject = await fetch(file);
		var myText = await myObject.text();
		return myText;
}
	
async function roomList() {
	var finalCode = "";
	var container = document.getElementsByClassName("roomsSec")[0];
	const roomCode = await getText("/files/html/room.html");
	var infos = JSON.parse(await getText("/files/infos/rooms.json"))["rooms"];
	for (let i = 0; i < 5; i++) {
		finalCode =finalCode + roomCode
				.replace("{num}", i + 1)
				.replace("{num}", i + 1)
				.replace("{num}", i + 1)
				.replace("{num}", i + 1)
				.replace("{room}", infos[i]["room"]);
	}
	container.innerHTML = finalCode;

	let keys = Array.from(document.getElementsByClassName("key"));

	for (var i = 0; i < keys.length; i++) {
		keys[i].addEventListener("click", (function (index) {
			return function () {
				playsound(index);
			};
		})(i));
	}
}

// some music rooms idk
roomList();

function playsound(num) {
	let audio = new Audio("/files/audio/" + num + ".mp3");
	audio.play();
}

function scrollDown() {
	window.scrollTo(0, 800);
}