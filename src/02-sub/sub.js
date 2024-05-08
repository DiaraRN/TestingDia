const sub = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return "los argumentos deben ser numeros enteros";
    }
    return Math.abs(num1 - num2);
  };
  
  module.exports = sub;