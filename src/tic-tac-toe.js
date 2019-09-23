class TicTacToe {
    constructor() {

        this.array = new Array(3);

        for (var i = 0; i < 3; i++) {

            this.array[i] = new Array(3);

            for (var j = 0; j < 3; j++)
                this.array[i][j] = null;            
        }            

        this.player = 'x';
    }

    getCurrentPlayerSymbol() {

        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
       

        if (this.array[rowIndex][columnIndex] !== null ) 
            return this.player;

        this.array[rowIndex][columnIndex] = this.player;


        if (this.player === 'x') {
            this.player = 'o';
            return 'x';
        }
            
        this.player = 'x';
        return 'o';
    }
    

    isFinished() {
        
        if ( ( this.isDraw() === true ) || ( this.getWinner() !== null ) )
            return true;  
        return false;
    }

    getWinner() {

        var i = 0;

        while (true) {

            if ( this.array[i][0] !== null && this.array[i][0] === this.array[i][1] && this.array[i][0] === this.array[i][2] ) {
                return this.array[i][0];    // проверка победы по столбцам
            }

            if ( this.array[0][i] !== null && this.array[0][i] === this.array[1][i] && this.array[0][i] === this.array[2][i] ) {
                return this.array[0][i];      // проверка победы по столбцам
            }

            i++;

            if ( i === 3 ) break;
        }

        // проверка победы по диагоналям

        if (this.array[1][1] !== null && this.array[1][1] === this.array[0][2] && this.array[1][1] === this.array[2][0])
            return this.array[1][1];
            
        if (this.array[1][1] !== null && this.array[1][1] === this.array[0][0] && this.array[1][1] === this.array[2][2])
            return this.array[1][1];

        return null;
    }

    noMoreTurns() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.array[i][j] === null)
                    return  false; 
            }                            
        } 
        return true;
    }

    isDraw() {

        if ( this.getWinner() !== null || this.noMoreTurns() === false)
            return false;

        return true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.array[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
