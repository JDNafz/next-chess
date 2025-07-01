
import fs from 'fs'
import path from 'path'


// This file is used to create the default board as an array to be ready to access.
// because of this during development, it is an ES5 module use for single use generation of the board in development.
// saveFile module (remove export default)
// 
function getStartingState() {
	const letters = 'abcdefgh'
	const numbers = '12345678'

	const state = [];
	let counter:number = 0;
	let isBlack:boolean = true;
	let letter: string;
	let number:string;
	for (let i = 0; i < 8; i++) {     // from 1 to 8 => bottom to top
		number = numbers[i]
		for (let j = 0; j < 8; j++) { // from a to h => left to right
			letter = letters[j]
			state.push({
				id: counter,
				coordinate: `${letter}${number}`, //chessboard coordinate
				x: j, //x coordinate
				y: i, //y coordinate
				piece: null,
				underAttackFromWhite: false,
				underAttackFromBlack: false,
				isBlack: isBlack
			})
			counter++;
			isBlack = !isBlack
		}
		isBlack = !isBlack //on next row, start with opposite color
	}
	return state
}


function saveFile(content, fileName) {
	console.log(`Saving content to ${fileName}.txt..`)
	fs.writeFile(path.resolve(__dirname, `./${fileName}`), content, err => {
		if (err) {
			console.error("Error writing file:", err);
		}
	});
}


//call the function
const array = getStartingState();
let string = '';
for (const obj of array) {
	string += JSON.stringify(obj);
} //convert array of obj, into array of string to view


saveFile(string, 'startingState.js');

