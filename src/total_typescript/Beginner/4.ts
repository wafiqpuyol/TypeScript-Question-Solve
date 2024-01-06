/**
 *  make last property as optional
 *
 */

// Question ⬇⬇⬇
export const getName = (first: string, last: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

console.log(getName("wafiq"));

/**
 * Possible Solutions => [add ? end of the key name]
 */

// Solution-1 ⬇⬇⬇
export const getName1 = (first: string, last?: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

console.log(getName1("wafiq", "hossain"));
