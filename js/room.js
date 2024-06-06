// URLs
const calURL = `https://calendar.google.com/calendar/embed?src=c_59c80ab8c7b324268561d385c001982c0609490f4a04959c47fd5d2bcd8feab0%40group.calendar.google.com&ctz=Asia%2FHong_Kong`
const formURL = `https://docs.google.com/forms/d/e/1FAIpQLScRSvadzmoFpnc7qVVM2BXSEUf1iOP3QF0NcB03pLyomOeaKw/viewform?usp=sf_link`;

const iframeCal = String.raw`<iframe src="${calURL}" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>`;
const iframeForm = String.raw`<iframe src="${formURL}" width="640" height="1183" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`;
document.getElementById("cal").innerHTML = iframeCal;
document.getElementById("form").innerHTML = iframeForm;