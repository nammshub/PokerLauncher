import { Croupier } from "./Croupier"
import { Player } from "./Player"
import { IaAggressive } from "./IaAgressive";
import { IaPassive } from "./IaPassive";
import { IaDevTeam } from "./IaDevTeam";


export class PokerMaster {
    _croupier: Croupier = new Croupier();
    //_players: Array<Player>;
    _iaAggressive: Player = new IaAggressive();
    _iaPassive: Player = new IaPassive();
    _iaDevTeam: Player = new IaDevTeam();


    async launchGames() {
        this._croupier.start();

        this._iaDevTeam.start();
        this._iaAggressive.start();
        this._iaPassive.start();


    }
}