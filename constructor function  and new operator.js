const person = function(firstName, birthYear) {

    // this function use to display empty objects
    this.firstName = firstName;
    this.birtYear = birthYear;
};
// constructor staerts with new keyword
const hemant = new person('hemant', 1998);
const abhi = new person('abhi', 1996);
console.log(hemant, abhi);