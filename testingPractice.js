function capitalize(title) {
    return title[0].toUpperCase() + title.slice(1)
}

function reverseString(string) {
    let reversed = ''
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i]
    }
    return reversed
}

function calculator(operator, a, b) {
    switch (operator) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
    }
}

function caesarCipher(s, factor) {
    let res = ''
    const lowerCaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const UpperCaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    for (char of s) {
        if (lowerCaseAlphabet.includes(char)) {
            const index = lowerCaseAlphabet.indexOf(char)
            const newIndex = index + factor
            if (newIndex >= lowerCaseAlphabet.length) {
                const newChar = lowerCaseAlphabet[newIndex - lowerCaseAlphabet.length]
                res += newChar
            } else {
                const newChar = lowerCaseAlphabet[newIndex]
                res += newChar
            }
        } else if(UpperCaseAlphabet.includes(char)) {
            const index = UpperCaseAlphabet.indexOf(char)
            const newIndex = index + factor
            if (newIndex >= UpperCaseAlphabet.length) {
                const newChar = UpperCaseAlphabet[newIndex - UpperCaseAlphabet.length]
                res += newChar
            } else {
                const newChar = UpperCaseAlphabet[newIndex]
                res += newChar
            }
        } else {
            res += char
        }
    }
    return res
}

function avg(array) {
    let sum = 0
    array.forEach(e => sum += e)
    return sum / array.length
}

function analyzeArray(array) {
    const min = Math.min(...array)
    const max = Math.max(...array)
    const average = avg(array)
    const len = array.length
    return {
        average: average,
        min: min,
        max: max,
        length: len,
      }
}


module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
 }