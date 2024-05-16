function getCalEvents() {
	const url = `https://script.google.com/macros/s/AKfycbwum5gPyELNHOgdA-830hj07DvRu2M2m07U_Mtgr4rckkDmfcI6SeR6Dqvxm5RnQkvu/exec?room=${argv.get("room")}`;
	
	fetch(url)
	.then((response) => {
		return response.text();
	})
	.then((data) => {
		let dataJson = JSON.parse(data);
		dataJson["events"].forEach((event) => {
			bookerNameElements[Number(event["timePeriod"])].textContent = event["booker"];
		});
		dataJson["eventsTmr"].forEach((event) => {
			bookerNameElementsTmr[Number(event["timePeriod"])].textContent = event["booker"];
		});
	})
	.catch((error) => {
		console.error(error);
	});
	setTimeout(() => {
		window.requestAnimationFrame(getCalEvents);
	}, 1000); // update every minute
}

function setupDescription(roomNum) {
    var title = Array.from(document.getElementsByClassName("roomNum"));

    // Change the text
    title.forEach(i => {
        i.textContent = roomNum;
    });
}

// display booker name
var argvRaw = window.location.search;
var argv = new URLSearchParams(argvRaw);
var bookerNameElements = document.getElementsByClassName("bookerName");
var bookerNameElementsTmr = document.getElementsByClassName("bookerNameTmr");
Array.from(bookerNameElements).forEach((element) => {
	element.textContent = "Not booked yet";
})
Array.from(bookerNameElementsTmr).forEach((element) => {
	element.textContent = "Not booked yet";
})
getCalEvents();

// show room number
setupDescription(argv.get("room"));

// SECURITY LEVEL 999999999 - CHILD PROOF FUNCTION
const childProofElement = document.getElementById("childProof");
const childProofDelay = 3000;
var lastClick = 0;
document.body.onclick = () => {
	childProofElement.hidden = false;
	lastClick = Date.now();
	setTimeout(() => {
		if (Date.now() - lastClick > childProofDelay) childProofElement.hidden = true;
	}, childProofDelay);
}