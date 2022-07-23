// javascrpt Es6 brings new syntax and new feartures to make your code more modern and readable
class personcl {
    constructor(firstname, birthyear) {
        this.firstname = firstname;
        this.birthyear = birthyear;
    }
    calcage() {
        console.log(2022 - this.birthyear);
    }
}
const hemant = new personcl('hemant', 1998);
console.log(hemant);
hemant.calcage();
personcl.prototype.greet = function() {
    console.log('hey this.firstname');
}
hemant.greet();