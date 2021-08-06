


const targetFinder = (numbers, target) => {
    let hashStorage = {}
    for (let number of numbers) {
        console.log(number)
        let numberCheckingFor = target - number
        console.log(`Current number being iterated over is ${number} and the number we need is ${numberCheckingFor}`)
    }
}

let target = 10
let numbers = [1, 4, 99, 12, 10, 9]

console.log(targetFinder(numbers, target))