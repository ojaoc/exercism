//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
    constructor({ white, black } = { white: [0, 3], black: [7, 3] }) {
        if (this.isNotEquivalent(white, black)) 
        throw new Error("Queens cannot share the same space");

        this.white = white;
        this.black = black;
    }

    toString() {
        let board = [];
        let boardSpaces = '';
        let rowCount = 0;

        const WHITE_ROW = this.white[0];
        const BLACK_ROW = this.black[0];
        const WHITE_COLUMN = this.white[1];
        const BLACK_COLUMN = this.black[1];
        
        for (let i = 0; i < 8; i++) {
            while (rowCount < 8) {
                if (WHITE_ROW === i && WHITE_COLUMN === rowCount) {
                    boardSpaces += " W"; 
                    rowCount++;
                } else if (BLACK_ROW === i && BLACK_COLUMN === rowCount) {
                    boardSpaces += " B";
                    rowCount++;
                } else {
                    boardSpaces += " _";
                    rowCount++;
                }
            }
            board.push(boardSpaces.slice(1));
            boardSpaces = '';
            rowCount = 0;
        }
        board[board.length-1] += '\n';

        return board.join('\n');
    }

    canAttack() {
        
    }

    isNotEquivalent(a, b) {
        // Create arrays of property names
        const A_PROPS = Object.getOwnPropertyNames(a);
        const B_PROPS = Object.getOwnPropertyNames(b);
        // If number of properties is different,
        // objects are not equivalent
        if (A_PROPS.length !== B_PROPS.length) {
            return false;
        }
    
        for (let i = 0; i < A_PROPS.length; i++) {
            let propName = A_PROPS[i];
    
            // If values of same property are not equal,
            // objects are not equivalent
            if (a[propName] !== b[propName]) {
                return false;
            }
        }
        // If we made it this far, objects
        // are considered equivalent
        return true;
    }
}

// const queens = new QueenAttack();
// queens.toString();