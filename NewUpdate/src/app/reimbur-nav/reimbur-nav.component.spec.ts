import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimburNavComponent } from './reimbur-nav.component';

describe('ReimburNavComponent', () => {
  let component: ReimburNavComponent;
  let fixture: ComponentFixture<ReimburNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimburNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimburNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
