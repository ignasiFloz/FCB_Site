import { IHonors } from "./IHonors";
import { Human } from "./Human";
import { IStats } from "./IStats";

export class Player extends Human implements IStats, IHonors {

    id: string;
    position: string;
    image: string;
    biography: string;
    games: number;
    cleanSheets: number;
    saves?: number;
    seasons: {
        start: number,
        end: number,
        games: number,
        cleanSheets: number,
        saves: number
    };
    laLiga: number;
    championsLeague: number;
    copaDelRey: number;
    clubWorldCup: number;

    constructor(obj: Player) {

        super();
        this.biography = obj.biography;
        this.id = obj.id;
        this.image = obj.image;
        this.position = obj.position;
        this.dateOfBirth = obj.dateOfBirth;
        this.placeOfBirth = obj.placeOfBirth;
        this.weight = obj.weight;
        this.name = obj.name;
        this.height = obj.height;

        this.games = obj.games;
        this.cleanSheets = obj.cleanSheets;
        this.saves = obj.saves;
        this.seasons = obj.seasons;

        this.laLiga = obj.laLiga;
        this.championsLeague = obj.championsLeague;
        this.copaDelRey = obj.copaDelRey;
        this.clubWorldCup = obj.clubWorldCup;
    }    

}
