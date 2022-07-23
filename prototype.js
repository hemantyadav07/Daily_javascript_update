const person = function(firstname, birthyear) {
    this.firstname = firstname;
    this.birthyear = birthyear;
};
const hemant = new person('hemant', 1998);
console.log(hemant);

// prototype
console.log(person.prototype);
person.prototype.calcage = function() {
    console.log(2022 - this.birthyear);
};
hemant.calcage();