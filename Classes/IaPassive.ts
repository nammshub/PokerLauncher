import { Player } from "./Player"
import { Config } from "./Config"

export class IaPassive extends Player{

    constructor(path = Config.IA_PASSIVE_DEFAULT_PATH, execScript = Config.IA_PASSIVE_DEFAULT_EXEC, execArgs = Config.IA_PASSIVE_DEFAULT_EXEC_ARGS) {
        super(path,execScript,execArgs);
    }
}