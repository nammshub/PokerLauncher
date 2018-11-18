import { PlayerFactory } from "./PlayerFactory"
import { Player } from "./Player"
import { IaAggressive } from "./IaAggressive"


export class PlayerFactoryAggressive extends PlayerFactory {

    private static _instance: PlayerFactory;
    private constructor() {
        super();
    }

    static getInstance() {
        if (PlayerFactoryAggressive._instance == null) {
            PlayerFactoryAggressive._instance = new PlayerFactoryAggressive();
        }
        return PlayerFactoryAggressive._instance;
    }

    public generatePlayer(): Player {
        return new IaAggressive();
    }
}