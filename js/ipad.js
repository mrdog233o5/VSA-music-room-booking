// URLs
const apiURL = `https://script.google.com/macros/s/AKfycbys5bxlmflc8x93S0F1BI_-WANlI_b_86WHlDQrC1tre325U2C6RB6DP_gLiiXSWe8VNw/exec`;
const formURL = `https://docs.google.com/forms/d/e/1FAIpQLScRSvadzmoFpnc7qVVM2BXSEUf1iOP3QF0NcB03pLyomOeaKw/viewform?usp=sf_link`;

function update() {
	// set title stuff
	setupDescription(roomNum);

	// fetch and show again
	const url = `${apiURL}?room=${roomNum}`;
	
	fetch(url)
	.then((response) => {
		return response.text();
	})
	.then((data) => {
		// reset the stuff
		Array.from(bookerNameElements).forEach((element) => {
			element.textContent = "Not booked yet";
			element.style.color = "green";
		})
		Array.from(bookerNameElementsTmr).forEach((element) => {
			element.textContent = "Not booked yet";
			element.style.color = "green";
		})
		
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
			text: `${formURL}?usp=pp_url&entry.1111580129=${roomNum}`,
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
const bookerNameElements = document.getElementsByClassName("bookerName");
const bookerNameElementsTmr = document.getElementsByClassName("bookerNameTmr");
const qrContainer = document.getElementById("qrcode");
const backdoorEntrance = document.getElementById("backdoorEntrance");
var roomNum = "";

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
backdoorEntrance.onclick = () => {
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
