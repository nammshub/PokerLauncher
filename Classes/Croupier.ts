
import { PokerActor } from "./PokerActor";
import { Config } from "./Config";
import { spawn } from "child_process";


export class Croupier extends PokerActor {

    constructor(path = Config.CROUPIER_DEFAULT_PATH, execScript = Config.CROUPIER_DEFAULT_EXEC, execArgs = Config.CROUPIER_DEFAULT_EXEC_ARGS) {
        super(path,execScript,execArgs);
    }

}