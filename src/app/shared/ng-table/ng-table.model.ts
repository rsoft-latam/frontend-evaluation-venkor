export interface IColumnDefs {
    headerName: string;
    field: string;
    type: string;
    customClasses?: string;
    customHeadClasses?: string;
    condition?: (row: any) => boolean;
    getValue?: (row: any) => string;
}