import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewLayoutComponent } from './view-layout.component';

describe('ViewLayoutComponent', () => {
    let component: ViewLayoutComponent;
    let fixture: ComponentFixture<ViewLayoutComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ViewLayoutComponent],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
