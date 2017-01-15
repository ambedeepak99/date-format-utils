/**
 * Created by deepak on 1/15/2017.
 */
var _helperFunctions={
    getFullYear:getFullYear,
    getMonth:getMonth,
    getDate:getDate,
    getHours:getHours,
    getMinutes:getMinutes,
    getSeconds:getSeconds

}
module.exports=_helperFunctions;
function getFullYear(d) {
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
