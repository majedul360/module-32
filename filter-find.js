// fillter shorto shapekkhey arrayer prottekta elementer sathy kono kichu kore return korte chaily fillter use korte hbe. abar kono shorto puron na hole empty array return korbe
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const largeNumber = numbers.filter((num) => num > 50);
const smallNumber = numbers.filter((num) => num < 50);
console.log(largeNumber);
console.log(smallNumber);

// find onek gulo element shorto puron korleu shudu first element tat return kory
const books = ["english", "bangla", "chemistry", "math", "biology"];

const book = books.find((book) => book.length < 8);
console.log(book);
