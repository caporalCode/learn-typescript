import { Player } from './player'
import { StringDisplay, StringOrNull, RequestString } from "../core/custom-types";

export class Game {
    constructor(private _player: Player, private afficher: StringDisplay, private requestString: RequestString) { }

    init(): void {

        const nickNameCharacter = this.requestString("Quel est le nom de ton personnage?");
        if (nickNameCharacter) {
            this.afficher(nickNameCharacter);
        }

    }
    /**
     * Start the function.
     *
     * @return {void} No return value.
     */
    start(): void {
        this.afficher(`Bienvenue ${this.player.prenom}!`)
    }
    get player(): Player {
        return this._player
    }
}