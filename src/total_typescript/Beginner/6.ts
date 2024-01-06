/**
 *  Delineate Types a Value Can Be
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
getUserId(defaultUser);

/**
 * Possible Solutions => [make an enum for roles & assign it to the role property], [use union]
 */

// Solution-1 ⬇

enum Roles {
  user = "user",
  admin = "admin",
  superAdmin = "superAdmin",
}

interface User1 {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}

export const defaultUser1: User1 = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: Roles.admin,
};
