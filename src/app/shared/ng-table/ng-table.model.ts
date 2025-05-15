export interface IColumnDefs {
    headerName: string;
    field: string;
    sort?: boolean;
    width?: string;
    type: string;
    condition?: (row: any) => boolean;
}