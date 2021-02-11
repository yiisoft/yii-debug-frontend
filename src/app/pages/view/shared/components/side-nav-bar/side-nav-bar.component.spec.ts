import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SideNavBarComponent } from './side-nav-bar.component';

describe('SideNavBarComponent', () => {
    let component: SideNavBarComponent;
    let fixture: ComponentFixture<SideNavBarComponent>;

    beforeEach(
        waitForAsync(async () => {
            await TestBed.configureTestingModule({
                declarations: [SideNavBarComponent],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(SideNavBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
