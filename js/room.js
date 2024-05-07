async function getText(file) {
		var myObject = await fetch(file);
		var myText = await myObject.text();
		return myText;
}

function setupDescription(roomNum) {
    var title = Array.from(document.getElementsByClassName("roomNum"));

    // Change the text
    title.forEach(i => {
        i.textContent = roomNum;
    });
}

function setupIframe() {
    const iframeCal = String.raw`<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FHong_Kong&mode=WEEK&showTitle=0&showCalendars=0&showPrint=0&showNav=0&src=ODZiZmU4ZTVmMGY5Zjc3YmY2MDBhYmM1MGFhODFkZWMwODY2ZDhjNjI0YzdjNWUyMDYzOGYzMTIwMDA1YTUyZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>`;
    const iframeForm = String.raw`<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScfZrbt1IEWbVdJM9mRXeu0e1zcKEWD2jstfcER4nDizcsE5w/viewform?embedded=true" width="640" height="1183" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`;
    document.getElementById("cal").innerHTML = iframeCal;
    document.getElementById("form").innerHTML = iframeForm;
}

function getArgv() {
    var argvRaw = window.location.search;
    var argv = new URLSearchParams(argvRaw);
    return argv;
}

var argv = getArgv();
setupDescription(argv.get("room"));
setupIframe();