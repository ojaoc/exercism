//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class QueenAttack {
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

        let whiteRow = this.white[0];
        let blackRow = this.black[0];
        let whiteColumn = this.white[1];
        let blackColumn = this.black[1];
        
        for (let i = 0; i < 8; i++) {
            while (rowCount < 8) {
                if (whiteRow === i && whiteColumn === rowCount) {
                    boardSpaces += " W"; 
                    rowCount++;
                } else if (blackRow === i && blackColumn === rowCount) {
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
        board[whiteRow] = 
        console.log(board);
    }

    canAttack() {
        throw new Error("Remove this statement and implement this function");
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

const queens = new QueenAttack();
queens.toString();