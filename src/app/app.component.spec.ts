import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(
        waitForAsync(async () => {
            await TestBed.configureTestingModule({
                imports: [RouterTestingModule, MatSidenavModule],
                declarations: [AppComponent],
                providers: [MatSnackBar, Overlay],
            }).compileComponents();
        }),
    );

    it('should create the app', async () => {
        const fixture = TestBed.createComponent(AppComponent);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const app: AppComponent = fixture.debugElement.componentInstance;
        await expect(app).toBeTruthy();
    });

    it(`should have as title 'Yii Debugger'`, async () => {
        const fixture = TestBed.createComponent(AppComponent);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const app: AppComponent = fixture.debugElement.componentInstance;
        await expect(app.title).toEqual('Yii Debugger');
    });
});
