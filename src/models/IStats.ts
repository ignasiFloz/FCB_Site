export interface IStats {
      games?: number,
      cleanSheets?: number,
      saves?: number,
      seasons?: {
        start?: number,
        end?: number,
        games?: number,
        cleanSheets?: number,
        saves?: number
      }
}