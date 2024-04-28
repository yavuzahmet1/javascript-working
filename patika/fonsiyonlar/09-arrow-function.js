function hello(firstName) {
  console.log(`Merhaba ${firstName}`);
}

hello("Javascript");

const helloFuncV1 = (firstName) => {
  console.log(`Merhaba ${firstName}`);
};
helloFuncV1("HelloFunctionV1");

const helloFuncV2 = (firstName) => console.log(`Merhaba ${firstName}`);

helloFuncV2("HelloFunctionV2");

const helloFuncV3 = (firstName, lastName = "") =>
  console.log(`Merhaba ${firstName} ${lastName}`);

helloFuncV3("HelloFunctionV3", "Wonderful");

const helloFuncV4 = (firstName, lastName = "") => {
  let info = `Merhaba ${firstName} ${lastName}`;
  console.log(info);
  return info;
};
helloFuncV4("helloFuncV4", "other infos");
