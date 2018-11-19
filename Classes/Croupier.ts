
import { PokerActor } from "./PokerActor";
import { Config } from "./Config";
import { spawn } from "child_process";



export class Croupier extends PokerActor {

    serverStartedRegex = new RegExp('(.*?)to restart at any time(.*?)');
    //signal de fin de partie si on depasse les 100 tours (bug du serveur) ou si le message game.end
    endGameRegex = new RegExp('(.*?)--turn.end\[100\](.*?)|(.*?)--game\.end(.*?)');

    constructor(path = Config.CROUPIER_DEFAULT_PATH, execScript = Config.CROUPIER_DEFAULT_EXEC, execArgs = Config.CROUPIER_DEFAULT_EXEC_ARGS) {
        super(path,execScript,execArgs);
    }

    start(callback?: (data: any) => void) {
        const scriptNpmStart = spawn("cmd.exe", ["/c", `${this._execScript} ${this._execArgs}`], { cwd: this._path });
        scriptNpmStart.stdout.on('data', (data) => {
            console.log(`scriptNpmStart stdout: ${data}`);
            //analyse serveur demarré
            if(this.serverStartedRegex.test(data)){
                callback("server started");
            }
            //analyse si fin de game
            if (this.endGameRegex.test(data)){
                callback(scriptNpmStart.pid.toString());
            }

        });
        scriptNpmStart.stderr.on('data', (data) => {
            console.log(`scriptNpmStart stderr: ${data}`);
        });

        scriptNpmStart.on('close', (code) => {
            console.log(`scriptNpmStart child process exited with code ${code}`);
        });

        //Apres un nombre de minutes determinees en config => on arrete le match
        setTimeout(function(){
            callback(scriptNpmStart.pid.toString());
        },1000 * 60 * Config.MAX_MINUTES_BY_MATCH);

    };

    end(pid:string, endDone:(data: any) => void){
        const endServer = spawn("taskkill", ["/pid", pid, '/f', '/t']);
        endServer.stdout.on('data', (data) => {
            console.log(`endServer stdout: ${data}`);
        });

        endServer.stderr.on('data', (data) => {
            console.log(`endServer stderr: ${data}`);
        });
        
        endServer.on('close', (code) => {
            console.log(`endServer child process exited with code ${code}`);
            endDone(code);
        });

    }

}