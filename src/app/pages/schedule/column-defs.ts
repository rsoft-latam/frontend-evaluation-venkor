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
    headerName: 'Result',
    field: 'homeTeam',
    type: 'text',
  },
  {
    headerName: 'Away Team',
    field: 'awayTeam',
    type: 'flagImage',
  },
];
