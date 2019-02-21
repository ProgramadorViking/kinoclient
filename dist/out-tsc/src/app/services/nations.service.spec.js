import { TestBed } from '@angular/core/testing';
import { NationsService } from './nations.service';
describe('NationsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(NationsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=nations.service.spec.js.map