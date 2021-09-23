import Box from "./Box";
import Constants from "./Constants";
import {getStageMiddle, shuffle} from "./utils";

class Game {
	constructor() {
		this.createBoxes();
	}

	onBoxClick(){
	}

	createBoxes(){
		const spacing = Constants.SPACING;
		const numbers = shuffle(Constants.NUMBER_ARRAY);
		
		let n = 0;
		for (let row = 0; row < Constants.ROWS; row++){
			for (let col = 0; col < Constants.COLUMNS; col++){
				const x = getStageMiddle().x - (Constants.COLUMNS/2 * spacing) + (col * spacing) + spacing/2;
				const y = getStageMiddle().y - (Constants.ROWS/2 * spacing) + (row * spacing) + spacing/2;
				new Box(x, y, numbers[n++], this.onBoxClick);
			}	
		}
	}

}

export default Game;