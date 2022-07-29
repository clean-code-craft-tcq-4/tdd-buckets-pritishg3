const fs = require('fs');

function sort(listOfNum) {
  return listOfNum.sort((a, b) => a - b);
}

function resetCounterMap(counter, rangeList) {
  counter = 1;
  rangeList.length = 0;
}

function isInRange(sortedNum, i) {
  const isInRange = sortedNum[i + 1] - sortedNum[i] === 1 ? true : false;
  return isInRange;
}

function getMinMaxRangeKey(rangeList) {
  const minRange = rangeList[0];
  const maxRange = rangeList[rangeList.length -1];
  return String(minRange) + '-' + String(maxRange);
}


function fillRangeCountMap(sortedNum, rangeList, rangeMap) {
  let counter = 0;
  for (let i = 0; i < sortedNum.length; i++) {
    if (isInRange(sortedNum, i)) {
      rangeList.push(sortedNum[i]);
    } else {
      rangeList.push(sortedNum[i]);
      counter = rangeList.length;
      rangeMap[getMinMaxRangeKey(rangeList)] = counter;
      resetCounterMap(counter, rangeList);
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

getRangeValue([2, 1, 10, 11, 12, 13, 3]);

module.exports = {
  sort,
  getRangeValue,
  resetCounterMap,
  fillRangeCountMap,
  isInRange,
  getMinMaxRangeKey,
  savetocsv,
};
