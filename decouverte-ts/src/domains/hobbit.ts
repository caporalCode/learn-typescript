import { Nourriture } from "./nourriture";
import {Character} from "./character"
export class Hobbit extends Character{
  manger(nourriture: Nourriture) {
    console.log("Miam Miam! ", nourriture.pointsDeVie, "points de vie!");
  }
}
class Test {}
