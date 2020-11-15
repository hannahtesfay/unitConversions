#!/usr/bin/env node

const conversion = require("../lib/conversion");
const input = process.argv.splice(2);

const inputNumber = input[0];
const inputUnit = input[1];
const outputUnit = input[3];

console.log(conversion.convertInput(inputNumber, inputUnit, outputUnit))