import { IMatch } from 'src/app/models/league.model';
import { IColumnDefs } from 'src/app/shared/ng-table/ng-table.model';

export const SCHEDULE_COLUMN_DEFS: IColumnDefs[] = [
  {
    headerName: 'Date/Time',
    field: 'matchDate',
    type: 'dateTime',
  },
  {
    headerName: 'Stadium',
    field: 'stadium',
    type: 'text',
  },
  {
    headerName: 'Home Team',
    field: 'homeTeam',
    type: 'flagImage',
  },
  {
    headerName: '',
    field: 'homeTeam',
    type: 'text',
    getValue: (row: IMatch) => {
      return row.matchPlayed
        ? row.homeTeamScore + ' : ' + row.awayTeamScore
        : '- : -';
    },
  },
  {
    headerName: 'Away Team',
    field: 'awayTeam',
    type: 'flagImage',
    customClasses: 'flex-row-reverse',
  },
];
