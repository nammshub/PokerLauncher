import { Player } from "./Player"
import { Config } from "./Config"

export class IaDevTeam extends Player{

    constructor(path = Config.IA_DEVTEAM_DEFAULT_PATH, execScript = Config.IA_DEVTEAM_DEFAULT_EXEC, execArgs = Config.IA_DEVTEAM_DEFAULT_EXEC_ARGS) {
        super(path,execScript,execArgs);
    }
}