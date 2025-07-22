import React, { createContext, ReactNode, useContext, useState } from "react";
import { Square } from "../lib/interfaces/Board";
import { GameMode } from "../lib/interfaces/GameMode";



interface ChessContextType {
    selectedPiece: Square | null;
    setSelectedPiece: React.Dispatch<React.SetStateAction<Square>>
    currentGameMode: GameMode
    setCurrentGameMode: React.Dispatch<React.SetStateAction<GameMode>>
    //insert more variables
}

const ChessContext = createContext<ChessContextType>(null);

export const ChessDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    //initialize the state of variables
    const [selectedPiece, setSelectedPiece] = useState<Square | null>(null);
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