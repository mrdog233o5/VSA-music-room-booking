"use strict";

var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var iframeCal = String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["<iframe src=\"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FHong_Kong&mode=WEEK&showTitle=0&showCalendars=0&showPrint=0&showNav=0&src=ODZiZmU4ZTVmMGY5Zjc3YmY2MDBhYmM1MGFhODFkZWMwODY2ZDhjNjI0YzdjNWUyMDYzOGYzMTIwMDA1YTUyZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457\" style=\"border:solid 1px #777\" width=\"800\" height=\"600\" frameborder=\"0\" scrolling=\"no\"></iframe>"])));
var iframeForm = String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLScfZrbt1IEWbVdJM9mRXeu0e1zcKEWD2jstfcER4nDizcsE5w/viewform?embedded=true\" width=\"640\" height=\"1183\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading\u2026</iframe>"])));
document.getElementById("cal").innerHTML = iframeCal;
document.getElementById("form").innerHTML = iframeForm;