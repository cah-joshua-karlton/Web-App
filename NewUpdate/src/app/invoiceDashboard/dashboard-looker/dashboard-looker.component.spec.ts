import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLookerComponent } from './dashboard-looker.component';

describe('DashboardLookerComponent', () => {
  let component: DashboardLookerComponent;
  let fixture: ComponentFixture<DashboardLookerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardLookerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLookerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
