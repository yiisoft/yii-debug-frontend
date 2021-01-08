import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListRequestsComponent } from './list-requests.component';

describe('ListRequestsComponent', () => {
  let component: ListRequestsComponent;
  let fixture: ComponentFixture<ListRequestsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListRequestsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
