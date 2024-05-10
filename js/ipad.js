function getCalEvents(room) {
    const url = `https://script.google.com/macros/s/AKfycbzaZ_gZkz3M3ub35La9mjqxIOWxnbdwsiBUMnfdphio5AG5UqZ8RdzH7jS0sRzrBGTi/exec?room=${room}`;

    fetch(url)
    .then(response => {
        return response.text();
    })
    .then(data => {
      console.log(data); // Output the response data
    })
}




var argvRaw = window.location.search;
var argv = new URLSearchParams(argvRaw);
getCalEvents(argv.get("room"));