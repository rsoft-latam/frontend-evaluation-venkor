import { Component, OnInit } from '@angular/core';
import { IMatch } from 'src/app/shared/models/league.model';
import { LeagueService } from 'src/app/services/league.service';
import { SCHEDULE_COLUMN_DEFS } from './column-defs';

@Component({
  selector: 'app-schedule',
  template: `
    <div class="container mx-auto px-4 py-6">
      <h2 class="text-heading text-heading font-semibold mb-4 text-center">League Schehdule</h2>

      <ng-table
        [rowData]="matches"
        [columnDefs]="columnDefs"
        [showStripedRows]="true"
      ></ng-table>
    </div>
  `,
})
export class ScheduleComponent implements OnInit {
  public matches: IMatch[] = [];
  public columnDefs = SCHEDULE_COLUMN_DEFS;

  constructor(private _leagueService: LeagueService) {}

  async ngOnInit(): Promise<void> {
    this.matches = this._leagueService.getMatches();
  }
}
