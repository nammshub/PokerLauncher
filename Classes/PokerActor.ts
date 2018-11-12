import { exec } from "child_process";

export class PokerActor {

    _path: string;
    _execScript: string;

    constructor(path?: string, execScript?: string) {
        this._path = path || "";
        this._execScript = execScript || "";
    }
    start() {
        console.log(`cd ${this._path} && ${this._execScript}`);
        //should start the game for this actor
        exec(`cd ${this._path} && ${this._execScript}`, (error: Error, stdout: string, stderr: string) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    };
}