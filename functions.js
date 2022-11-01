"use strict";

const functions = {
  hello() {
    return "hello world";
  },

  bye() {
    return "bye bye";
  },

  sum(a, b) {
    return a + b;
  },

  greaterThan18(num) {
    if(num > 18) {
      return "You are an adult";
    }

    return "You are not an adult";
  },

  greaterLessEqual(num) {
    if(num === 18) {
      return "equal";
    }

    if(num > 18) {
      return "greater";
    }

    if(num < 18) {
      return "less";
    }
  }
};

module.exports = functions;
