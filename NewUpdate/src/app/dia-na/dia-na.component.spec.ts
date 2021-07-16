import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaNaComponent } from './dia-na.component';

describe('DiaNaComponent', () => {
  let component: DiaNaComponent;
  let fixture: ComponentFixture<DiaNaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaNaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaNaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
