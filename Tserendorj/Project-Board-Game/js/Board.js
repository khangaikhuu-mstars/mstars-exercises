class Board {
    constructor() {
        this.rows = 6;
        this.comuns = 7;
        this.space = this.createSpaces();
    }
    createSpaces() {
        let spaces = []
        for (let x = 0; x < this.columns; x++) {
            let columns = [];
            for(let y=0; y<this.rows; y++){
              const space = new this.space(x, y);
              columns.push(space);  
            }
            this.space.push(columns);
        }
        return spaces;
    }
    drawHTMLBoard(){
        for(let column of this.space){
            for(let space of column){
                space.drawSVGSpace();
            }
        }
    }
};

    // for(let x = 0; x<this.columns; x++){
    //     for(let y =0; y<this.rows; y++){
    //         this.spaces[x][y].drawSVGSpace();
    //     }
    // }





