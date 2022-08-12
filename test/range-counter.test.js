const rangeCounter = require('../range-counter');
const sensorData = require('../twelvebit-sensor-data');
const chai = require('chai');

const {expect} = require('chai');
const spies = require('chai-spies');
chai.use(spies);

const unsortedNum = [2, 3, 1];
const sortedNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sortedNumWithRepeatVals = [1, 2, 3, 3, 5, 6, 7, 8, 9, 10];
const notInRange = [1, 2, 3, 7, 8, 9, 10];


describe('Availability of required functions', () => {
  it('Sort should exist', () => {
    expect(rangeCounter.sort).to.exist;
  });

  it('counter function should exist', () => {
    expect(rangeCounter.getRangeValue).to.exist;
  });

  it('resetCounter function should exist', () => {
    expect(rangeCounter.resetCounterMap).to.exist;
  });

  it('fillRangeCountMap function should exist', () => {
    expect(rangeCounter.fillRangeCountMap).to.exist;
  });

  it('isInRange function should exist', () => {
    expect(rangeCounter.isInRange).to.exist;
  });

  it('getMinMaxRangeKey function should exist', () => {
    expect(rangeCounter.getMinMaxRangeKey).to.exist;
  });
});

describe('Test the functionality of sort', () => {
  it('sort should return values in order', () => {
    expect(rangeCounter.sort(unsortedNum)).to.deep.equal([1, 2, 3]);
  });
});

describe('Test resetCountermap', () => {
  it('It should reset the counter and map values', () => {
    const count = 2;
    const listNum = [1, 2];
    rangeCounter.resetCounterMap(count, listNum);
    expect(listNum.length).equals(0);
  });
});

describe('Test fillRangeCountMap', () => {
  it('It should fill the range map', () => {
    const rangeList = [];
    const rangeMap = {};
    rangeCounter.fillRangeCountMap(sortedNum, rangeList, rangeMap);
    expect(rangeList.length).equals(0);
  });
});

describe('Test isInRange', () => {
  it('It should return true if the number is in range', () => {
    expect(rangeCounter.isInRange(sortedNum, 0)).to.equal(true);
  });

  it('It should return true in range for repeating values', () => {
    expect(rangeCounter.isInRange(sortedNumWithRepeatVals, 2)).to.equal(true);
  });

  it('It should return false if the number is not in range', () => {
    expect(rangeCounter.isInRange(notInRange, 2)).to.equal(false);
  });
});

describe('Test getMinMaxRangeKey', () => {
  it('It should return the min and max range key', () => {
    expect(rangeCounter.getMinMaxRangeKey(sortedNum)).to.equal('1-10');
  });
});

describe('Test printRangeValue', () => {
  it('It should print the range value in csv', () => {
    const listOfNum = sensorData.getSequenceArray([4000, 4001, 4002, 4095]);
    rangeCounter.getRangeValue(listOfNum);
  });
});
