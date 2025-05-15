import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
export class NgFooterComponent implements OnInit, OnDestroy {
  public apiVersion: string = '';
  private _subs: Subscription = new Subscription();

  constructor(private _appInfoService: AppInfoService) {}

  ngOnInit(): void {
    this._subs.add(
      this._appInfoService.getApiVersion().subscribe((res) => {
        if (res.success) {
          this.apiVersion = res.version;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
}
