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
    getDayOfWeek:getDayOfWeek,
    ISO8601_FORMAT:ISO8601_FORMAT,
    ISO8601_WITH_TZ_OFFSET_FORMAT:ISO8601_WITH_TZ_OFFSET_FORMAT,
    DATETIME_FORMAT:DATETIME_FORMAT,
    DATE_FORMAT:DATE_FORMAT,
    TIME_FORMAT:TIME_FORMAT
};
module.exports = exportFunctions;

//region constant variables
var numRegex = /^\d+$/;
var monthArrayList=['January','February','March','April','May','June','July','August','September','October','November','December'];
var dayOfWeekArrayList=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var invalidDateMsg="Invalid Date";
var invalidOperationMsg="Invalid Date Operation";
var invalidDateFormatMsg="Invalid Date Format";
var ISO8601_FORMAT = 'yyyy-MM-dd hh:mm:ss.SSS';
var ISO8601_WITH_TZ_OFFSET_FORMAT = 'yyyy-MM-ddThh:mm:ss.SSSO';
var DATETIME_FORMAT = 'dd MM yyyy hh:mm:ss.SSS';
var DATE_FORMAT = 'dd MM yyyy';
var TIME_FORMAT = 'hh:mm:ss.SSS';
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
            return (disOption=='yy'?year.substr(2,2):year);
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
            if(disOption=='MONTH')
                return monthArrayList[month-1];
            else if(disOption=='month')
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

function get12HoursFormat(hour,disOption)
{
    if(disOption=='12')
        return (hour>12?hour-12:hour);
    return hour;
}


function getHours(d,option,disOption,checkValid) {
    try{
        var dateObj=validateDate(d,checkValid);
        if(dateObj) {
            var hours = (option == 'utc' ? dateObj.getUTCHours(): dateObj.getHours());
            return appendZero(get12HoursFormat(hours,disOption), 2);
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
            return appendZero(ms, 3);
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
            if(disOption=='DOW')
                return dayOfWeekArrayList[dow-1];
            else if(disOption=='dow')
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


function getAM_PM_Hours(dateObj,format,option)
{
    var hour=(option == 'utc' ? dateObj.getUTCHours(): dateObj.getHours());
    var AM_PM={
        type:"AM",
        hour:appendZero(hour,2)
    };
    if(hour>=12)
    {
        AM_PM.type="PM";
    }
    if(format.indexOf('hh')!=-1)
    {
        AM_PM.hour=appendZero(get12HoursFormat(hour,'12'), 2);
    }
    return AM_PM;
}
function timeOffset(timezoneOffset) {
    var os = Math.abs(timezoneOffset);
    var hour = appendZero((Math.floor(os / 60)),2);
    var minute = appendZero((os % 60),2);
    return (timezoneOffset < 0 ? "+"+hour+minute : "-"+hour+minute);
}

//endregion



function formatDate(dateString, formatStyle,timezoneOffset,validateOutput) {
    try {
        var dateObj = validateDate(dateString, true);
        if (dateObj) {
            if (!timezoneOffset) {
                timezoneOffset = dateObj.getTimezoneOffset();
            }
            else {
                timezoneOffset=0-timezoneOffset;
            }
            if (typeof formatStyle !== 'string') {
                formatStyle = ISO8601_FORMAT;
            }
            dateObj.setUTCMinutes(dateObj.getUTCMinutes() - timezoneOffset);

            var day = getDate(dateObj, 'utc');//dd
            var month = getMonth(dateObj, 'utc'); //MM
            var monthFullName = getMonth(dateObj, 'utc', 'MONTH'); //MONTH
            var monthShortName = getMonth(dateObj, 'utc', 'month'); //month
            var fullYear = getYear(dateObj, 'utc');//yyyy
            var shortYear = getYear(dateObj, 'utc', 'yy');
            var hourObj = getAM_PM_Hours(dateObj, formatStyle, 'utc');// hh or HH and tt
            var minute = getMinutes(dateObj, 'utc'); // mm
            var second = getSeconds(dateObj, 'utc'); // ss
            var millisecond = getMilliseconds(dateObj, 'utc');//SSS
            var timeZone = timeOffset(timezoneOffset);//O
            var DOWFullName = getDayOfWeek(dateObj, 'utc', 'DOW');
            var DOWShortName = getDayOfWeek(dateObj, 'utc', 'dow');

            dateObj.setUTCMinutes(dateObj.getUTCMinutes() + timezoneOffset);

            var formattedString= formatStyle.replace(/dd/g,day)
                .replace(/MM/g,month)
                .replace(/MONTH/g,monthFullName)
                .replace(/month/g,monthShortName)
                .replace(/yyyy/g,fullYear)
                .replace(/yy/g,shortYear)
                .replace(/hh/gi,hourObj.hour)
                .replace(/mm/g,minute)
                .replace(/ss/g,second)
                .replace(/SSS/g,millisecond)
                .replace(/tt/g,hourObj.type)
                .replace(/DOW/g,DOWFullName)
                .replace(/dow/g,DOWShortName)
                .replace(/O/g,timeZone);

            if(validateOutput==true)
            {
                var validDate=validateDate(formattedString,true);
                if(!validDate)
                    return invalidDateFormatMsg;
            }
            return formattedString;
        }
        else
            return invalidDateMsg;
    }
    catch (e){
        return invalidOperationMsg;}
}
function convertDate(dateObj) {
    return new Date(dateObj).getTime() / 1000;
}
// console.log(formatDate(new Date(),ISO8601_WITH_TZ_OFFSET_FORMAT,-330));
console.log(formatDate(new Date(),"HH:mm:ss tt",1140));