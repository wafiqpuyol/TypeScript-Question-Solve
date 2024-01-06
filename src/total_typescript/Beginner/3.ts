/**
 *  make last property as optional
 *
 */

// Question ⬇⬇⬇
export const getName = (params: { first: string; last: string }) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

getName({ first: "wafiq" });

/**
 * Possible Solutions => [add "?" end of the key name]
 */

// Solution-1 ⬇⬇⬇

export const getName1 = (params: { first: string; last?: string }) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

getName1({ first: "wafiq" });
