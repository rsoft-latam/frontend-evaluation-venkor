import { Component, OnInit } from '@angular/core';
import { IMatch } from 'src/app/models/match.model';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  public matches: IMatch[] = [];  

  constructor(private _leagueService: LeagueService) { }

  async ngOnInit(): Promise<void> {
    await this._leagueService.fetchData();
    this.matches = this._leagueService.getMatches();
  }

}
