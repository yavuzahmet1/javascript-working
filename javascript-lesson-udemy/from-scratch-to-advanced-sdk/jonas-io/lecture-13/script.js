let mark = {
  mass: 78,
  height: 1.69,
};
let john = {
  mass: 92,
  height: 1.95,
};

let johnBMI = Math.floor(mark.mass / mark.height ** 2);
let markBMI = Math.floor(john.mass / john.height ** 2);
console.log(`Mark have BMI ${markBMI}`);
console.log(`John have BMI ${johnBMI}`);
if (johnBMI > markBMI) {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
} else {
  console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
}
