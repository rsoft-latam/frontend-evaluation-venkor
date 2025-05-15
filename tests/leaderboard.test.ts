/**
 *
 *  THIS IS A TESTING FILE. YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO TEST YOUR WORK.
 *  PLEASE DON´T CHANGE THE INTERFACE OF leagueService.js METHODS
 *
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LeagueService } from '../src/app/services/league.service';
import { LeaderboardComponent } from 'src/app/pages/leaderboard/leaderboard.component';
import { NgTableComponent } from 'src/app/shared/ng-table/ng-table.component';
import { ITeamStats } from 'src/app/shared/models/league.model';
import { LEADERBOARD_COLUMN_DEFS } from 'src/app/pages/leaderboard/column-defs';

describe('laderboard', () => {
  let component: LeaderboardComponent;
  let fixture: ComponentFixture<LeaderboardComponent>;
  let mockLeagueService: jest.Mocked<LeagueService>;

  beforeEach(async () => {
    mockLeagueService = {
      fetchData: jest.fn(),
      getMatches: jest.fn(),
      getLeaderBoard: jest.fn(),
    } as unknown as jest.Mocked<LeagueService>;

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [NgTableComponent, LeaderboardComponent],
      providers: [{ provide: LeagueService, useValue: mockLeagueService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have columnDefs equal to LEADERBOARD_COLUMN_DEFS', () => {
    expect(component.columnDefs).toBe(LEADERBOARD_COLUMN_DEFS);
  });

  it('should call fetchData and getLeaderBoard on init', async () => {
    const mockLeaderBoard: ITeamStats[] = [
      {
        teamName: 'Team A',
        matchesPlayed: 5,
        goalsFor: 12,
        goalsAgainst: 7,
        points: 13,
      },
    ];

    mockLeagueService.fetchData.mockResolvedValue(undefined);
    mockLeagueService.getLeaderBoard.mockReturnValue(mockLeaderBoard);

    await component.ngOnInit();

    expect(mockLeagueService.getLeaderBoard).toHaveBeenCalled();
    expect(component.leaderboard).toBe(mockLeaderBoard);
  });
});
