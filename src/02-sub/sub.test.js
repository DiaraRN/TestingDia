const sub = require("./sub");

describe("otros tests", () => {
  test("should return true", () => {
    expect(true).toBe(true);
  });
});

describe("todos los test relacionados con sub", () => {
  // test("la función sub debe retornar la resta de dos numeros naturales", () => {
  //   const result = sub(2, 3);
  //   expect(result).toBe(1);
  // });

  test("la función debe retornar error si alguno de los parametros no es un numero entero", () => {
    const result = sub("2", 3);
    const error = "los argumentos deben ser numeros enteros";
    expect(result).toBe(error);
  });

  test("si la resta es mayor a 100 debe retornar 'la resta sobrepasó los limites' ", () => {
    const result = sub(200, 100); // 100
    const resultExpected = "la resta sobrepasó los limites";
    expect(result).toBe(resultExpected);
  });
});
