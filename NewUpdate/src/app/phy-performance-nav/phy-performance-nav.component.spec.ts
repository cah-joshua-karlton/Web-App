import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhyPerformanceNavComponent } from './phy-performance-nav.component';

describe('PhyPerformanceNavComponent', () => {
  let component: PhyPerformanceNavComponent;
  let fixture: ComponentFixture<PhyPerformanceNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhyPerformanceNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhyPerformanceNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
