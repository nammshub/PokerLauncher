import { PlayerFactory } from "./PlayerFactory"
import { Player } from "./Player"
import { IaPassive } from "./IaPassive"


export class PlayerFactoryPassive extends PlayerFactory {

    private static _instance: PlayerFactory;
    private constructor() {
        super();
    }

    static getInstance() {
        if (PlayerFactoryPassive._instance == null) {
            PlayerFactoryPassive._instance = new PlayerFactoryPassive();
        }
        return PlayerFactoryPassive._instance;
    }

    public generatePlayer(): Player {
        return new IaPassive();
    }
}