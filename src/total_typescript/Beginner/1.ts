/**
 *  The Implicit ‘Any’ Type Error
 *
 */

// Question ⬇⬇⬇

export const addTwoNumbers = (a, b) => {
  return a + b;
};

/**
 * Possible Solutions => [add type annotation to the function params]
 */

// Solution-1 ⬇⬇⬇
const addTwoNumbers1 = (a: number, b: number) => {
  return a + b;
};

addTwoNumbers1(1, 2);
