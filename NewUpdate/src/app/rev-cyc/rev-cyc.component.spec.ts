import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevCycComponent } from './rev-cyc.component';

describe('RevCycComponent', () => {
  let component: RevCycComponent;
  let fixture: ComponentFixture<RevCycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevCycComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevCycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
