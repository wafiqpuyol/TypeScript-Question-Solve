/**
 *  In this exercise, we've an object in which we wanna add
 * another property.
 *
 */

// Question ⬇⬇⬇

const user = {
  name: "Matt",
};
user.age = 30;

/**
 * Possible Solutions => [index_Signature, Record, Map, Partial, assertion(as)]
 */

// Solution-1 ⬇⬇⬇
const user1: Record<string, string | number> = {
  name: "Matt",
};
user1.age = 60;

// Solution-2 ⬇⬇⬇
interface User {
  [key: string]: string | number;
}

const user2: User = {
  name: "Matt",
};
user2.age = 56;

export {};
