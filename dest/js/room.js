"use strict";

var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// URLs
var calURL = "https://calendar.google.com/calendar/embed?src=c_59c80ab8c7b324268561d385c001982c0609490f4a04959c47fd5d2bcd8feab0%40group.calendar.google.com&ctz=Asia%2FHong_Kong";
var formURL = "https://docs.google.com/forms/d/e/1FAIpQLScRSvadzmoFpnc7qVVM2BXSEUf1iOP3QF0NcB03pLyomOeaKw/viewform?usp=sf_link";
var iframeCal = String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["<iframe src=\"", "\" style=\"border:solid 1px #777\" width=\"800\" height=\"600\" frameborder=\"0\" scrolling=\"no\"></iframe>"])), calURL);
var iframeForm = String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<iframe src=\"", "\" width=\"640\" height=\"1183\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading\u2026</iframe>"])), formURL);
document.getElementById("cal").innerHTML = iframeCal;
document.getElementById("form").innerHTML = iframeForm;