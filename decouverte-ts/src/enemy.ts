import { Character } from "./character";
import {Evil} from './evil'
export abstract class Enemy extends Character{

    constructor(name: string,  private evilLevel: Evil = 'MECHANT' ){
        super(name)
    }
}