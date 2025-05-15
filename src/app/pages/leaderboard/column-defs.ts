import { ITeamStats } from 'src/app/shared/models/league.model';
import { IColumnDefs } from 'src/app/shared/ng-table/ng-table.model';

export const LEADERBOARD_COLUMN_DEFS: IColumnDefs[] = [
  {
    headerName: 'Team Name',
    field: 'teamName',
    type: 'flagImage',
    customClasses: 'flex-row-reverse',
  },
  {
    headerName: 'MP',
    field: 'matchesPlayed',
    type: 'text',
  },
  {
    headerName: 'GF',
    field: 'goalsFor',
    type: 'text',
    responsiveClasses: 'hidden md:table-cell',
  },
  {
    headerName: 'GA',
    field: 'goalsAgainst',
    type: 'text',
    responsiveClasses: 'hidden md:table-cell',
  },
  {
    headerName: 'GD',
    field: 'goalsAgainst',
    type: 'text',
    getValue: (row: ITeamStats) => {
      return String(row.goalsFor - row.goalsAgainst);
    },
    responsiveClasses: 'block md:hidden',
  },
  {
    headerName: 'Points',
    field: 'points',
    type: 'text',
  },
];
