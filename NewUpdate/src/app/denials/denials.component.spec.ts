import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenialsComponent } from './denials.component';

describe('DenialsComponent', () => {
  let component: DenialsComponent;
  let fixture: ComponentFixture<DenialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
