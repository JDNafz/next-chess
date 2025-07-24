export interface ChessPiece {
    piece: 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn';
    color: 'white' | 'black';
  }
export type FenSquare = ChessPiece | null;
export type ChessBoard = FenSquare[]