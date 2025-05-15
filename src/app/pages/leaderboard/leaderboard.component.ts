import { Component, OnInit } from '@angular/core';
import { ITeamStats } from 'src/app/shared/models/league.model';
import { LeagueService } from 'src/app/services/league.service';
import { LEADERBOARD_COLUMN_DEFS } from './column-defs';

@Component({
  selector: 'app-leaderboard',
  template: `
    <div class="container mx-auto px-4 py-6">
      <h2 class="text-heading text-heading font-semibold mb-4 text-center">League Standings</h2>

      <ng-table [rowData]="leaderboard" [columnDefs]="columnDefs"></ng-table>
    </div>
  `,
})
export class LeaderboardComponent implements OnInit {
  leaderboard: ITeamStats[] = [];
  public columnDefs = LEADERBOARD_COLUMN_DEFS;

  constructor(private _leagueService: LeagueService) {}

  ngOnInit(): void {
    this.leaderboard = this._leagueService.getLeaderBoard();
  }
}
