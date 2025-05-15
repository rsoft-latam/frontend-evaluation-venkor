import { IMatch } from 'src/app/shared/models/league.model';
import { IColumnDefs } from 'src/app/shared/ng-table/ng-table.model';

export const SCHEDULE_COLUMN_DEFS: IColumnDefs[] = [
  {
    headerName: 'Date/Time',
    field: 'matchDate',
    type: 'dateTime',
    responsiveClasses: 'hidden md:table-cell',
  },
  {
    headerName: 'Stadium',
    field: 'stadium',
    type: 'text',
    responsiveClasses: 'hidden lg:table-cell',
  },
  {
    headerName: 'Home Team',
    field: 'homeTeam',
    type: 'flagImage',
    customHeadClasses: 'text-right',
    customClasses: 'font-bold',
  },
  {
    headerName: '',
    field: null,
    type: 'text',
    getValue: (row: IMatch) => {
      return row.matchPlayed
        ? row.homeTeamScore + ' : ' + row.awayTeamScore
        : '- : -';
    },
    customClasses: 'text-center font-bold',
  },
  {
    headerName: 'Away Team',
    field: 'awayTeam',
    type: 'flagImage',
    customClasses: 'flex-row-reverse font-bold',
  },
];
