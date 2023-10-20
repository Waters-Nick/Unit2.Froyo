// Prompt the user for a list of desired froyo flavors separated by commas.
const userInputOrder = prompt(
  "Please enter all desired froyo flavors separated by commas.",
  "chocolate, lemon, vanilla, chocolate"
);

// Split the string of flavors into an array of strings.
const stringOrderArray = userInputOrder.split(",");

console.log(stringOrderArray);

const OrderArrayOrder = Object.fromEntries(stringOrderArray);

console.log(OrderArrayOrder);

// create loop that counts the number of each flavor mentioned & returns key-value pair -- e.g. chocolate : 2 , lemon : 1
for(i=0; i < stringOrderArray.length; i++) {
  stringOrderArray = `order : ${stringOrderArray[i]}`;
}

console.log(stringOrderArray);

// const placedOrders = {
//   desiredOrder: "test",
// }

// function addOrder(stringOrderArray) {
//   for(i = 0; i < stringOrderArray.length; i++) {
//     placedOrders = stringOrderArray[i++];
//   }
// }

// console.table(placedOrders);
