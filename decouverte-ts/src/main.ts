import  {Hobbit}  from "./hobbit";
import { Nourriture } from "./nourriture";
import {Orc} from './orc'
import {Arme, afficherPuissance, AvecPuissance} from "./arme"

const hobbit = new Hobbit();
hobbit.manger({pointsDeVie: 10})
hobbit.manger({ pointsDeVie: 20})
let orc = new Orc()


const arme = new Arme()

const arc: AvecPuissance = {
    puissance: 10
}



afficherPuissance(arme)
afficherPuissance(arc)
afficherPuissance({puissance: 56})