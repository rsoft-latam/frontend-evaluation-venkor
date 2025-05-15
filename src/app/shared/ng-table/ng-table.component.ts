import { Component, Input, OnInit } from '@angular/core';
import { IColumnDefs } from './ng-table.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ng-table',
  templateUrl: './ng-table.component.html',
  styleUrls: ['./ng-table.component.scss'],
})
export class NgTableComponent implements OnInit {
  @Input() rowData: any[];
  @Input() columnDefs: IColumnDefs[] = [];

  private _flagApiUrl = environment.flagApiUrl;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  public getFlagImage(country: string): SafeResourceUrl {
    const url = `${this._flagApiUrl}/${encodeURIComponent(country)}.png`;
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
