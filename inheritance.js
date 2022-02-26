class Parent {
  wealth;
  constructor(wealth) {
    this.wealth = wealth;
  }
}

class childs extends Parent {
  name;
  age;
  constructor(wealth, name, age) {
    super(wealth);
    this.name = name;
    this.age = age;
  }
  wealth = "false";
  work() {
    console.log("they do not work");
  }
}

const child1 = new childs("rahim", 30, 20000);
console.log(child1);
