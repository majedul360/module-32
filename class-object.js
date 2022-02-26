class Friends {
  name;
  country;
  relation = "friend";
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
  help() {
    console.log(this.name, "They are helped me");
  }
}

const friend1 = new Friends("mamun", "bangladesh");
const friend2 = new Friends("jack", "england");
const friend3 = new Friends("rahul", "india");
console.log(friend1);
console.log(friend2);
console.log(friend3);
friend1.help();
