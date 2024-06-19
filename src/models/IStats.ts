export interface IStats {
  games: number;
  cleanSheets: number;
  saves: number;
  assists: number 
  seasons: {
    assists: number
    goals: number
    start: number;
    end: number;
    games: number;
    cleanSheets: number;
    saves: number;
  };
}