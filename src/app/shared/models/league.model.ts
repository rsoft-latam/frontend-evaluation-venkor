export interface IMatch {
  awayTeam: string;
  awayTeamScore: number;
  homeTeam: string;
  homeTeamScore: number;
  matchDate: number;
  matchPlayed: boolean;
  stadium: string;
}

export interface ITeamStats {
  teamName: string;
  matchesPlayed: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}
