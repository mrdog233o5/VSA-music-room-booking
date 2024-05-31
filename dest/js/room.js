"use strict";

var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// URLs
var calURL = "https://calendar.google.com/calendar/embed?src=c_a91f9c9757e6b2c075c9124226752a3fa5f0b75da6df7db4f26476d7b3b229f2%40group.calendar.google.com&ctz=Asia%2FHong_Kong";
var formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdayO083OYlGJyjCxK9KxtvpRjidCApRcGcteE1_VoNWrlJWg/viewform?usp=sf_link";
var iframeCal = String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["<iframe src=\"", "\" style=\"border:solid 1px #777\" width=\"800\" height=\"600\" frameborder=\"0\" scrolling=\"no\"></iframe>"])), calURL);
var iframeForm = String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<iframe src=\"", "\" width=\"640\" height=\"1183\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading\u2026</iframe>"])), formURL);
document.getElementById("cal").innerHTML = iframeCal;
document.getElementById("form").innerHTML = iframeForm;