function isValidNumber(number) {
    const flag = (number < 0 || number > 4094) ? false : true;
    return flag;
}

function getAmpValue(number) {
    const amp = Math.ceil((10 * number) / 4094);
    return amp;
}

function getSequenceArray(arrOfData) {
    const sequenceArray = [];
    for (let i = 0; i < arrOfData.length; i++) {
        const number = arrOfData[i];
        if (isValidNumber(number)) {
            const amp = getAmpValue(number);
            sequenceArray.push(amp);
        }
    }
    return sequenceArray;
}

module.exports = {
    isValidNumber,
    getAmpValue,
    getSequenceArray,
}