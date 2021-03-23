import { Game4 } from './game4.js';
import { Game5 } from './game5.js';
import {Game6}from './game6.js'
import {Game7}from './game7.js'
import {Game8} from './game8.js'
import {Game3}from './game3.js';
import { Nivel1 } from './Nivel1.js';
import {Boot} from './Boot.js';
import { Instructions } from "./Instructions.js";
import { StackerGame } from "./StackerGame.js";
import { GameOver } from "./GameOver.js";


const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    //scene:[Game7]
    //scene:[Nivel1]
    scene: [Game8,Game4,Nivel1,Game7]
    //scene: [ Boot, Instructions, StackerGame, GameOver ]
};

const game = new Phaser.Game(config);
