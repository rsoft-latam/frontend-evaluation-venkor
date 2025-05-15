import { Component, Input, OnInit } from '@angular/core';
import { IColumnDefs } from './ng-table.model';

@Component({
  selector: 'ng-table',
  templateUrl: './ng-table.component.html',
  styleUrls: ['./ng-table.component.scss']
})
export class NgTableComponent implements OnInit {

  @Input() rowData: any[];
  @Input() columnDefs: IColumnDefs[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
