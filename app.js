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
    getMilliseconds: getMilliseconds,
    getDayOfWeek:getDayOfWeek
};
module.exports = exportFunctions;

//region constant variables
var numRegex = /^\d+$/;
var monthArrayList=['January','February','March','April','May','June','July','August','September','October','November','December'];
var dayOfWeekArrayList=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//endregion


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
function validateDate(d, checkValidation) {
    if (checkValidation == true) {
        var dateObj;
        try {
            if (numRegex.test(d) == true && typeof d == 'string')
                d = Number(d);
            dateObj = new Date(d);
            if(dateObj && dateObj.toString().search(/invalid/gi)!=-1)
                return null;
            return dateObj;
        } catch (e) {
            return null;
        }
    }
    else {
        return d;
    }
}
function getYear(d,option,disOption,checkValid) {
    try{
        var dateObj=validateDate(d,checkValid);
        if(dateObj)
        {
            var year=(option=='utc'?dateObj.getUTCFullYear():dateObj.getFullYear()).toString();
            return (disOption=='sy'?year.substr(2,2):year);
        }
        return dateObj;
    }
    catch (e){
        return null;
    }
}

// console.log(getYear(new Date()));
// console.log(getYear('1484588155000'));
// console.log(getYear(1484588155000,'','sy',true));

function getMonth(d,option,disOption,checkValid) {
    try{
        var dateObj=validateDate(d,checkValid);
        if(dateObj) {
            var month = (option == 'utc' ? (dateObj.getUTCMonth() + 1) : (dateObj.getMonth() + 1));
            if(disOption=='mfn')
                return monthArrayList[month-1];
            else if(disOption=='msn')
                return monthArrayList[month-1].substr(0,3);
            else
                return appendZero(month, 2);
        }
        return dateObj;
    }
    catch (e){
        return null;
    }
}
// console.log(getMonth(new Date()));
// console.log(getMonth('1484588155000'));
// console.log(getMonth(1484588155000,'','mfn',true));

function getDate(d,option,checkValid) {
    try{
        var dateObj=validateDate(d,checkValid);
        if(dateObj) {
            var date = (option == 'utc' ? dateObj.getUTCDate(): dateObj.getDate());
            return appendZero(date, 2);
        }
        return dateObj;
    }
    catch (e){
        return null;
    }
}

// console.log(getDate(new Date()));
// console.log(getDate('1484588155000'));
// console.log(getDate(1484588155000,'utc',true));


function getHours(d,option,checkValid) {
    try{
        var dateObj=validateDate(d,checkValid);
        if(dateObj) {
            var hours = (option == 'utc' ? dateObj.getUTCHours(): dateObj.getHours());
            return appendZero(hours, 2);
        }
        return dateObj;
    }
    catch (e){
        return null;
    }
}
// console.log(getHours(new Date()));
// console.log(getHours('1484588155000','',true));
// console.log(getHours(new Date(),'utc',true));

function getMinutes(d,option,checkValid) {
    try{
        var dateObj=validateDate(d,checkValid);
        if(dateObj) {
            var minutes = (option == 'utc' ? dateObj.getUTCMinutes(): dateObj.getMinutes());
            return appendZero(minutes, 2);
        }
        return dateObj;
    }
    catch (e){
        return null;
    }
}
function getSeconds(d,option,checkValid) {
    try{
        var dateObj=validateDate(d,checkValid);
        if(dateObj) {
            var seconds = (option == 'utc' ? dateObj.getUTCSeconds(): dateObj.getSeconds());
            return appendZero(seconds, 2);
        }
        return dateObj;
    }
    catch (e){
        return null;
    }
}
function getMilliseconds(d,option,checkValid) {
    try{
        var dateObj=validateDate(d,checkValid);
        if(dateObj) {
            var ms = (option == 'utc' ? dateObj.getUTCMilliseconds(): dateObj.getMilliseconds());
            return appendZero(ms, 2);
        }
        return dateObj;
    }
    catch (e){
        return null;
    }
}

function getDayOfWeek(d,option,disOption,checkValid) {
    try{
        var dateObj=validateDate(d,checkValid);
        if(dateObj) {
            var dow = (option == 'utc' ? (dateObj.getUTCDay() + 1) : (dateObj.getDay() + 1));
            if(disOption=='dfn')
                return dayOfWeekArrayList[dow-1];
            else if(disOption=='dsn')
                return dayOfWeekArrayList[dow-1].substr(0,3);
            else
                return appendZero(dow, 2);
        }
        return dateObj;
    }
    catch (e){
        return null;
    }
}
// console.log(getDayOfWeek(new Date()));
// console.log(getDayOfWeek('1484588155000','utc','dsn',true));
// console.log(getDayOfWeek(1484588155000,'','dfn',true));
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
