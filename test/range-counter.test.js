const rangeCounter = require('../range-counter');
const chai = require('chai');

const {expect} = require('chai');
const spies = require('chai-spies');
chai.use(spies);

describe('Test the functionality to sort', () => {
  it('Sort should exist', () => {
    expect(rangeCounter.sort).to.exist;
  });

  it('counter function should exist', () => {
    expect(rangeCounter.printRangeValue).to.exist;
  });

  it('resetCounter function should exist', () => {
    expect(rangeCounter.resetCounterMap).to.exist;
  });

  it('fillRangeCountMap function should exist', () => {
    expect(rangeCounter.fillRangeCountMap).to.exist;
  });
});

describe('Test the functionality of functions', () => {
  it('sort should return values in order', () => {
    expect(rangeCounter.sort([2, 3, 1])).to.deep.equal([1, 2, 3]);
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
