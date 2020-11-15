const expect = require('chai').expect;
const colors = require('colors')
const { convertInput } = require('../lib/conversion');

describe("convertInput", () => {

    it("should be a function", () => {
        expect(convertInput).to.be.a("function");
    });

    it("should convert from cm to m by dividing by 100", () => {
        let output = (colors.yellow.bold('100cm is 1m'))
        expect(convertInput("100", "cm", "m")).to.equal(output);
    });

    it("should convert from m to cm by multiplying by 100", () => {
        let output = (colors.yellow.bold('1m is 100cm'))
        expect(convertInput("1", "m", "cm")).to.equal(output)
    });

    it("should return error for incorrect input", () => {
        const errorMessage = colors.red.bold(`Please ensure your input is in the format 'convert x cm in m' or 'convert x m in cm'`)
        expect(convertInput("A", "B", "C")).to.equal(errorMessage)
    });

    it("should return error for value less than 0", () => {
        const errorMessage = colors.red.bold(`Please ensure your inputted number is greater than 0.`)
        expect(convertInput("-1", "cm", "m")).to.equal(errorMessage)
    });

})