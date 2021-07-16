import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsNavComponent } from './trends-nav.component';

describe('TrendsNavComponent', () => {
  let component: TrendsNavComponent;
  let fixture: ComponentFixture<TrendsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendsNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
