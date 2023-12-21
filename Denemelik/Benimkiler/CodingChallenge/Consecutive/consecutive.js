let array1 = [100, 4, 200, 1, 3, 2];
let array2 = [5, 7, 10, 2, 3, 6, ];

const consecutive = (arr) => {
    let result = [];
    let resultsArray = [];
    let maxCountArray = [];
    let count = 1;

    let sorted = arr.sort((a, b) => a - b);

    for (let index = 1; index < sorted.length; index++) {
        result.push(sorted[index - 1]);
        if (sorted[index] == sorted[index - 1] + 1) {
            count++;
        } else {
            resultsArray.push(result);
            maxCountArray.push(count);
            count = 1;
            result = [];
        }
    }

    let maxLength = [];

    for (let j = 0; j < resultsArray.length; j++) {
        if (maxLength.length < resultsArray[j].length) {
            maxLength = resultsArray[j];
        }
    }

    return [Math.max(...maxCountArray), maxLength];
}

console.log(consecutive(array1));
console.log(consecutive(array2));