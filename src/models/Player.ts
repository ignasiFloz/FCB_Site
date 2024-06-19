import { IHonors } from "./IHonors";
import { Human } from "./Human";
import { IStats } from "./IStats";

export class Player extends Human  {
    position: string;
    image: string;
    stats: IStats;
    honors: IHonors;
  
    constructor(
      id: string,
      name: string,
      placeOfBirth: string,
      dateOfBirth: string,
      weight: number,
      height: number,
      biography: string,
      position: string,
      image: string,
      stats: IStats,
      honors: IHonors
    ) {
      super(id, name, placeOfBirth, dateOfBirth, weight, height, biography);
      this.position = position;
      this.image = image;
      this.stats = stats;
      this.honors = honors;
    }
  }
