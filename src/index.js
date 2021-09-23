import * as PIXI from 'pixi.js'
import Constants from "./Constants";
import {setGlobal} from "./utils";
import Game from "./Game";

let renderer, stage;

function init(){
	
	// canvas renderer setup
	renderer = PIXI.autoDetectRenderer(Constants.STAGE_WIDTH, Constants.STAGE_HEIGHT, { antialias: true });
	renderer.backgroundColor = 0x004466;
	document.body.appendChild(renderer.view);
	stage = new PIXI.Container();
	stage.interactive = true;
	
	// start the render loop
	tick();
	
	// create global access to stage
	setGlobal('stage', stage); 
	
	// initialise the game
	new Game();
}

function tick() {
    renderer.render(stage);
    requestAnimationFrame( tick );
}

init()