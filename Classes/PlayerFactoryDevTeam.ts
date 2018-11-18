import { PlayerFactory } from "./PlayerFactory"
import { Player } from "./Player"
import { IaDevTeam } from "./IaDevTeam"
import { Config } from "./Config";



export class PlayerFactoryDevTeam extends PlayerFactory {

    private static _instance: PlayerFactory;
    private static playerNumber: number;

    private constructor() {
        super();
        PlayerFactoryDevTeam.playerNumber = 0;
    }

    static getInstance() {
        if (PlayerFactoryDevTeam._instance == null) {
            PlayerFactoryDevTeam._instance = new PlayerFactoryDevTeam();
        }
        return PlayerFactoryDevTeam._instance;
    }

    public generatePlayer(): Player {
        PlayerFactoryDevTeam.playerNumber++;
        return new IaDevTeam(Config.IA_DEVTEAM_DEFAULT_PATH, Config.IA_DEVTEAM_DEFAULT_EXEC, `${Config.IA_DEVTEAM_DEFAULT_EXEC_ARGS} Player${PlayerFactoryDevTeam.playerNumber}`);
    }
}