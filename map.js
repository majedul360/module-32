// map always return array  jodi array thekey returner dorkar hoi tahole map method use korte hbe
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = numbers.map((num) => num * num);
console.log(result);

// map string
const books = ["english", "bangla", "math", "chemistry"];
const book = books.map((book) => book.length);
console.log(book);

// array of objects map
const friends = [
  {
    id: 1,
    name: "karim",
    district: "pabna",
  },
  {
    id: 2,
    name: "mahim",
    district: "barisal",
  },
  {
    id: 3,
    name: "masum",
    district: "noakhali",
  },
  {
    id: 4,
    name: "rahim",
    district: "sirajgonj",
  },
];

const friend = friends.map((friend) => friend.name);
console.log(friend);

// foreach khokono return kore na kono kichu return korar dorkar na hole foreach use korte hbe
const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

newNumbers.forEach((num) => console.log(num));
