const functions = require("./functions.js");

test("say hello", () => {
  expect(functions.hello()).toBe("hello world");
});

test("say bye", () => {
  expect(functions.bye()).toBe("bye bye");
});

test("sum two numbers", () => {
  const a = 4;
  const b = 4;

  expect(functions.sum(a, b)).toBe(8);
});

test("if is greater than 18 years old", () => {
  const age1 = 19;
  const age2 = 10;
  
  expect.assertions(2);
  expect(functions.greaterThan18(age1)).toBe("You are an adult");
  expect(functions.greaterThan18(age2)).toBe("You are not an adult");
});
