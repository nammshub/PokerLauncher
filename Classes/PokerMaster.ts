import { Croupier } from "./Croupier"
import { Player } from "./Player"
import { PlayerGenerator } from "./PlayerGenerator";
import { EventEmitter } from "events";
import { Config } from "./Config";


export class PokerMaster extends EventEmitter {
    _croupier: Croupier = new Croupier();
    _players: Array<Player>;
    _gamesPlayed: number;


    constructor() {
        super();
        this._gamesPlayed = 0;
    }

    launchGames() {
        this._croupier.start(data => {
            //server started
            if(data === "server started"){
                this._players = PlayerGenerator.getRandomPlayers();
                console.log(`la partie contient ${this._players.length} joueurs`);
                for (let player of this._players) {
                    player.start();
                }
            }
            //game end
            else{
                console.log(`reception du signal de fin pour le pid  ${data}`);
                this.emit("game.end.signal");
                this._gamesPlayed++;
                this._croupier.end(data, endDone => {
                    console.log(`serveur croupier killed avec le code  ${endDone}`);
                    this.handleGameRestart();
                })
            }
        });
    }

    handleGameRestart() {
        if (this._gamesPlayed < Config.MAX_GAMES_ALLOWED) {
            this.launchGames();
        }
    }
}