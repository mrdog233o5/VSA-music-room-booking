"use strict";

function getCalEvents() {
  var url = "https://script.google.com/macros/s/AKfycbwum5gPyELNHOgdA-830hj07DvRu2M2m07U_Mtgr4rckkDmfcI6SeR6Dqvxm5RnQkvu/exec?room=".concat(argv.get("room"));
  fetch(url).then(function (response) {
    return response.text();
  }).then(function (data) {
    var dataJson = JSON.parse(data);
    dataJson["events"].forEach(function (event) {
      bookerNameElements[Number(event["timePeriod"])].textContent = event["booker"];
    });
    dataJson["eventsTmr"].forEach(function (event) {
      bookerNameElementsTmr[Number(event["timePeriod"])].textContent = event["booker"];
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
var bookerNameElementsTmr = document.getElementsByClassName("bookerNameTmr");
Array.from(bookerNameElements).forEach(function (element) {
  element.textContent = "Not booked yet";
  element.style.color = "green";
});
Array.from(bookerNameElementsTmr).forEach(function (element) {
  element.textContent = "Not booked yet";
  element.style.color = "green";
});
getCalEvents();

// show room number
setupDescription(argv.get("room"));

// SECURITY LEVEL 999999999 - CHILD PROOF FUNCTION
var childProofElement = document.getElementById("childProof");
var childProofDelay = 1000;
var lastClick = 0;
document.body.onclick = function () {
  childProofElement.hidden = false;
  lastClick = Date.now();
  setTimeout(function () {
    if (Date.now() - lastClick > childProofDelay) childProofElement.hidden = true;
  }, childProofDelay);
};