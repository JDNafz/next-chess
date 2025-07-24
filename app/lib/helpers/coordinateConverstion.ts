export const indexToCoordinate = (index: number): string => {
    const file = String.fromCharCode(97 + (index % 8 ));
    const rank = Math.floor(index/8) + 1;
    return `${file}${rank}`
}

export const coordinateToIndex = (coordinate: string): number => {
    const file = coordinate.charCodeAt(0) - 97;
    const rank = parseInt(coordinate[1]) - 1;
    return rank * 8 + file;
}