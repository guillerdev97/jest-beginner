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
