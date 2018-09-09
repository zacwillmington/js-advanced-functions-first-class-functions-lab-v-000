// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    const firstTwo = drivers.slice(0, 2);
    return firstTwo;
}

const returnLastTwoDrivers = function (drivers) {
    const lastTwo = drivers.slice(drivers.length - 3, drivers.length);
    return lastTwo;
}