import { PlayerFactory } from "./PlayerFactory"
import { PlayerFactoryDevTeam } from "./PlayerFactoryDevTeam"
import { PlayerFactoryAggressive } from "./PlayerFactoryAggressive"
import { PlayerFactoryPassive } from "./PlayerFactoryPassive"



export class PlayerFactoryGenerator {

    static get(playerFactoryName: string): PlayerFactory {
        switch (playerFactoryName) {
            case "DevTeam":
                return PlayerFactoryDevTeam.getInstance();
                break;
            case "Aggressive":
                return PlayerFactoryAggressive.getInstance();
                break;
            case "Passive":
                return PlayerFactoryPassive.getInstance();
                break;
        }
    }
}