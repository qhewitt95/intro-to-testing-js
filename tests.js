// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
//Summer and Obi functions
describe ('sayHello',function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello("Obi")).toBe('string');
    });
    it('should return the string "Hello, Summer!" when sayHello("Summer") executed', function () {
        expect(sayHello("Summer")).toBe("Hello, Summer!");
    });
    it('should return the string "Hello, Obi!" when sayHello("Obi") executed', function () {
        expect(sayHello("Obi")).toBe("Hello, Obi!");
    });
    it('should return the string "Hello, Pat!" when sayHello("Pat")" executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })
    it('should return the string "Hello, World!" when sayHello()" executed', function () {
        expect(sayHello()).toBe("Hello, World!");
    })
    it('should return the string "Hello, World!" when sayHello()" executed', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    })
})


