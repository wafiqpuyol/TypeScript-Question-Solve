interface Profile {
  phone: string;
  email: string;
}

enum Roles {
  admin = "admin",
  guestUser = "guestUser",
}

interface WorkLife {
  occupation: string;
  experience: number;
}

interface Address {
  address: string;
}

interface AdminUser extends Profile, WorkLife, Address {
  username: string;
  age: number;
  role: Roles;
}

const adminUser: AdminUser = {
  username: "wafiq",
  age: 69,
  phone: "0147878***",
  email: "wafiq420@yahoo.mail",
  address: "Patata Apartment - 69",
  occupation: "Engineer",
  experience: 4,
  role: Roles.admin,
};

console.log(adminUser);

// ---------------------- Restrict Interface Value---------------------------
interface MyObj {
  name: "wafiq";
  password: number;
}

const funcObj = (obj: MyObj): MyObj => {
  const online: boolean = true;
  return { ...obj, isOnline: online };
};

console.log(funcObj({ name: "wsma", password: 132 }));
console.log(funcObj({ name: "wafiq", password: 132 }));
