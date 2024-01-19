import { Hobbit } from "./domains/hobbit";
import { Orc } from "./domains/orc";
import { Evil } from "./domains/evil";
import { Player } from "./domains/player";
import { Enemy } from "./domains/enemy";
import { StringDisplay, RequestString } from "./core/custom-types";
import {Game} from './domains/game'

const callBack: StringDisplay = (mess: any) => console.log(mess)
const requestString : RequestString = (mess:any) => prompt(mess)

// const orc = new Orc("orrrk", 'MECHANT', console.log)
// orc.manger()

// const enemies: Enemy[] = [
//     new Orc("Almator", 'TRES_TRES_MECHANT', callBack),
//     new Orc("orrccc", 'PAS_MECHANT', (mess: any) => {
//         callBack(mess.toUpperCase())
//     })
// ]

const pseudo = requestString("Quel est le votre prénom?")
const player = new Player(pseudo);


const game = new Game(player, callBack, requestString)

game.init()
