import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimVarianceNavComponent } from './reim-variance-nav.component';

describe('ReimVarianceNavComponent', () => {
  let component: ReimVarianceNavComponent;
  let fixture: ComponentFixture<ReimVarianceNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimVarianceNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimVarianceNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
