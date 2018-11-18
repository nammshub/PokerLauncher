import { Player } from "./Player"

export abstract class PlayerFactory {
    public abstract generatePlayer() : Player   
}