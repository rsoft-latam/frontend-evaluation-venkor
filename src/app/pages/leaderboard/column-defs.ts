import { IColumnDefs } from 'src/app/shared/ng-table/ng-table.model';

export const LEADERBOARD_COLUMN_DEFS: IColumnDefs[] = [
  {
    headerName: 'Team Name',
    field: 'teamName',
    type: 'flagImage',
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
  },
  {
    headerName: 'GA',
    field: 'goalsAgainst',
    type: 'text',
  },
  {
    headerName: 'Points',
    field: 'points',
    type: 'text',
  },
];
