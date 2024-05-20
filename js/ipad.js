function update() {
	// set title stuff
	setupDescription(roomNum);

	// reset the stuff
	Array.from(bookerNameElements).forEach((element) => {
		element.textContent = "Not booked yet";
		element.style.color = "green";
	})
	Array.from(bookerNameElementsTmr).forEach((element) => {
		element.textContent = "Not booked yet";
		element.style.color = "green";
	})

	// fetch and show again
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
		window.requestAnimationFrame(update);
	}, 1000); // update every minute
	
	// CREATE QR CODE===
	qrContainer.innerHTML = "";
	new QRCode(
		qrContainer, {
			text: `https://docs.google.com/forms/d/e/1FAIpQLScfZrbt1IEWbVdJM9mRXeu0e1zcKEWD2jstfcER4nDizcsE5w/viewform?usp=pp_url&entry.1111580129=${roomNum}`,
			width: document.body.clientWidth * 0.3,
			height: document.body.clientWidth * 0.3,
			colorDark : "#121212",
			colorLight : "#ffffff"
		}
	);
}

function setupDescription(roomNum) {
    var title = Array.from(document.getElementsByClassName("roomNum"));

    // Change the text
    title.forEach(i => {
        i.textContent = roomNum;
    });
}

// display booker name
const argv = new URLSearchParams(window.location.search);
const bookerNameElements = document.getElementsByClassName("bookerName");
const bookerNameElementsTmr = document.getElementsByClassName("bookerNameTmr");
const qrContainer = document.getElementById("qrcode");
var roomNum = argv.get("room");

update();

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
};

// BACKDOOR CLASSIFIED *****
const backdoorContainer = document.getElementById("backdoor");
const backdoorTextarea = document.getElementById("backdoorRoomNum");
const backdoorBtn = document.getElementById("backdoorBtn");
var backdoorLastClick = 0;
var backdoorClicks = 0;

// panel
backdoorTextarea.value = roomNum;
backdoorTextarea.oninput = () => {
	roomNum = backdoorTextarea.value;
};

// trigger
// show
qrContainer.onclick = () => {
	if (Date.now() - lastClick <= 3000) {
		backdoorClicks ++;
	} else {
		backdoorLastClick = Date.now();
		backdoorClicks = 0;
	}
	if (backdoorClicks >= 10) {
		backdoorLastClick = 0;
		backdoorClicks = 0;
		backdoorContainer.hidden = false;
	}
};

// hide
backdoorBtn.onclick = () => {
	backdoorLastClick = 0;
	backdoorClicks = 0;
	backdoorContainer.hidden = true;
};
