import { Croupier } from "./Croupier"
import { Player } from "./Player"

export class PokerMaster {
    _croupier: Croupier = new Croupier();
    //_players: Array<Player>;


    launchGames() {
        for (let iter = 0; iter < 3; iter++) {
            this._croupier.start();
        }
    }
}