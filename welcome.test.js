const functions = require("./functions.js");

test("sayHello", () => {
  expect(functions.hello()).toBe("hello world");
});

test("sayBye", () => {
  expect(functions.bye()).toBe("bye bye");
});
