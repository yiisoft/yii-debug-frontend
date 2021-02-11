import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ViewLayoutComponent } from './view-layout.component';

describe('ViewLayoutComponent', () => {
    let component: ViewLayoutComponent;
    let fixture: ComponentFixture<ViewLayoutComponent>;

    beforeEach(
        waitForAsync(async () => {
            await TestBed.configureTestingModule({
                declarations: [ViewLayoutComponent],
                imports: [RouterTestingModule, HttpClientTestingModule],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        await expect(component).toBeTruthy();
    });
});
