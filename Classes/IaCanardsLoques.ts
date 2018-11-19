import { Player } from "./Player"
import { Config } from "./Config"

export class IaCanardsLoques extends Player{

    constructor(path = Config.IA_CANARDS_DEFAULT_PATH, execScript = Config.IA_CANARDS_DEFAULT_EXEC, execArgs = Config.IA_CANARDS_DEFAULT_EXEC_ARGS) {
        super(path,execScript,execArgs);
    }
}