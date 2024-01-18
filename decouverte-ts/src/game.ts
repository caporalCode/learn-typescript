import {Player} from './player'

export class Game {
    constructor(private _player: Player){}
    /**
     * Start the function.
     *
     * @return {void} No return value.
     */
    start(): void{
        console.log(`Bienvenue ${this.player.prenom}!`)
    }
    get player(): Player{
        return this._player
    }
}