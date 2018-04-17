import { PowerPipe } from './power.pipe';
// jasmine

fdescribe ('testing power pipe', () => {
    it("should be same value with power 1", () => {
        const pipe = new PowerPipe();

        expect(pipe.transform(2, 1)).toBe(2);

    });

    it("should be same value with default", () => {
        const pipe = new PowerPipe();

        expect(pipe.transform(3)).toBe(3);

    });
});
