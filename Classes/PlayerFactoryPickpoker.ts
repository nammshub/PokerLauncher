import { PlayerFactory } from "./PlayerFactory"
import { Player } from "./Player"
import { IaPickpoker } from "./IaPickpoker"


export class PlayerFactoryPickpoker extends PlayerFactory {

    private static _instance: PlayerFactory;
    private constructor() {
        super();
    }

    static getInstance() {
        if (PlayerFactoryPickpoker._instance == null) {
            PlayerFactoryPickpoker._instance = new PlayerFactoryPickpoker();
        }
        return PlayerFactoryPickpoker._instance;
    }

    public generatePlayer(): Player {
        return new IaPickpoker();
    }
}