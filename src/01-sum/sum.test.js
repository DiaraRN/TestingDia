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