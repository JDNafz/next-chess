export interface Square {
	"id": number,
	"coordinate": string,
	"x": number,
	"y": number,
	"piece": string, // "wr"
	"isBlack": boolean
}

export type Board = Square[]

