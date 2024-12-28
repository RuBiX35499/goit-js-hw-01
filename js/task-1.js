function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));

// function makeTransaction() {
//   const quantity = prompt(`The number of droids ordered:`);
//   const pricePerDroid = prompt(`cost of one droid`);
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction());
// console.log(makeTransaction());
// console.log(makeTransaction());
