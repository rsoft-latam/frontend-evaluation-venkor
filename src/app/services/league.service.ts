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
import { IMatch } from '../models/match.model';

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
  getLeaderBoard() {}

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
