/**
 *  In this exercise, we are looking at a user object and a UserProfile interface in TypeScript.
 */

// Question ⬇⬇⬇

interface UserProfile {
  id: string;
  preferences: {
    theme: "light" | "dark";
  };
}

let user: UserProfile = {
  id: "123",
  preferences: {
    theme: "blue",
  },
};

// Solution ⬇⬇⬇
interface UserProfile {
  id: string;
  preferences: {
    theme: string; //widen the type so that any string type value it can accept.
  };
}

export {};
