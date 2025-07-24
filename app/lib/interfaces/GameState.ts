import { ChessBoard, ChessPiece, Color, PieceType } from "./ChessInterfaces";

export interface GameState {
    board: ChessBoard;
    moves: Move[]
}

interface Move {
    from: number;
    to: number;
    piece: PieceType;
    color: Color;
    capturedPiece?: PieceType;
    // timestamp: string;
    // algebraic?: string;
}

export const saveGameState = (gameState: GameState) => {
    localStorage.setItem('gameState', JSON.stringify(gameState));
}

export const loadGameState = (): GameState => {
    const stored = localStorage.getItem('gameState');
    return stored ? JSON.parse(stored) : null;
}

export const clearGameState = () => {
    localStorage.removeItem('gameState');
}