const fs = require('fs');
const array = fs.readFileSync('data.txt').toString().split("\n")

let result = 0

for (let i of array) {
    const lineArray = i.split("")

    const numbers = []

    for (let j of lineArray) {
        const isNumber = !isNaN(j)
        if (isNumber === true) {
            numbers.push(j)
        }
    }

    const firstNumber = numbers[0]
    const lastNumber = numbers[numbers.length - 1]

    const resultPerLine = firstNumber + lastNumber
    result = result + parseInt(resultPerLine)
}

console.log(result);
