/**
 *  Assigning Types to Variables
 *
 */

// Question ⬇⬇⬇
interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}
const defaultUser = {};
const getUserId = (user: User) => {
  return user.id;
};
// getUserId(defaultUser);

/**
 * Possible Solutions => [set the User1 as type for defaultUser1]
 */

// Solution-1 ⬇⬇⬇
interface User1 {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}
const defaultUser1: User1 = {
  id: 1,
  firstName: "wafiq",
  lastName: "hossain",
  isAdmin: true,
};
const getUserId1 = (user: User1) => {
  return user.id;
};
getUserId1(defaultUser1);

export {};
