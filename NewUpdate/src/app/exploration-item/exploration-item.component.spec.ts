import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorationItemComponent } from './exploration-item.component';

describe('ExplorationItemComponent', () => {
  let component: ExplorationItemComponent;
  let fixture: ComponentFixture<ExplorationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
