/*⁡⁣
⁡⁣⁢⁣/**
 *
 *
 * Before reading the code few key things to remember
 *    ---> use accessor/getter to retrieve class properties instead of custom methods
 *    ---> use mutator/setter to set class properties value instead of custom methods
 *
 *
 *
 *⁡
 ⁡⁣⁢⁣*/

interface AdminType {
  fname: string;
  _age: number;
  hobby: string;
  occupation: string;

  // getProfile: () => string;
  // setProperty: (occupation: string) => void;
}

class Admin implements AdminType {
  constructor(
    public fname: string,
    private _age: number,
    protected hobby: string,
    public occupation: string
  ) {}

  public get getProfile() {
    return this.fname + this._age;
  }

  public set setAge(age: number) {
    if (age > 100 || age < 0) throw new Error("Age limit exceeded");
    this._age = age;
  }

  public get getAge() {
    return this._age;
  }
}

class User extends Admin {
  constructor(
    fname: string,
    _age: number,
    hobby: string,
    public isUser: boolean,
    occupation: string
  ) {
    super(fname, _age, hobby, occupation);
  }

  public get userProfile() {
    return this._age;
  }
}

const admin = new Admin("wafiq", 69, "sex", "Engineer");
const user = new User("hossain", 10, "sex", false, "Singer");
console.log(admin);
console.log(user);
console.log(user.hobby); //Access Modifier isn't available in Javascript yet. Protected is just a syntactic sugar

user.setAge = 120; //will throw an error & bellow lines won't execute.
console.log(user.getAge);
console.log(user.getProfile);
