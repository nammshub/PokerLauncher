export class RandomUtil {
    static randomIntFromInterval(min,max) : number {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
}