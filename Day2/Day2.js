const fs = require('fs');

fs.readFile('/Users/jessicaswenson/Desktop/Devmountain/AoC/AoC2022/input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    let input = data.split('\n');

    cleanInput = input.map((input) => input.split(''));


    const scoreFunc = (input) => {
        let myScore = 0;

        input.forEach((game) => {
            if (game[0] === 'A' && game[2] === 'X') {
                myScore += 4;
            } else if (game[0] === 'A' && game[2] === 'Y') {
                myScore += 8;
            } else if (game[0] === 'A' && game[2] === 'Z') {
                myScore += 3;
            } else if (game[0] === 'B' && game[2] === 'X') {
                myScore += 1;
            } else if (game[0] === 'B' && game[2] === 'Y') {
                myScore += 5;
            } else if (game[0] === 'B' && game[2] === 'Z') {
                myScore += 9;
            } else if (game[0] === 'C' && game[2] === 'X') {
                myScore += 7;
            } else if (game[0] === 'C' && game[2] === 'Y') {
                myScore += 2;
            } else if (game[0] === 'C' && game[2] === 'Z') {
                myScore += 6;
            }
        })
        console.log(myScore)
    }

    scoreFunc(cleanInput);


})