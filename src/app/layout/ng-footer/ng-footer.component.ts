import { Component, OnInit } from '@angular/core';
import { AppInfoService } from 'src/app/services/app-info.service';

@Component({
  selector: 'ng-footer',
  templateUrl: './ng-footer.component.html',
  styleUrls: ['./ng-footer.component.scss'],
})
export class NgFooterComponent implements OnInit {
  public apiVersion: string = '';

  constructor(private _appInfoService: AppInfoService) {}

  ngOnInit(): void {
    this._appInfoService.getApiVersion().subscribe((res) => {
      if (res.success) {
        this.apiVersion = res.version;
      }
    });
  }
}
