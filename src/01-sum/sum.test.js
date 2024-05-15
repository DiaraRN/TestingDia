const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
    const result = sum(1,2);
  expect(result).toBe(3);

});

test("add 10 + 10 to equal 20", () => {
    const result = sum(10, 10);
    expect(result).toBe(20);
});
test("should return error if arguments are not passed", () => {
    const result = sum();
    expect(result).toBe("hubo error con los argumentos");
});
test('agregando números de punto flotante', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3); Esto no funcionará debido al error de redondeo
    expect(value).toBeCloseTo(0.3); // Esto funciona.
  });