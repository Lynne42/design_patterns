// Handler that listens to data assignment operations
const handler = {
  set(user: User, value: string, property: string) {
    console.log(`${value} property is being updated, value is ${property}`);
    return Reflect.set(user, value, property);
  },
};

// Creating a proxy with the handler
type User = {
  name: string;
};
const user: User = { name: "Lin" };

const proxy = new Proxy(user, handler);

proxy.name = "ling";

console.log(33, user, proxy);
