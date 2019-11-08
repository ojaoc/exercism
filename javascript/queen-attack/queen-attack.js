//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export class QueenAttack {
//     constructor() {
//         throw new Error("Remove this statement and implement this function");
//     }

//     toString() {
//         throw new Error("Remove this statement and implement this function");
//     }

//     canAttack() {
//         throw new Error("Remove this statement and implement this function");
//     }
// }
let grid = [];
let column = 0;
let emptyString = '';
for (let i = 0; i < 8; i++) {
    while (column < 8) {
        emptyString += ` [${i}, ${column}]`;
        column++;
    }
    grid.push(emptyString.slice(1));
    emptyString = '';
    column = 0;
}

console.log(grid)