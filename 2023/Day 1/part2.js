const fs = require('fs');
const array = fs.readFileSync('data.txt').toString().split("\n")

let result = 0

const textNumbers = [{
    text: "one",
    number: "1",
}, {
    text: "two",
    number: "2",
}, {
    text: "three",
    number: "3",
}, {
    text: "four",
    number: "4",
}, {
    text: "five",
    number: "5",
}, {
    text: "six",
    number: "6",
}, {
    text: "seven",
    number: "7",
}, {
    text: "eight",
    number: "8",
}, {
    text: "nine",
    number: "9",
}]

for (let line of array) {
    const lineArray = line.split("")

    const numbers = []


    for (let i = 0; i < lineArray.length; i++) {
        const isNumber = !isNaN(lineArray[i])
        if (isNumber === true) {
            numbers.push({ position: i, number: lineArray[i] })
        }
    }

    for (const obj of textNumbers) {
        const firstIndex = line.indexOf(obj.text)
        const lastIndex = line.lastIndexOf(obj.text)

        if (firstIndex >= 0 && numbers[0].position > firstIndex) {
            numbers.unshift({ position: firstIndex, number: obj.number })
        }

        if (lastIndex >= 0 && numbers[numbers.length - 1].position < lastIndex) {
            numbers.push({ position: lastIndex, number: obj.number })
        }
    }

    const firstNumber = numbers[0].number
    const lastNumber = numbers[numbers.length - 1].number

    const resultPerLine = firstNumber + lastNumber
    result = result + parseInt(resultPerLine)
}

console.log(result);
