import { Player } from "./Player"
import { Config } from "./Config"

export class IaPickpoker extends Player{

    constructor(path = Config.IA_PICKPOKER_DEFAULT_PATH, execScript = Config.IA_PICKPOKER_DEFAULT_EXEC, execArgs = Config.IA_PICKPOKER_DEFAULT_EXEC_ARGS) {
        super(path,execScript,execArgs);
    }
}