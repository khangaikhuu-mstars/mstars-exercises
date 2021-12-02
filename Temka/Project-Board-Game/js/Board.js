
// class Board{
//     constructor(){
//         this.rows = 6;
//         this.columns = 7;
//         this.spaces = this.createSpaces()
//     }

//     createSpaces(){
//         let spaces = []
//         for(let i = 0; i < this.columns; i++){
//             const columns = []
//             for(let j = 0; i < this.row; i++){
//                 const space = new Space(i,j)
//                 columns.push(space)
//             }
//             space.push(columns)
//         }
//         return spaces
//     }
// }

class Board {
    constructor(rows, columns) {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpace();

    }
    createSpace() {
        let spaces = [];
        for (let x = 0; x < this.columns; x++) {
           const columns = [];
            for (let y = 0; y < this.rows; y++) {
            const space =new Space(x,y)
                columns.push(space)
            }
            spaces.push(columns);
        }
        return spaces;
    }
}