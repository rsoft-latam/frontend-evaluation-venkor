import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueService } from 'src/app/services/league.service';
import { IMatch } from 'src/app/shared/models/league.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgTableComponent } from 'src/app/shared/ng-table/ng-table.component';
import { ScheduleComponent } from 'src/app/pages/schedule/schedule.component';
import { SCHEDULE_COLUMN_DEFS } from 'src/app/pages/schedule/column-defs';

describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;
  let mockLeagueService: jest.Mocked<LeagueService>;

  beforeEach(async () => {
    mockLeagueService = {
      fetchData: jest.fn(),
      getMatches: jest.fn(),
      getLeaderBoard: jest.fn(),
    } as unknown as jest.Mocked<LeagueService>;

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [NgTableComponent, ScheduleComponent],
      providers: [{ provide: LeagueService, useValue: mockLeagueService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have columnDefs equal to SCHEDULE_COLUMN_DEFS', () => {
    expect(component.columnDefs).toBe(SCHEDULE_COLUMN_DEFS);
  });

  it('should call fetchData and set matches on init', async () => {
    const mockMatches: IMatch[] = [
      {
        awayTeam: 'Team B',
        awayTeamScore: 1,
        homeTeam: 'Team A',
        homeTeamScore: 2,
        matchDate: 1715702400000,
        matchPlayed: true,
        stadium: 'stadium-test',
      },
    ];

    mockLeagueService.fetchData.mockResolvedValue(undefined);
    mockLeagueService.getMatches.mockReturnValue(mockMatches);

    await component.ngOnInit();

    expect(mockLeagueService.getMatches).toHaveBeenCalled();
    expect(component.matches).toBe(mockMatches);
  });
});
