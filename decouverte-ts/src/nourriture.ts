// export class Nourriture {
//   private pv=0;

//   constructor(pv: number) {
//     this.pv = pv;
//   }
//   get pointsDeVie(): number {
//     return this.pv;
//   }
//   set pointsDeVie(value: number) {
//     this.pv = value;
//   }
// }

export interface Nourriture {
  pointsDeVie: number;
}

export class NourritureElaboree implements Nourriture {
  pointsDeVie = 0;
  nom = "";
}
