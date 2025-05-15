import { Component, OnInit } from '@angular/core';
import { ITeamStats } from 'src/app/models/league.model';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
  leaderboard: ITeamStats[] = [];

  constructor(private _leagueService: LeagueService) {}

  ngOnInit(): void {
    this.leaderboard = this._leagueService.getLeaderBoard();
  }
}
