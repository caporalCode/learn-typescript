import { Character } from "./character";
import {Evil} from './evil'
import { StringDisplay } from "../core/custom-types";


export abstract class Enemy extends Character{

    constructor(name: string,  private evilLevel: Evil = 'MECHANT', afficher: StringDisplay ){
        super(name, afficher)
    }
}