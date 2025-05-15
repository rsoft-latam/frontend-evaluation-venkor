/**
 * PLEASE DO NOT RENAME OR REMOVE ANY OF THE CODE BELOW.
 * YOU CAN ADD YOUR CODE TO THIS FILE TO EXTEND THE FEATURES TO USE THEM IN YOUR WORK.
 */

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { LeagueService } from './services/league.service';
import { NgTableComponent } from './shared/ng-table/ng-table.component';
import { NgFooterComponent } from './layout/ng-footer/ng-footer.component';
import { NgHeaderComponent } from './layout/ng-header/ng-header.component';

export function initApp(
  authService: AuthService,
  leagueService: LeagueService
): () => Promise<void> {
  return async () => {
    await authService.loadToken();
    await leagueService.fetchData();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    LeaderboardComponent,
    NotFoundComponent,
    NgTableComponent,
    NgFooterComponent,
    NgHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, HttpClientModule],
  exports: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [AuthService, LeagueService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
