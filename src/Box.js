import * as PIXI from 'pixi.js';
import Constants, {FONT_STYLE} from "./Constants";
import {getGlobal, getRandomColour} from "./utils";

class Box {

    constructor(x, y, number, onBoxClick) {
        this.stage = getGlobal('stage');
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
        const size = Constants.BOX_SIZE;

        // container for box and number string
        let container = new PIXI.Container();
        container.position = this.pos;
        this.stage.addChild(container);

        container.interactive = true;
        container.buttonMode = true;
        container.addListener('mousedown', this.onClick.bind(this));

        // create box
        const randomColor = getRandomColour();
        let graphics = new PIXI.Graphics();
        graphics.lineStyle(10, randomColor, 1);
        graphics.beginFill(randomColor, 0.5);
        graphics.drawRoundedRect(-size/2, -size/2, size, size, Constants.BORDER_RADIUS);
        graphics.endFill();
        container.addChild(graphics);

        // create number 
        this.text = new PIXI.Text(this.number, FONT_STYLE);
        this.text.anchor = {x:0.5, y:0.5};
        this.text.visible = false;
        container.addChild(this.text);
    }
}

export default Box;
