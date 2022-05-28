const mark = {
    fulname: 'mark smiller',
    mass: 78,
    height: 1.68,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const jhon = {
    fulname: 'jhon smith',
    mass: 93,
    height: 1.98,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
 mark.calcBMI();
 jhon.calcBMI();
 console.log(mark.bmi, jhon.bmi);
 
 if(mark.bmi > jhon.bmi){
     console.log('${mark.fulname} BMI (${mark.bmi}) is higher than (${jhon.fulname} BMI) (${jhon.bmi})')
 }
 else if(jhon.bmi > mark.bmi){
     console.log('${jhon.fulname} BMI (${jhon.bmi}) is higher than (${mark.fulname} BMI) (${mark.bmi})')
 }
 
 
 
 
 
 