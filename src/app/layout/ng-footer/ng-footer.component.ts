import { Component, OnInit } from '@angular/core';
import { AppInfoService } from 'src/app/services/app-info.service';

@Component({
  selector: 'ng-footer',
  template: `
    <footer
      class="bg-footerBg h-[40px] w-full flex items-center justify-end pr-[40px] border-t border-[#E4EDF2]"
    >
      <span class="text-[#4B5C68] text-xs font-semibold"
        >API Version: {{ apiVersion }}</span
      >
    </footer>
  `,
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
