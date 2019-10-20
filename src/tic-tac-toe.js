class TicTacToe {
    constructor() {
        this.currentTurnSymbol = 'x';
        this.field = [null, null, null,
                      null, null, null,
                      null, null, null];

    }

    getCurrentPlayerSymbol() {
        return this.currentTurnSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex * 3 + columnIndex] == null || this.isFinished()) {
            this.field[rowIndex * 3 + columnIndex] = this.currentTurnSymbol;
            this.currentTurnSymbol = (this.currentTurnSymbol == 'x') ? 'o' : 'x';
        }
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        let winOptions = [[0, 1, 2],
                          [3, 4, 5],
                          [6, 7, 8],
                          [0, 3, 6],
                          [1, 4, 7],
                          [2, 5, 8],
                          [0, 4, 8],
                          [2, 4, 6]];
        for (let i = 0; i < winOptions.length; i++) {
            if (this.field[winOptions[i][0]] == 'x' &&
                this.field[winOptions[i][1]] == 'x' &&
                this.field[winOptions[i][2]] == 'x') return 'x';
            if (this.field[winOptions[i][0]] == 'o' &&
                this.field[winOptions[i][1]] == 'o' &&
                this.field[winOptions[i][2]] == 'o') return 'o';
        }
        return null;
    }

    noMoreTurns() {
        return !this.field.includes(null);
    }

    isDraw() {
        return (this.noMoreTurns() && !this.getWinner());
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.field[rowIndex * 3 + colIndex] == null) {
            return null;
        }

        return this.field[rowIndex * 3 + colIndex];
    }
}

module.exports = TicTacToe;
