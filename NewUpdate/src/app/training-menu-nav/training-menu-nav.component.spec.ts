import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingMenuNavComponent } from './training-menu-nav.component';

describe('TrainingMenuNavComponent', () => {
  let component: TrainingMenuNavComponent;
  let fixture: ComponentFixture<TrainingMenuNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingMenuNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingMenuNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
