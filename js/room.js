// URLs
const calURL = `https://calendar.google.com/calendar/embed?src=c_a91f9c9757e6b2c075c9124226752a3fa5f0b75da6df7db4f26476d7b3b229f2%40group.calendar.google.com&ctz=Asia%2FHong_Kong`
const formURL = `https://docs.google.com/forms/d/e/1FAIpQLScfZrbt1IEWbVdJM9mRXeu0e1zcKEWD2jstfcER4nDizcsE5w/viewform?embedded=true`

const iframeCal = String.raw`<iframe src="${calURL}" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>`;
const iframeForm = String.raw`<iframe src="${formURL}" width="640" height="1183" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`;
document.getElementById("cal").innerHTML = iframeCal;
document.getElementById("form").innerHTML = iframeForm;