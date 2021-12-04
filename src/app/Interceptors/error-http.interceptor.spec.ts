import { ErrorHttpInterceptor } from './error-http.interceptor';
import { TestBed } from '@angular/core/testing';


describe('ErrorHttpInterceptor', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({

        })
    );

    it('should be created', async () => {
        const service = TestBed.get(ErrorHttpInterceptor);
        await expect(service).toBeTruthy();
    });
});
