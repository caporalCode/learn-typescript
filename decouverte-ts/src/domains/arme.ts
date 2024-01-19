export class Arme {
    public puissance = 10;
    public bouclier = 0;
}
export type AvecPuissance = {
    puissance: number
}
/**
 * Prints the power of a given weapon.
 *
 * @param {object} arme - The weapon object.
 * @param {number} arme.puissance - The power of the weapon.
 */
export function afficherPuissance(arme: AvecPuissance){
    console.log(`Puissance : ${arme.puissance}`)
}