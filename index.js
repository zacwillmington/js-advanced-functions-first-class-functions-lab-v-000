// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    const firstTwo = drivers.slice(0, 2);
    return firstTwo;
}

const returnLastTwoDrivers = function (drivers) {
    const lastTwo = drivers.slice(drivers.length - 2, drivers.length);
    return lastTwo;
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (multiple){
    return function(){ return multiple * multiple };
};
