const fs = require('fs');

fs.readFile('/Users/jessicaswenson/Development/AoC/AoC2022/Day3/input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    let input = data.split('\n')

    cleanInput = input.map((input) => input.split(''));


    const findPriority = (arr) => {

        let secondHalf = [];
        let firstHalf = [];

        for (let i = 0; i < arr.length; i++) {
            let half = arr[i].length / 2;

            secondHalf.push(arr[i].slice(half));
            firstHalf.push(arr[i].slice(0, half));
        }

        const matchingArr = [];
        const matchingChar = [];

        for (let i = 0; i < firstHalf.length - 1; i++) {

            const compareArrs = (firstHalf, secondHalf) => {
                firstHalf.forEach((el1) => secondHalf.forEach((el2) => {
                    if (el1 === el2) {
                        matchingArr.push(el1);
                    }
                }))
            }
            compareArrs(firstHalf[i], secondHalf[i])
            matchingChar.push(firstHalf[i].filter(letter => secondHalf[i].includes(letter)))
        }

        let uniqueChars = [];

        for (let i = 0; i < matchingChar.length; i++) {
            uniqueChars.push(matchingChar[i][0])

        }

        let priorityPoints = 0;

        for (let i = 0; i < uniqueChars.length; i++) {
            if (uniqueChars[i] === 'a') {
                priorityPoints += 1;
            } else if (uniqueChars[i] === 'b') {
                priorityPoints += 2;
            } else if (uniqueChars[i] === 'c') {
                priorityPoints += 3;
            } else if (uniqueChars[i] === 'd') {
                priorityPoints += 4;
            } else if (uniqueChars[i] === 'e') {
                priorityPoints += 5;
            } else if (uniqueChars[i] === 'f') {
                priorityPoints += 6;
            } else if (uniqueChars[i] === 'g') {
                priorityPoints += 7;
            } else if (uniqueChars[i] === 'h') {
                priorityPoints += 8;
            } else if (uniqueChars[i] === 'i') {
                priorityPoints += 9;
            } else if (uniqueChars[i] === 'j') {
                priorityPoints += 10;
            } else if (uniqueChars[i] === 'k') {
                priorityPoints += 11;
            } else if (uniqueChars[i] === 'l') {
                priorityPoints += 12;
            } else if (uniqueChars[i] === 'm') {
                priorityPoints += 13;
            } else if (uniqueChars[i] === 'n') {
                priorityPoints += 14;
            } else if (uniqueChars[i] === 'o') {
                priorityPoints += 15;
            } else if (uniqueChars[i] === 'p') {
                priorityPoints += 16;
            } else if (uniqueChars[i] === 'q') {
                priorityPoints += 17;
            } else if (uniqueChars[i] === 'r') {
                priorityPoints += 18;
            } else if (uniqueChars[i] === 's') {
                priorityPoints += 19;
            } else if (uniqueChars[i] === 't') {
                priorityPoints += 20;
            } else if (uniqueChars[i] === 'u') {
                priorityPoints += 21;
            } else if (uniqueChars[i] === 'v') {
                priorityPoints += 22;
            } else if (uniqueChars[i] === 'w') {
                priorityPoints += 23;
            } else if (uniqueChars[i] === 'x') {
                priorityPoints += 24;
            } else if (uniqueChars[i] === 'y') {
                priorityPoints += 25;
            } else if (uniqueChars[i] === 'z') {
                priorityPoints += 26;
            } else if (uniqueChars[i] === 'A') {
                priorityPoints += 27;
            } else if (uniqueChars[i] === 'B') {
                priorityPoints += 28;
            } else if (uniqueChars[i] === 'C') {
                priorityPoints += 29;
            } else if (uniqueChars[i] === 'D') {
                priorityPoints += 30;
            } else if (uniqueChars[i] === 'E') {
                priorityPoints += 31;
            } else if (uniqueChars[i] === 'F') {
                priorityPoints += 32;
            } else if (uniqueChars[i] === 'G') {
                priorityPoints += 33;
            } else if (uniqueChars[i] === 'H') {
                priorityPoints += 34;
            } else if (uniqueChars[i] === 'I') {
                priorityPoints += 35;
            } else if (uniqueChars[i] === 'J') {
                priorityPoints += 36;
            } else if (uniqueChars[i] === 'K') {
                priorityPoints += 37;
            } else if (uniqueChars[i] === 'L') {
                priorityPoints += 38;
            } else if (uniqueChars[i] === 'M') {
                priorityPoints += 39;
            } else if (uniqueChars[i] === 'N') {
                priorityPoints += 40;
            } else if (uniqueChars[i] === 'O') {
                priorityPoints += 41;
            } else if (uniqueChars[i] === 'P') {
                priorityPoints += 42;
            } else if (uniqueChars[i] === 'Q') {
                priorityPoints += 43;
            } else if (uniqueChars[i] === 'R') {
                priorityPoints += 44;
            } else if (uniqueChars[i] === 'S') {
                priorityPoints += 45;
            } else if (uniqueChars[i] === 'T') {
                priorityPoints += 46;
            } else if (uniqueChars[i] === 'U') {
                priorityPoints += 47;
            } else if (uniqueChars[i] === 'V') {
                priorityPoints += 48;
            } else if (uniqueChars[i] === 'W') {
                priorityPoints += 49;
            } else if (uniqueChars[i] === 'X') {
                priorityPoints += 50;
            } else if (uniqueChars[i] === 'Y') {
                priorityPoints += 51;
            } else if (uniqueChars[i] === 'Z') {
                priorityPoints += 52;
            }
        }
        console.log(priorityPoints);
    }



    findPriority(cleanInput);

})