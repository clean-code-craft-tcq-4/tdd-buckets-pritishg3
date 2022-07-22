const range_counter = require('../range-counter');
const chai =  require("chai");

const {expect} = require('chai');
const spies = require('chai-spies');
chai.use(spies);


describe('Test the functionality to sort', () => {
    it('Sort should exist', () => {
        expect(range_counter.sort).to.exist;
    })

    it('counter function should exist', () => {
        expect(range_counter.printRangeValue).to.exist;
    })

    it('resetCounter function should exist', () => {
        expect(range_counter.resetCounterMap).to.exist;
    })

    it('fillRangeCountMap function should exist',() => {
        expect(range_counter.fillRangeCountMap).to.exist;
    })
})

describe('Test the functionality of functions', () => {
    it('sort should return values in order', () => {
        expect(range_counter.sort([2,3,1])).to.deep.equal([1,2,3]);
    })
})

describe('Test resetCountermap', () => {
    it('It should reset the counter and map values', () => {
        let count = 2;
        let listNum = [1,2];
        range_counter.resetCounterMap(count, listNum);        
        expect(listNum.length).equals(0)
    })
})


