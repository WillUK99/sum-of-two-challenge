const targetFinder = (numbers, target) => {
    // ...Hash storage for fast lookup (O(1))**
    let hashStorage = {}

    // Iterating over the given array of numbers one at a time
    for (let number of numbers) {
        /* We then calculate the number we need in order to equal the target number
           eg. 1) If the target number is 10 and the current number being iterated over in the array is 3 then;

                (target number)10 - (no. being iterated over)3 = 7

            In this case we would need to have a 7 in our hash table in order to equal our target of 10.

            eg. 2) Target is 630 and the number being iterated over is 
        */
        let numberCheckingFor = target - number
        //we then check if this number we are looking for has been stored in the hash table
        if (numberCheckingFor in hashStorage) {
            // if it has then we return both the number we are iterating over and also the number we are checking for 
            return [number, numberCheckingFor]
        } else {
            // if the number we are checking for can't be found inside the hash table then we add it to the table 
            // with the key being the number we are currently iterating over
            hashStorage[number] = true
            console.log(hashStorage)
        }
    }
    // if no numbers in the array equal the target number then an empty array will be returned 
    return []
}


const indexFinder = (numbers, target) => {
    const hashStorage = {}
    for(let i = 0; i < numbers.length; i++) {
        //current number being looped over and being assigned to currentNum
        let currentNum = numbers[i]
        console.log(currentNum)
        //again getting the needed number to sum to target number
        let numberNeeded = target - currentNum
        //getting the index of the stored number IF it is present in the hash
        let index2 = hashStorage[numberNeeded]
        //if the value for index2 is NOT null then it is true and runs the truthy statement.
        if (index2 != null) {
            return [index2, i]
        } else {
            //if no number can be found to equal target it is stored in the hash
            hashStorage[currentNum] = i
        }
    }
    //if no numbers = target and empty array is returned.
    return []
}

let target = 11
let numbers = [3, 1, 4, 99, 12, 10, 9]

console.log(indexFinder(numbers, target))