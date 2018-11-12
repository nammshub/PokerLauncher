
import { PokerActor } from "./PokerActor";
import { Constante } from "./Constante";

export class Croupier extends PokerActor {

    constructor(path = Constante.CROUPIER_DEFAULT_PATH, execScript = Constante.CROUPIER_DEFAULT_EXEC) {
        super(path,execScript);
    }

}