"use strict";

function getCalEvents() {
  var url = "https://script.google.com/macros/s/AKfycbxAaVuBo4lbMeQ6IGg9fjmcMKxwKAC21_N_WZcPRy-Wer_XRn52m38_Q3VpWLxpvRZt/exec?room=".concat(argv.get("room"));
  fetch(url).then(function (response) {
    return response.text();
  }).then(function (data) {
    var dataJson = JSON.parse(data);
    dataJson["events"].forEach(function (event) {
      bookerNameElements[Number(event["timePeriod"])].textContent = event["booker"];
    });
  })["catch"](function (error) {
    console.error(error);
  });
  setTimeout(function () {
    window.requestAnimationFrame(getCalEvents);
  }, 1000); // update every minute
}
function setupDescription(roomNum) {
  var title = Array.from(document.getElementsByClassName("roomNum"));

  // Change the text
  title.forEach(function (i) {
    i.textContent = roomNum;
  });
}

// display booker name
var argvRaw = window.location.search;
var argv = new URLSearchParams(argvRaw);
var bookerNameElements = document.getElementsByClassName("bookerName");
Array.from(bookerNameElements).forEach(function (element) {
  element.textContent = "Not booked yet";
});
getCalEvents();

// show room number
setupDescription(argv.get("room"));

// SECURITY LEVEL 999999999 - CHILD PROOF FUNCTION
var childProofElement = document.getElementById("childProof");
var childProofDelay = 3000;
var lastClick = 0;
document.body.onclick = function () {
  childProofElement.hidden = false;
  lastClick = Date.now();
  setTimeout(function () {
    if (Date.now() - lastClick > childProofDelay) childProofElement.hidden = true;
  }, childProofDelay);
};