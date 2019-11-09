export class QueenAttack {
    constructor({ white, black } = { white: [0, 3], black: [7, 3] }) {
        if (this.isEquivalent(white, black)) 
        throw new Error("Queens cannot share the same space");

        this.white = white;
        this.black = black;

        this.whiteRow = this.white[0];
        this.blackRow = this.black[0];
        this.whiteColumn = this.white[1];
        this.blackColumn = this.black[1];
    }

    toString() {
        let board = [];
        let boardSpaces = '';
        let rowCount = 0;
        
        for (let i = 0; i < 8; i++) {
            while (rowCount < 8) {
                if (this.whiteRow === i && this.whiteColumn === rowCount) {
                    boardSpaces += " W"; 
                    rowCount++;
                } else if (this.blackRow === i && this.blackColumn === rowCount) {
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
        const SHARE_DIAGONAL = () => {
            if (Math.abs(this.whiteRow - this.blackRow) === 
            Math.abs(this.whiteColumn - this.blackColumn)) {
                return true;
            } else {
                return false;
            }
        } 
        if (this.whiteRow === this.blackRow || 
            this.whiteColumn === this.blackColumn) {
            return true;
        } else {
            return SHARE_DIAGONAL();
        }
    }

    isEquivalent(a, b) {
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