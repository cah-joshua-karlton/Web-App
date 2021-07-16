import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenialsNavComponent } from './denials-nav.component';

describe('DenialsNavComponent', () => {
  let component: DenialsNavComponent;
  let fixture: ComponentFixture<DenialsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenialsNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenialsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
