import { TestBed } from '@angular/core/testing';
import { KinoService } from './kino.service';
describe('KinoService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(KinoService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=kino.service.spec.js.map