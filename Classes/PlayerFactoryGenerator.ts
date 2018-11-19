import { PlayerFactory } from "./PlayerFactory"
import { PlayerFactoryDevTeam } from "./PlayerFactoryDevTeam"
import { PlayerFactoryAggressive } from "./PlayerFactoryAggressive"
import { PlayerFactoryPassive } from "./PlayerFactoryPassive"
import { PlayerFactoryCanards } from "./PlayerFactoryCanards"
import { PlayerFactoryPickpoker } from "./PlayerFactoryPickpoker"




export class PlayerFactoryGenerator {

    static get(playerFactoryName: string): PlayerFactory {
        switch (playerFactoryName) {
            case "DevTeam":
                return PlayerFactoryDevTeam.getInstance();
            case "Aggressive":
                return PlayerFactoryAggressive.getInstance();
            case "Passive":
                return PlayerFactoryPassive.getInstance();
            case "Canards":
                return PlayerFactoryCanards.getInstance();
            case "Pickpoker":
                return PlayerFactoryPickpoker.getInstance();
        }
    }
}