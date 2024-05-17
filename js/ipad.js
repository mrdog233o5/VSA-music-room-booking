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
			bookerNameElements[Number(event["timePeriod"])].style.color = "red";
		});
		dataJson["eventsTmr"].forEach((event) => {
			bookerNameElementsTmr[Number(event["timePeriod"])].textContent = event["booker"];
			bookerNameElementsTmr[Number(event["timePeriod"])].style.color = "red";
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
	element.style.color = "green";
})
Array.from(bookerNameElementsTmr).forEach((element) => {
	element.textContent = "Not booked yet";
	element.style.color = "green";
})
getCalEvents();

// show room number
setupDescription(argv.get("room"));

// SECURITY LEVEL 999999999 - CHILD PROOF FUNCTION
const childProofElement = document.getElementById("childProof");
const childProofDelay = 1000;
var lastClick = 0;
document.body.onclick = () => {
	childProofElement.hidden = false;
	lastClick = Date.now();
	setTimeout(() => {
		if (Date.now() - lastClick > childProofDelay) childProofElement.hidden = true;
	}, childProofDelay+100);
}

// CREATE QR CODE
new QRCode(
	document.getElementById("qrcode"), {
		text: `https://docs.google.com/forms/d/e/1FAIpQLScfZrbt1IEWbVdJM9mRXeu0e1zcKEWD2jstfcER4nDizcsE5w/viewform?usp=pp_url&entry.1111580129=${argv.get("room")}`,
		width: document.body.clientWidth * 0.3,
		height: document.body.clientWidth * 0.3,
		colorDark : "#121212",
		colorLight : "#ffffff"
	}
);