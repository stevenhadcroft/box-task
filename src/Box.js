import * as PIXI from 'pixi.js'
import Constants from "./Constants";
import {getGlobal} from "./utils";
import {getRandomColour} from "./utils";

const BORDER_RADIUS = 5;

class Box {
    constructor(x, y, number, onBoxClick) {
        this.pos = {x, y};
        this.number = number;
        this.onBoxClick = onBoxClick;
        this.create();
    }

    onClick() {
        this.text.visible = true;
        this.onBoxClick(this.number);
    }

    create() {
        let stage = getGlobal('stage');
        const size = Constants.BOX_SIZE;

        // container for box and number string
        let container = new PIXI.Container();
        container.position = this.pos;
        stage.addChild(container);

        container.interactive = true;
        container.buttonMode = true;
        container.addListener('mousedown', this.onClick.bind(this));

        // create box
        const randomColor = getRandomColour();
        let graphics = new PIXI.Graphics();
        graphics.lineStyle(10, randomColor, 1);
        graphics.beginFill(randomColor, 0.5);
        graphics.drawRoundedRect(-size/2, -size/2, size, size, BORDER_RADIUS);
        graphics.endFill();
        container.addChild(graphics);

        // create number 
        this.text = new PIXI.Text(this.number, {fontFamily:'Arial', fontSize:28, fill:0xffffff, align:'center'});
        this.text.position = {x:-8, y:-15};
        this.text.visible = false;
        container.addChild(this.text);

	}
    


}

export default Box;
