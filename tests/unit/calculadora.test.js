const calculadora = require("../../models/calculadora");

test("Resultado tem que ser 4", () => {
  const resultado = calculadora.soma(2, 3);
  expect(resultado).toBe(6);
});
