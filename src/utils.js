import Constants from "./Constants";

window.SPINNR = window.SPINNR || {};

export const setGlobal = (ind, val) => window.SPINNR[ind] = val;
export const getGlobal = (ind) => window.SPINNR[ind];
export const getRandomColour = () => "0x"+Math.floor(Math.random()*16777215).toString(16);
export const getStageMiddle = () => { return { x:Constants.STAGE_WIDTH/2, y:Constants.STAGE_HEIGHT/2 } };
export const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
export const roundRandomNumber = n => 1 + Math.floor(Math.random()*n);
