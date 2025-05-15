export interface IColumnDefs {
    headerName: string;
    field: string;
    type: string;
    condition?: (row: any) => boolean;
}