// Object destructuring
/* const bikes = {
  name: "yamaha r15",
  price: 450000,
  color: "yellow",
  cc: 155,
  othersBike: {
    name: "mt15",
    price: 400000,
    color: "orange",
  },
};

const { name, price, color, cc } = bikes.othersBike;

console.log(color);
 */
// array destructuring
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [num1, num2, num3, num4, num5, num6, num7, num8, num9] = numbers;

console.log(num3);
