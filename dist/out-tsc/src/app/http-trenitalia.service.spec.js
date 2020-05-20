import { TestBed } from '@angular/core/testing';
import { HttpTrenitaliaService } from './http-trenitalia.service';
describe('HttpTrenitaliaService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HttpTrenitaliaService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=http-trenitalia.service.spec.js.map