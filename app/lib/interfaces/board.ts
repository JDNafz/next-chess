
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

export type Piece = `${PieceColor}${PieceType}` | null;

export interface Square {
	"id": number,
	"coordinate": string,
	"x": number,
	"y": number,
	"piece": Piece,
	"isBlack": boolean
}

export type Board = Square[]

