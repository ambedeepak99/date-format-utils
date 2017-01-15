/**
 * Created by deepak on 1/15/2017.
 */

var _helper=require('')
var exportFunctions={
    formatDate:formatDate,
    convertDate:convertDate
};
module.exports=exportFunctions;

function formatDate(dateString,formatStyle)
{
    var dateObj=new Date(dateString);
    var finalResult=dateObj.toDateString();
    return finalResult;
}
function convertDate(dateObj){
    return new Date(dateObj).getTime() / 1000;
}
