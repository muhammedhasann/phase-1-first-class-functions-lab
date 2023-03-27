
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

selectingDrivers[0];

const createFareMultiplier = function(multiplyValue) {
  return function(value) {
    return multiplyValue * value;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers);
}
