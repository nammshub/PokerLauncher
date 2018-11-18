import { spawn } from "child_process";

export class PokerActor {

    _path: string;
    _execScript: string;
    _execArgs: string;

    constructor(path?: string, execScript?: string, execArgs?: string) {
        this._path = path || "";
        this._execScript = execScript || "";
        this._execArgs = execArgs || "";
    }
    start() {
        const scriptNpmStart = spawn("cmd.exe", ["/c", `${this._execScript} ${this._execArgs}`], { cwd: this._path });
        scriptNpmStart.stdout.on('data', (data) => {
            console.log(`scriptNpmStart stdout: ${data}`);
        });
        scriptNpmStart.stderr.on('data', (data) => {
            console.log(`scriptNpmStart stderr: ${data}`);
        });

        scriptNpmStart.on('close', (code) => {
            console.log(`scriptNpmStart child process exited with code ${code}`);
        });

    };
}