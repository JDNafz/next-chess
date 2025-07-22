import React, { createContext, ReactNode, useContext, useState } from "react";
import { Square } from "../lib/interfaces/board";



interface ChessContextType {
    selectedPiece: Square | null;
    setSelectedPiece: React.Dispatch<React.SetStateAction<Square>>
    //insert more variables
}

const ChessContext = createContext<ChessContextType>(null);

export const ChessDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    //initialize the state of variables
    const [selectedPiece, setSelectedPiece] = useState<Square | null>(null);

    return (
        <ChessContext.Provider
            value={{
                selectedPiece: selectedPiece,
                setSelectedPiece: setSelectedPiece,
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