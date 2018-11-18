import { PokerMaster } from "./Classes/PokerMaster"

(function () {
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log('spawn called');
        console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
        return result;
    }
    childProcess.spawn = mySpawn;
})();

const pokerMaster = new PokerMaster();
pokerMaster.launchGames();

pokerMaster.on("game.end.signal", () => {
    console.log('Fin de partie recue dans main.ts');
});