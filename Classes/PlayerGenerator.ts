import { Player } from "./Player"
import { PlayerFactoryGenerator } from "./PlayerFactoryGenerator"
import { RandomUtil } from "./RandomUtil"
import { Config } from "./Config";


export class PlayerGenerator {

    static getRandomPlayers(): Array<Player> {
        let players: Array<Player> = new Array<Player>();
        //on met d'office un joueur DEVTeam
        players.push(PlayerFactoryGenerator.get("DevTeam").generatePlayer());
        const quotaPlayer = RandomUtil.randomIntFromInterval(2, Config.MAX_PLAYERS_ALLOWED);
        for (let iter = 2; iter <= quotaPlayer; iter++) {
            let iaName: string;
            switch (RandomUtil.randomIntFromInterval(1, Config.NBR_DIFFERENT_KIND_PLAYERS)) {
                case 1:
                    iaName = "DevTeam";
                    break;
                case 2:
                    iaName = "Aggressive";
                    break;
                case 3:
                    iaName = "Passive";
                    break;
                case 4:
                    iaName = "Canards";
                    break;
                case 5:
                    iaName = "Pickpoker";
                    break;
            }
            players.push(PlayerFactoryGenerator.get(iaName).generatePlayer());
        }

        return players;
    }


}