type Discriminator = 1 | 2 | 3;

const factory = (id: Discriminator): string => {
  const factories: Record<Discriminator, () => string> = {
    1: () => "1",
    2: () => "2",
    3: () => "3",
  };

  return factories[id]();
};
console.log(factory(1));

// --------------------------------------------------
type Fruit = "apple" | "banana" | "orange";
const obj: Record<Fruit, string | number> = {
  apple: "wafiq",
  banana: 45,
};
obj.orange = "this is the use case of TypeScript Record Utility";

// ------------------------TYPE COMPATIBILITY-----------------------------
const routingConfig = {
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: "AboutComponent",
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
};

const func = (routingConfig: {}) => {
  return routingConfig;
};

const id = new URLSearchParams();
const ID = id.get("id");
ID.toUpperCase();
