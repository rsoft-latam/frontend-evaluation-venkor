/**
 * A class representing a service that processes the data for match schedule
 * and generates leaderboard.
 *
 * NOTE: MAKE SURE TO IMPLEMENT ALL EXISITNG METHODS BELOW WITHOUT CHANGING THE INTERFACE OF THEM,
 *       AND PLEASE DO NOT RENAME, MOVE OR DELETE THIS FILE.
 *
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMatch, ITeamStats } from '../models/league.model';

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  private _baseUrl: string = environment.apiBaseUrl;
  private _matches: IMatch[] = [];

  constructor(private _http: HttpClient) {}

  /**
   * Sets the match schedule.
   * Match schedule will be given in the following form:
   * [
   *      {
   *          matchDate: [TIMESTAMP],
   *          stadium: [STRING],
   *          homeTeam: [STRING],
   *          awayTeam: [STRING],
   *          matchPlayed: [BOOLEAN],
   *          homeTeamScore: [INTEGER],
   *          awayTeamScore: [INTEGER]
   *      },
   *      {
   *          matchDate: [TIMESTAMP],
   *          stadium: [STRING],
   *          homeTeam: [STRING],
   *          awayTeam: [STRING],
   *          matchPlayed: [BOOLEAN],
   *          homeTeamScore: [INTEGER],
   *          awayTeamScore: [INTEGER]
   *      }
   * ]
   *
   * @param {Array} matches List of matches.
   */

  setMatches(matches: IMatch[]) {
    this._matches = matches;
  }

  /**
   * Returns the full list of matches.
   *
   * @returns {Array} List of matches.
   */
  getMatches() {
    return this._matches;
  }

  /**
   * Returns the leaderBoard in a form of a list of JSON objecs.
   *
   * [
   *      {
   *          teamName: [STRING]',
   *          matchesPlayed: [INTEGER],
   *          goalsFor: [INTEGER],
   *          goalsAgainst: [INTEGER],
   *          points: [INTEGER]
   *      },
   * ]
   *
   * @returns {Array} List of teams representing the leaderBoard.
   */
  getLeaderBoard(): ITeamStats[] {
    const teams: Record<string, ITeamStats> = {};

    for (const match of this._matches) {
      this._initTeamStats(teams, match.homeTeam);
      this._initTeamStats(teams, match.awayTeam);

      if (match.matchPlayed) {
        this._updateStats(teams, match);
      }
    }

    return Object.keys(teams).map(key => teams[key]);
  }

  /**
   * Initializes a team's statistics object in the map if it does not already exist
   *
   * @param teamsMap - Accumulator object storing stats per team
   * @param teamName - Name of the team to initialize
   */
  private _initTeamStats(
    map: Record<string, ITeamStats>,
    teamName: string
  ): void {
    if (!map[teamName]) {
      map[teamName] = {
        teamName,
        matchesPlayed: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
      };
    }
  }

  /**
   * Updates the statistics for both home and away teams based on a single match result
   *
   * @param teamsMap - Accumulator object with team stats
   * @param match - Match result to be processed
   */
  private _updateStats(teams: Record<string, ITeamStats>, match: IMatch): void {
    const { homeTeam, awayTeam, homeTeamScore, awayTeamScore } = match;

    teams[homeTeam].matchesPlayed++;
    teams[awayTeam].matchesPlayed++;

    teams[homeTeam].goalsFor += homeTeamScore;
    teams[homeTeam].goalsAgainst += awayTeamScore;

    teams[awayTeam].goalsFor += awayTeamScore;
    teams[awayTeam].goalsAgainst += homeTeamScore;

    if (homeTeamScore > awayTeamScore) {
      teams[homeTeam].points += 3;
    } else if (awayTeamScore > homeTeamScore) {
      teams[awayTeam].points += 3;
    } else {
      teams[homeTeam].points += 1;
      teams[awayTeam].points += 1;
    }
  }

  /**
   * Asynchronic function to fetch the data from the server and set the matches.
   */
  async fetchData() {
    try {
      const response: { success: boolean; matches: IMatch[] } = await this._http
        .get<{ success: boolean; matches: IMatch[] }>(
          `${this._baseUrl}/api/v1/getAllMatches`
        )
        .toPromise();
      const matches = response.matches; //TODO: replace this with the correct matches.
      this.setMatches(matches);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  }
}
