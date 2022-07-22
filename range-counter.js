function sort(listOfNum) {
  return listOfNum.sort((a, b) => a - b);
}

function resetCounterMap(counter, rangeList) {
  counter = 1;
  rangeList.length = 0;
}

function fillRangeCountMap(sortedNum, rangeList, rangeMap) {
  let counter = 0;
  for (let i = 0; i < sortedNum.length; i++) {
    if (sortedNum[i + 1] - sortedNum[i] === 1) {
      rangeList.push(sortedNum[i]);
    } else {
      rangeList.push(sortedNum[i]);
      counter = rangeList.length;
      rangeMap[rangeList] = counter;
      resetCounterMap(counter, rangeList);
    }
  }
}

function printRangeValue(listOfNum) {
  const sortedNum = sort(listOfNum);
  const rangeMap = {};
  const rangeList = [];
  fillRangeCountMap(sortedNum, rangeList, rangeMap);
  console.log(rangeMap);
}

printRangeValue([2, 1, 10, 11, 12, 13, 3]);

module.exports = {
  sort,
  printRangeValue,
  resetCounterMap,
  fillRangeCountMap,
};
