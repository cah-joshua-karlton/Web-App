import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSupportNavComponent } from './customer-support-nav.component';

describe('CustomerSupportNavComponent', () => {
  let component: CustomerSupportNavComponent;
  let fixture: ComponentFixture<CustomerSupportNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSupportNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSupportNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
