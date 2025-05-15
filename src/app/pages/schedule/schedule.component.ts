import { Component, OnInit } from '@angular/core';
import { IMatch } from 'src/app/models/league.model';
import { LeagueService } from 'src/app/services/league.service';
import { SCHEDULE_COLUMN_DEFS } from './column-defs';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  public matches: IMatch[] = [];
  public columnDefs = SCHEDULE_COLUMN_DEFS;

  constructor(private _leagueService: LeagueService) {}

  async ngOnInit(): Promise<void> {
    await this._leagueService.fetchData();
    this.matches = this._leagueService.getMatches();
  }
}
