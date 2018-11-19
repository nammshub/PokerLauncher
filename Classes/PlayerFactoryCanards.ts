import { PlayerFactory } from "./PlayerFactory"
import { Player } from "./Player"
import { IaCanardsLoques } from "./IaCanardsLoques"


export class PlayerFactoryCanards extends PlayerFactory {

    private static _instance: PlayerFactory;
    private constructor() {
        super();
    }

    static getInstance() {
        if (PlayerFactoryCanards._instance == null) {
            PlayerFactoryCanards._instance = new PlayerFactoryCanards();
        }
        return PlayerFactoryCanards._instance;
    }

    public generatePlayer(): Player {
        return new IaCanardsLoques();
    }
}