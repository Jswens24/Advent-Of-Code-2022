const fs = require('fs');

fs.readFile('/Users/jessicaswenson/Development/AoC/AoC2022/Day4/input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    let input = data.split('\n')

    cleanInput = input.map((input) => input.split(','));

    // console.log(cleanInput[0])

    let firstPair = [];
    let secondPair = [];

    let firstPairArr = [];
    let secondPairArr = [];

    let overlapCount = 0;


    const findOverlapPairs = (arr) => {

        for (let i = 0; i < arr.length - 1; i++) {
            firstPair = arr[i][0];
            secondPair = arr[i][1];
            firstPairArr.push(firstPair.split('-'));
            secondPairArr.push(secondPair.split('-'));
            // console.log({ i, overlapCount })
            // console.log(secondPairArr[1]);
        }


        for (let j = 0; j < firstPairArr.length; j++) {
            // console.log(secondPairArr[j][0]);
            if (+firstPairArr[j][0] >= +secondPairArr[j][0] && +firstPairArr[j][1] <= +secondPairArr[j][1]) {
                overlapCount++
            } else if (+secondPairArr[j][0] >= +firstPairArr[j][0] && +secondPairArr[j][1] <= +firstPairArr[j][1]) {
                overlapCount++
            }

            // console.log(typeof +firstPairArr[j][0]);
        }
        console.log(overlapCount);
    }

    findOverlapPairs(cleanInput);


})

//not 491

//if (firstPairArr[0] >= secondPairArr[0] && firstPairArr[1] <= secondPairArr[1]) {
//     overlapCount++
// } else if (secondPairArr[0] >= firstPairArr[0] && secondPairArr[1] <= firstPairArr[1]) {
//     overlapCount++
// }