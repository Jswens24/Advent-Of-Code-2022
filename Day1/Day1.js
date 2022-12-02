
const fs = require('fs');

fs.readFile('/Users/jessicaswenson/Development/AoC/AoC2022/Day1/input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    let inputArr = data.split('\n\n');
    mappedInput = inputArr.map((input) => input.split('\n'));

    const mostCalFinder = (input) => {
        let highestCals = 0;

        for (let i = 0; i < input.length; i++) {
            let sum = 0;
            input[i].forEach(num => sum += +num)

            if (sum > highestCals) {
                highestCals = sum;
            }
        }
        console.log(highestCals)
    }
    mostCalFinder(mappedInput);
});


