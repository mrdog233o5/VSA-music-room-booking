"use strict";

function update() {
  // set title stuff
  setupDescription(roomNum);

  // reset the stuff
  Array.from(bookerNameElements).forEach(function (element) {
    element.textContent = "Not booked yet";
    element.style.color = "green";
  });
  Array.from(bookerNameElementsTmr).forEach(function (element) {
    element.textContent = "Not booked yet";
    element.style.color = "green";
  });

  // fetch and show again
  var url = "https://script.google.com/macros/s/AKfycbwum5gPyELNHOgdA-830hj07DvRu2M2m07U_Mtgr4rckkDmfcI6SeR6Dqvxm5RnQkvu/exec?room=".concat(roomNum);
  fetch(url).then(function (response) {
    return response.text();
  }).then(function (data) {
    var dataJson = JSON.parse(data);
    dataJson["events"].forEach(function (event) {
      bookerNameElements[Number(event["timePeriod"])].textContent = event["booker"];
      bookerNameElements[Number(event["timePeriod"])].style.color = "red";
    });
    dataJson["eventsTmr"].forEach(function (event) {
      bookerNameElementsTmr[Number(event["timePeriod"])].textContent = event["booker"];
      bookerNameElementsTmr[Number(event["timePeriod"])].style.color = "red";
    });
  })["catch"](function (error) {
    console.error(error);
  });
  setTimeout(function () {
    window.requestAnimationFrame(update);
  }, 1000); // update every minute

  // CREATE QR CODE===
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: "https://docs.google.com/forms/d/e/1FAIpQLScfZrbt1IEWbVdJM9mRXeu0e1zcKEWD2jstfcER4nDizcsE5w/viewform?usp=pp_url&entry.1111580129=".concat(roomNum),
    width: document.body.clientWidth * 0.3,
    height: document.body.clientWidth * 0.3,
    colorDark: "#121212",
    colorLight: "#ffffff"
  });
}
function setupDescription(roomNum) {
  var title = Array.from(document.getElementsByClassName("roomNum"));

  // Change the text
  title.forEach(function (i) {
    i.textContent = roomNum;
  });
}

// display booker name
var bookerNameElements = document.getElementsByClassName("bookerName");
var bookerNameElementsTmr = document.getElementsByClassName("bookerNameTmr");
var qrContainer = document.getElementById("qrcode");
var roomNum = "";
update();

// SECURITY LEVEL 999999999 - CHILD PROOF FUNCTION
var childProofElement = document.getElementById("childProof");
var childProofDelay = 1000;
var lastClick = 0;
document.body.onclick = function () {
  childProofElement.hidden = false;
  lastClick = Date.now();
  setTimeout(function () {
    if (Date.now() - lastClick > childProofDelay) childProofElement.hidden = true;
  }, childProofDelay + 100);
};

// BACKDOOR CLASSIFIED *****
var backdoorContainer = document.getElementById("backdoor");
var backdoorTextarea = document.getElementById("backdoorRoomNum");
var backdoorBtn = document.getElementById("backdoorBtn");
var backdoorLastClick = 0;
var backdoorClicks = 0;

// panel
backdoorTextarea.value = roomNum;
backdoorTextarea.oninput = function () {
  roomNum = backdoorTextarea.value;
};

// trigger
// show
qrContainer.onclick = function () {
  if (Date.now() - lastClick <= 3000) {
    backdoorClicks++;
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
backdoorBtn.onclick = function () {
  backdoorLastClick = 0;
  backdoorClicks = 0;
  backdoorContainer.hidden = true;
};