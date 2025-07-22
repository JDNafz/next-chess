
//Types for Board, Square, Piece, etc 

// a Piece is a string like "wn" representing a white knight
export type Piece = `${PieceColor}${PieceType}` | null;

//central game logic containing the coordinate 
// information and the piece (or lack of a piece)
export interface Square {
	"id": number,
	"coordinate": string,
	"x": number,
	"y": number,
	"piece": Piece,
	"isBlack": boolean
}

//Board is an array of Squares
export type Board = Square[]

export enum PieceType {
	Rook = 'r',
	Knight = 'n',
	Bishop = 'b',
	Queen = 'q',
	King = 'k',
	Pawn = 'p',
}

export enum PieceColor {
	White = 'w',
	Black = 'b',
}
