/**
 *  remove the warn from params parameter
 *
 */

// Question ⬇⬇⬇
export const addTwoNumbers = (params) => {
  return params.first + params.second;
};

/**
 * Possible Solutions => [create a type alias for param object /interface]
 */

// Solution-1 ⬇⬇⬇

type Params = {
  first: number;
  second: number;
};

export const addTwoNumbers1 = (params: Params) => {
  return params.first + params.second;
};

addTwoNumbers1({
  first: 2,
  second: 4,
});
