class Board{
    constructor(){
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }
    
    createSpaces() {
        let spaces = [];
        for(let i = 0; i < this.columns; i++) {
            let columns = [];
            for(let j = 0; j < this.rows; j++) {
                const space = new Space(i, j);
                columns.push(space);
            }
            spaces.push(columns);
        }
        return spaces;
    }

    drawHTMLBoard() {

        // for(let i = 0; i < this.columns; i++) {
        //     for(let j = 0; j < this.rows; j++) {
        //         this.spaces[i][j].drawSVGSpace();
        //     }
        // }

        for(let column of this.spaces) {
            for(let space of column) {
                space.drawSVGSpace()
            }
        }
    }
}
