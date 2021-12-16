class Board {
    constructor(rows, columns) {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpace()
    }
    createSpace() {
        let spaces = []
        for (let x = 0; x < this.columns; x++) {
            let columns = [];
            for (let y = 0; y < this.rows; y++) {
                let space = new Space(x, y);
                columns.push(space)
            }
            spaces.push(columns)
        }
        return spaces;
    }
    drawHTMLboard() {
        // for (let x = 0; x < this.columns; x++) {
        //     for (let y = 0; y < this.rows; y++) {
        //         this.spaces[x][y].drawSVGSpace();
        //     }
        // }
        for (const column of this.spaces) {
            for (const space of column) {
                space.drawSVGSpace();

            }
        }
    }
}