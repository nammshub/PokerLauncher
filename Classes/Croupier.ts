
import { PokerActor } from "./PokerActor";
import { Config } from "./Config";
import { spawn } from "child_process";



export class Croupier extends PokerActor {

    endGameRegex = new RegExp('(.*?)--game\.end(.*?)');

    constructor(path = Config.CROUPIER_DEFAULT_PATH, execScript = Config.CROUPIER_DEFAULT_EXEC, execArgs = Config.CROUPIER_DEFAULT_EXEC_ARGS) {
        super(path,execScript,execArgs);
    }

    start(endGameCallback?: (data: any) => void) {
        const scriptNpmStart = spawn("cmd.exe", ["/c", `${this._execScript} ${this._execArgs}`], { cwd: this._path });
        scriptNpmStart.stdout.on('data', (data) => {
            console.log(`scriptNpmStart stdout: ${data}`);
            //analyse si fin de game
            if (this.endGameRegex.test(data)){
                endGameCallback(scriptNpmStart.pid.toString());
            }

        });
        scriptNpmStart.stderr.on('data', (data) => {
            console.log(`scriptNpmStart stderr: ${data}`);
        });

        scriptNpmStart.on('close', (code) => {
            console.log(`scriptNpmStart child process exited with code ${code}`);
        });

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