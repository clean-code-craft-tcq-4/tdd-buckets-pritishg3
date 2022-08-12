const sensorData = require('../twelvebit-sensor-data');
const chai = require('chai');

const {expect} = require('chai');
const spies = require('chai-spies');
chai.use(spies);

describe('Availability of required functions', () => {
    it('Should have the function isValidNumber', () => {
        expect(sensorData.isValidNumber).to.exist;
    });   

    it('Should have the function getAmpValue', () => {
        expect(sensorData.getAmpValue).to.exist;
    });

    it('Should have the function getSequenceArray', () => {
        expect(sensorData.getSequenceArray).to.exist;
    });
});

describe('Test the functionality of isValidNumber', () => {
    it('It should return false if the number is not in range', () => {
        expect(sensorData.isValidNumber(4095)).to.be.false;
    });
    
    it('It should return true if the number is in range', () => {
        expect(sensorData.isValidNumber(4000)).to.be.true;
    });
});

describe('Test the functionality of getAmpValue', () => {
    it('It should return the ampere value', () => {
        expect(sensorData.getAmpValue(4094)).to.equal(10);
    });
});

describe('Test the functionality of getSequenceArray', () => {
    it('It should return the sequence array mapped to ampere', () => {
        expect(sensorData.getSequenceArray([4000, 4001, 4002])).to.deep.equal([10, 10, 10]);
    });
    it('Should return the sequence array mapped to ampere ignoring out of range value', () => {
        expect(sensorData.getSequenceArray([4000, 4001, 4002, 4095])).to.deep.equal([10, 10, 10]);
    });
});