"use strict";

function getCalEvents(room) {
  var url = "https://script.google.com/macros/s/AKfycbzaZ_gZkz3M3ub35La9mjqxIOWxnbdwsiBUMnfdphio5AG5UqZ8RdzH7jS0sRzrBGTi/exec?room=".concat(room);
  fetch(url).then(function (response) {
    return response.text();
  }).then(function (data) {
    console.log(data); // Output the response data
  });
}
var argvRaw = window.location.search;
var argv = new URLSearchParams(argvRaw);
getCalEvents(argv.get("room"));