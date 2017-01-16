/**
 * Created by deepak on 1/15/2017.
 */

var exportFunctions = {
    formatDate: formatDate,
    convertDate: convertDate,
    getYear: getYear,
    getMonth: getMonth,
    getDate: getDate,
    getHours: getHours,
    getMinutes: getMinutes,
    getSeconds: getSeconds,
    getMilliseconds: getMilliseconds
};
module.exports = exportFunctions;

//region Helper Function
function appendZero(number, width, lastPosition) {
    var numString = ((number != null && number != undefined) ? number.toString() : "0");
    while (numString.length < width) {
        if (lastPosition == true)
            numString = numString + "0";
        else
            numString = "0" + numString;
    }
    return numString;
}
function getYear(d) {
    return d.getFullYear();
}
function getMonth(d) {
    return ((d.getMonth() + 1) < 10 ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1));
}
function getDate(d) {
    return (d.getDate() < 10 ? "0" + d.getDate() : d.getDate());
}
function getHours(d) {
    return (d.getHours() < 10 ? "0" + d.getHours() : d.getHours());
}
function getMinutes(d) {
    return (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes());
}
function getSeconds(d) {
    return (d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds());
}
function getMilliseconds(d) {
    return (d.getMilliseconds() < 10 ? "0" + d.getMilliseconds() : d.getMilliseconds());
}
//endregion

function formatDate(dateString, formatStyle) {
    var dateObj = new Date(dateString);
    var finalResult = dateObj.toDateString();
    return finalResult;
}
function convertDate(dateObj) {
    return new Date(dateObj).getTime() / 1000;
}
//console.log(convertDate(new Date()));
