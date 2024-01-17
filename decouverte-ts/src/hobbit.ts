import { Nourriture } from "./nourriture";
export class Hobbit {
  manger(nourriture: Nourriture) {
    console.log("Miam Miam! ", nourriture.pointsDeVie, "points de vie!");
  }
}
class Test {}
