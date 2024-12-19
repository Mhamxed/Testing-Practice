const { default: test } = require('node:test')
const func = require('./testingPractice')
const capitalize = func.capitalize
const reverseString = func.reverseString
const calculator = func.calculator
const caesarCipher = func.caesarCipher
const analyzeArray = func.analyzeArray

it ('Capilalize the first letter of a string', () => {
    expect(capitalize('title')).toBe('Title')
})

it ('Reverse a string', () => {
    expect(reverseString('string')).toBe('gnirts')
})

it ('Calculate the sum, differance, division or multiplacation of two given numbers', () => {
    expect(calculator('+', 1, 2)).toBe(3)
})

it ('Calculate the sum, differance, division or multiplacation of two given numbers', () => {
    expect(calculator('-', 4, 2)).toBe(2)
})

it ('Calculate the sum, differance, division or multiplacation of two given numbers', () => {
    expect(calculator('/', 4, 2)).toBe(2)
})

it ('Calculate the sum, differance, division or multiplacation of two given numbers', () => {
    expect(calculator('*', 2, 2)).toBe(4)
})

it ('Shifts a character or a string by a factor', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
})

it ('Shifts a character or a string by a factor', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
})

it ('Shifts a character or a string by a factor', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

it ('Return an object containing the average, the minimum value, the maximum value, and the length of a given array of numbers', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     })
})





