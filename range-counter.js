const fs = require('fs');
const sensorData = require('./twelvebit-sensor-data');

function sort(listOfNum) {
  return listOfNum.sort((a, b) => a - b);
}

function resetCounterMap(counter, rangeListdt) {
  counter = 1;
  rangeListdt.length = 0;
}

function isInRange(sortedNum, i) {
  return sortedNum[i + 1] - sortedNum[i] === 1 ? true :
                    sortedNum[i + 1] - sortedNum[i] === 0 ? true : false;
}

function getMinMaxRangeKey(rangeList) {
  const minRange = rangeList[0];
  const maxRange = rangeList[rangeList.length -1];
  return String(minRange) + '-' + String(maxRange);
}


function fillRangeCountMap(sortedNum, rangeListData, rangeMapData) {
  let counter = 0;
  for (let i = 0; i < sortedNum.length; i++) {
    if (isInRange(sortedNum, i)) {
      rangeListData.push(sortedNum[i]);
    } else {
      rangeListData.push(sortedNum[i]);
      counter = rangeListData.length;
      rangeMapData[getMinMaxRangeKey(rangeListData)] = counter;
      resetCounterMap(counter, rangeListData);
    }
  }
}


function getRangeValue(listOfNum) {
  const sortedNum = sort(listOfNum);
  const rangeMap = {};
  const rangeList = [];
  fillRangeCountMap(sortedNum, rangeList, rangeMap);
  savetocsv(rangeMap);
}

function savetocsv(rangeMap) {
  const csv = Object.keys(rangeMap).map((key) => key + ',' + rangeMap[key]);
  csv.unshift('Range,Count');
  fs.writeFileSync('range-counter.csv', csv.join('\n'));
}

const sequenceData = sensorData.getSequenceArray([4000, 4001, 4002, 4095]);
getRangeValue(sequenceData);

module.exports = {
  sort,
  getRangeValue,
  resetCounterMap,
  fillRangeCountMap,
  isInRange,
  getMinMaxRangeKey,
  savetocsv,
};
