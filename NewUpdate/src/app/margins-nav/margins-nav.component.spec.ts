import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginsNavComponent } from './margins-nav.component';

describe('MarginsNavComponent', () => {
  let component: MarginsNavComponent;
  let fixture: ComponentFixture<MarginsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarginsNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarginsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
