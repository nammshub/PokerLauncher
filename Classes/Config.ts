export class Config {

    //MAX_GAMES
    static readonly MAX_GAMES_ALLOWED: number = 5;

    //PLAYERS PARAMS
    static readonly MAX_PLAYERS_ALLOWED: number = 5;
    static readonly NBR_DIFFERENT_KIND_PLAYERS: number = 3; //DevTeam; Aggressive; Passive

    //CROUPIER
    static readonly CROUPIER_DEFAULT_PATH: string = "../poker";
    static readonly CROUPIER_DEFAULT_EXEC: string = "npm";
    static readonly CROUPIER_DEFAULT_EXEC_ARGS: string = "start";

    // IAS

    ////DEV TEAM
    static readonly IA_DEVTEAM_DEFAULT_PATH: string = "../poker-DevTeam";
    static readonly IA_DEVTEAM_DEFAULT_EXEC: string = "npm";
    static readonly IA_DEVTEAM_DEFAULT_EXEC_ARGS: string = "start";

    //// IA Aggressive
    static readonly IA_AGGRESSIVE_DEFAULT_PATH: string = "../tester";
    static readonly IA_AGGRESSIVE_DEFAULT_EXEC: string = "npm";
    static readonly IA_AGGRESSIVE_DEFAULT_EXEC_ARGS: string = "run start-aggressive";

    //// IA PASSIVE
    static readonly IA_PASSIVE_DEFAULT_PATH: string = "../tester";
    static readonly IA_PASSIVE_DEFAULT_EXEC: string = "npm";
    static readonly IA_PASSIVE_DEFAULT_EXEC_ARGS: string = "run start-passive";

};