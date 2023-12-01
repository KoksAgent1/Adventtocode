const fs = require("fs")
const performance = require("perf_hooks").performance
const eol = require("os").EOL
 
let startTime = performance.now()
let part1 = (part2 = 0)
let input = fs.readFileSync(__dirname + "/input.txt", "utf8").split(eol)
 
input.map((item) => {
    part1 += getFirstAndLastNumbers(item)
    part2 += getFirstAndLastNumbers(replaceWordsWithNumbers(item))
})
function getFirstAndLastNumbers(inputString) {
    const numbers = inputString.match(/\d/g)
 
    const firstNumber = parseInt(numbers[0])
    const lastNumber = parseInt(numbers[numbers.length - 1])
    return parseInt(firstNumber + "" + lastNumber)
}
function replaceWordsWithNumbers(inputString) {
    const wordToNumber = {
        one: "one1one",
        two: "two2two",
        three: "three3three",
        four: "four4four",
        five: "five5five",
        six: "six6six",
        seven: "seven7seven",
        eight: "eight8eight",
        nine: "nine9nine"
    }
    for (const num in wordToNumber) {
        inputString = inputString.replaceAll(num, wordToNumber[num])
    }
    return inputString
}
let time = performance.now() - startTime
console.log(`Part 1: ${part1}\nPart 2: ${part2}\nTimer: ${time} ms`)