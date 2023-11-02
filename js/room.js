async function getText(file) {
		var myObject = await fetch(file);
		var myText = await myObject.text();
		return myText;
}

async function setupDescription() {

    // read
    var room = document.getElementById('room');
    var desSec = document.getElementsByClassName('desSec')[0];
    var roomNum = Number(room.getAttribute('data'));
    var infos = JSON.parse(await getText("/files/infos/rooms.json"))["rooms"][roomNum-1];
    room.style.display = "none";

    // change the text
    document.getElementsByClassName("titleText")[0].innerHTML = infos["room"];
    desSec.querySelector("#location").innerHTML = "location: " + infos["room"];
}

function setupIframe() {
    var iframeCal = String.raw`<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffe2b4&ctz=Asia%2FHong_Kong&showTabs=0&showCalendars=0&showPrint=0&showDate=0&showTitle=0&showNav=0&showTz=0&mode=WEEK&src=Y181ZmViOTk1ZWI5YjY4MThiOGIyN2IzYmYxYmZlMzY1OTMzMDY4MWMwNWZjNWEzOWZlMGViM2I1NTk5NzU0YWQ2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23E67C73" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>`;
    var iframeForm = String.raw`<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeDl7bcXxkQW8d5lIfRQFfFwCq0_kf5P-8SA9lynO_mwPKMqQ/viewform?embedded=true" width="800" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`;
    document.getElementById("cal").innerHTML = iframeCal;
    document.getElementById("form").innerHTML = iframeForm;
}

setupDescription();
setupIframe();