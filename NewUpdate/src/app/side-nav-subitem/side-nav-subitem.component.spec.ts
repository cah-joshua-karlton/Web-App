import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavSubitemComponent } from './side-nav-subitem.component';

describe('SideNavSubitemComponent', () => {
  let component: SideNavSubitemComponent;
  let fixture: ComponentFixture<SideNavSubitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavSubitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
