import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionOrdersComponent } from './subscription-orders.component';

describe('SubscriptionOrdersComponent', () => {
  let component: SubscriptionOrdersComponent;
  let fixture: ComponentFixture<SubscriptionOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
