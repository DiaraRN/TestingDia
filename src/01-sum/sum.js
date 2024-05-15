function sum(num1,num2){
    if(num1=== undefined || num2=== undefined){
        return "hubo error con los argumentos";
    }
    return num1 + num2;
}
module.exports = sum;
test('dos mas dos', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe y toEqual son equivalentes para números
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });
  test('no hay I en Team', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('hay "stop" en Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });