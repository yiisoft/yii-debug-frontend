import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLayoutComponent } from './view-layout.component';

describe('ViewLayoutComponent', () => {
  let component: ViewLayoutComponent;
  let fixture: ComponentFixture<ViewLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewLayoutComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
