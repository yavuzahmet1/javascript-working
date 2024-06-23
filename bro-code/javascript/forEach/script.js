let numbers = [1, 25, 36, 40, 59, 81, 100];
numbers.forEach(display);

function display(number) {
  console.log(number);
}

let fruits = ["orange", "banana", "apple", "carrot", "cherry"];

fruits.forEach(upperCase);
fruits.forEach(displayFruits);
function upperCase(element, index, array) {
  array[index] = element.toUppercase();
  console.log(element, index, array);
}

function displayFruits(element) {
  console.log(element);
}
