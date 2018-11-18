import { Player } from "./Player"
import { Config } from "./Config"

export class IaAggressive extends Player{

    constructor(path = Config.IA_AGGRESSIVE_DEFAULT_PATH, execScript = Config.IA_AGGRESSIVE_DEFAULT_EXEC, execArgs = Config.IA_AGGRESSIVE_DEFAULT_EXEC_ARGS) {
        super(path,execScript,execArgs);
    }
}