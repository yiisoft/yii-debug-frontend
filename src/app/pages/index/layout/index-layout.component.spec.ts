import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IndexLayoutComponent } from './index-layout.component';

describe('IndexLayoutComponent', () => {
    let component: IndexLayoutComponent;
    let fixture: ComponentFixture<IndexLayoutComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [IndexLayoutComponent],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(IndexLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
