"use strict";

// URLs
var apiURL = "https://script.google.com/macros/s/AKfycbys5bxlmflc8x93S0F1BI_-WANlI_b_86WHlDQrC1tre325U2C6RB6DP_gLiiXSWe8VNw/exec";
var formURL = "https://docs.google.com/forms/d/e/1FAIpQLScRSvadzmoFpnc7qVVM2BXSEUf1iOP3QF0NcB03pLyomOeaKw/viewform?usp=sf_link";
function update() {
  // set title stuff
  setupDescription(roomNum);

  // fetch and show again
  var url = "".concat(apiURL, "?room=").concat(roomNum);
  fetch(url).then(function (response) {
    return response.text();
  }).then(function (data) {
    // reset the stuff
    Array.from(bookerNameElements).forEach(function (element) {
      element.textContent = "Not booked yet";
      element.style.color = "green";
    });
    Array.from(bookerNameElementsTmr).forEach(function (element) {
      element.textContent = "Not booked yet";
      element.style.color = "green";
    });
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
    text: "".concat(formURL, "?usp=pp_url&entry.1111580129=").concat(roomNum),
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
var backdoorEntrance = document.getElementById("backdoorEntrance");
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
backdoorEntrance.onclick = function () {
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