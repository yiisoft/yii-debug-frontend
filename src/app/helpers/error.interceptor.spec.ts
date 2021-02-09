import { TestBed } from '@angular/core/testing';

import { ErrorInterceptor } from './error.interceptor';

describe('ErrorInterceptor', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [ErrorInterceptor],
        }),
    );

    it('should be created', async () => {
        const interceptor: ErrorInterceptor = TestBed.inject(ErrorInterceptor);
        await expect(interceptor).toBeTruthy();
    });
});
