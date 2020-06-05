import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfosComponent } from './customer-infos.component';

describe('CustomerInfosComponent', () => {
  let component: CustomerInfosComponent;
  let fixture: ComponentFixture<CustomerInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
