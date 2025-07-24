export enum PieceType {
  KING = 'king',
  QUEEN = 'queen',
  ROOK = 'rook',
  BISHOP = 'bishop',
  KNIGHT = 'knight',
  PAWN = 'pawn'
}

export enum Color {
  WHITE = 'white',
  BLACK = 'black'
}

export interface ChessPiece {
  piece: PieceType,
  color: Color
}
export type Square = ChessPiece | null;

export type ChessBoard = Array<ChessPiece | null>;