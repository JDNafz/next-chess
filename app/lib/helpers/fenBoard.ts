import { ChessBoard } from "../interfaces/ChessInterfaces";

export const createBoardFromFEN = (fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"): ChessBoard => {
    const board: ChessBoard = new Array(64).fill(null);
    const rows = fen.split('/');

    const pieceMap = {
        'r' : {piece: 'rook', color: 'black'},
        'n': { piece: 'knight', color: 'black' },
        'b': { piece: 'bishop', color: 'black' },
        'q': { piece: 'queen', color: 'black' },
        'k': { piece: 'king', color: 'black' },
        'p': { piece: 'pawn', color: 'black' },
        'R': { piece: 'rook', color: 'white' },
        'N': { piece: 'knight', color: 'white' },
        'B': { piece: 'bishop', color: 'white' },
        'Q': { piece: 'queen', color: 'white' },
        'K': { piece: 'king', color: 'white' },
        'P': { piece: 'pawn', color: 'white' },
    }

    let index = 56 // boar[56] is a8 starting at top left like FEN

    rows.forEach(row => {
        let file = 0;
        for (const char of row) {
            if (isNaN(parseInt(char))) {
                // if is NaN, thus it's a letter
                board[index + file] = pieceMap[char];
                file++; //go to the next file (char) in fen sequence
            } else {
                //is a number
                file += parseInt(char); // numbers in fen mean empty squares so skip that many
            }
        } //end row
        index -= 8 // Move the board[index] down a row 
    });
    return board;
}