import React, { createContext, ReactNode, useContext, useState } from "react";
import { GameMode } from "../lib/interfaces/GameMode";
import { ChessPiece } from "../lib/interfaces/ChessInterfaces";



interface ChessContextType {
    selectedPiece: ChessPiece | null;
    setSelectedPiece: React.Dispatch<React.SetStateAction<ChessPiece>>
    currentGameMode: GameMode
    setCurrentGameMode: React.Dispatch<React.SetStateAction<GameMode>>
    //insert more variables
}

const ChessContext = createContext<ChessContextType>(null);

export const ChessDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    //initialize the state of variables
    const [selectedPiece, setSelectedPiece] = useState<ChessPiece | null>(null);
    const [currentGameMode, setCurrentGameMode] = useState<GameMode>(GameMode.FREEPLAY)
    return (
        <ChessContext.Provider
            value={{
                selectedPiece,
                setSelectedPiece,
                currentGameMode,
                setCurrentGameMode
            }}
        >
            {children}
        </ChessContext.Provider>
    )
}

export const useChessData = (): ChessContextType => {
    const context = useContext(ChessContext);
    if (context === null) {
        throw new Error("useBoard must be used within a Provider")
    }
    return context;
}