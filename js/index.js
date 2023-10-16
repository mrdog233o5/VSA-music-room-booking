
function roomList() {
    var finalCode = "";
    var container = document.getElementsByClassName('roomsSec')[0];
    const roomCode = `
    <div class="room 1 key">
        <img class="background">
        <div class="text">
            <h1 class="left text">{num}</h1>
            <div class="right text">
                <div class="placeholder">
                    <h2 class="location">room: {name}</h2>
                    <h2 class="teacher">teachers: {teachers}</h2>
                </div>
            </div>
        </div>
    </div>`
    for (let i = 0; i < 5; i++) {
        finalCode = finalCode + roomCode
        .replace("{num}", i+1);
    }
    container.innerHTML = finalCode;
}

roomList()