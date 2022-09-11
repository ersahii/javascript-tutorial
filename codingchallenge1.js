// calculation of BMI(Body mass index) which is calculated by using formaula
//  BMI = mass / height square or mass / height * height
// mass should be in kilograms and height in meters

// height and mass of john and mark 
const massmark = 78;
const heightmark = 1.69;
const massjohn = 92;
const heightjohn = 1.95;

// using BMI formula 
const BMImark = massmark / heightmark ** 2;
const BMIjohn = massjohn / (heightjohn * heightjohn);
console.log(BMImark, BMIjohn);

// checking whose BMI is greater using if else statement 
if(BMImark > BMIjohn){
    console.log('Mark has higher BMI than John');
}
else{
    console.log('John has heigher BMI than Mark');
}