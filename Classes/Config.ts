export class Config {

    //MAX_GAMES
    static readonly MAX_GAMES_ALLOWED: number = 200;

    //MAX_MINUTES_BY_MATCH
    static readonly MAX_MINUTES_BY_MATCH: number = 5;

    //PLAYERS PARAMS
    static readonly MAX_PLAYERS_ALLOWED: number = 6;
    static readonly NBR_DIFFERENT_KIND_PLAYERS: number = 5; //DevTeam; Aggressive; Passive; Canards; Pickpoker

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

    // IA CANARDS LOQUES
    static readonly IA_CANARDS_DEFAULT_PATH: string = "../canards-loques";
    static readonly IA_CANARDS_DEFAULT_EXEC: string = "npm";
    static readonly IA_CANARDS_DEFAULT_EXEC_ARGS: string = "start";

    // IA PICKPOKER
    static readonly IA_PICKPOKER_DEFAULT_PATH: string = "../pick-poker";
    static readonly IA_PICKPOKER_DEFAULT_EXEC: string = "npm";
    static readonly IA_PICKPOKER_DEFAULT_EXEC_ARGS: string = "start";

};