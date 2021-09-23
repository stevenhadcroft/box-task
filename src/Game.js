import * as PIXI from 'pixi.js';
import Constants, {FONT_STYLE} from "./Constants";
import {getGlobal, getStageMiddle, shuffle, roundRandomNumber} from "./utils";
import Box from "./Box";

class Game {
	constructor(restartCallback) {
		this.stage = getGlobal('stage');
		this.targetNumber = roundRandomNumber(8);
		this.onRestart = restartCallback;
		this.showInstructions();
		this.createBoxes();
	}

	showInstructions(){
		const str = `Click the boxes to find ${this.targetNumber}`; 
		this.instructions = new PIXI.Text(str, FONT_STYLE);
		this.instructions.position = {x:getStageMiddle().x, y:50};
		this.instructions.anchor.x = 0.5;
		this.stage.addChild(this.instructions);
	}

	destroyInstructions(){
		this.stage.removeChild(this.instructions);
	}

	showSuccess(){
		const titleStr = "Congratulations you've found the number"; 
		this.success = new PIXI.Text(titleStr, FONT_STYLE);
		this.success.position = {x:getStageMiddle().x, y:50};
		this.success.anchor.x = 0.5;
		this.stage.addChild(this.success);

		const restartStr = "Click here to restart"; 
		this.restart = new PIXI.Text(restartStr, FONT_STYLE);
		this.restart.position = {x:getStageMiddle().x, y:120};
		this.restart.anchor.x = 0.5;
		this.restart.interactive = true;
		this.restart.buttonMode = true;
		this.restart.addListener('mousedown', this.onRestartClick.bind(this));
		this.stage.addChild(this.restart);
	}

	createBoxes(){
		const spacing = Constants.SPACING;
		const numbers = shuffle(Constants.NUMBER_ARRAY);
		
		let n = 0;
		for (let row = 0; row < Constants.ROWS; row++){
			for (let col = 0; col < Constants.COLUMNS; col++){
				const x = getStageMiddle().x - (Constants.COLUMNS/2 * spacing) + (col * spacing) + spacing/2;
				const y = getStageMiddle().y - (Constants.ROWS/2 * spacing) + (row * spacing) + spacing/2;
				new Box(x, y, numbers[n++], this.onBoxClick.bind(this));
			}	
		}
	}

	onBoxClick(number){
		if (number === this.targetNumber){
			this.destroyInstructions();
			this.showSuccess();
		}
	}

	onRestartClick(){
		this.onRestart();
	}

}

export default Game;