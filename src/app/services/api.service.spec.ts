import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
    let service: ApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(ApiService);
    });

    it('should be created', async () => {
        await expect(service).toBeTruthy();
    });
});
