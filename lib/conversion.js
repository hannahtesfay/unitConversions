const colors = require('colors');

exports.convertInput = function (inputNumber, inputUnit, outputUnit) {
    if (inputUnit === 'cm' && outputUnit === 'm') {
        const outputNumber = inputNumber / 100
        const cmToM = `${inputNumber}${inputUnit} is ${outputNumber}${outputUnit}`
        return colors.yellow.bold(cmToM)
    } else if (inputUnit === 'm' && outputUnit === 'cm') {
        const outputNumber = inputNumber * 100
        const mToCm = `${inputNumber}${inputUnit} is ${outputNumber}${outputUnit}`
        return colors.yellow.bold(mToCm)
    } else {
        return colors.red.bold(`Please ensure your input is in the format 'convert x cm in m' or 'convert x m in cm'`)
    }
};