import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariancesSubitemComponent } from './variances-subitem.component';

describe('VariancesSubitemComponent', () => {
  let component: VariancesSubitemComponent;
  let fixture: ComponentFixture<VariancesSubitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariancesSubitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariancesSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
