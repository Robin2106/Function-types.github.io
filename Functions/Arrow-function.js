//Arrow Functions
//Single statement

let multipleNumber = one => one * one;
const welcomeToClass =() =>console.log('Welcome to the JS class');


console.log(multipleNumber(6));
welcomeToClass();
 
// Multiple statement
let evenNumber=(numberOne) =>
{
    if (numberOne % 2 ==0)
    {
        console.log('it is even number');
    }
    else{
        console.log('it is odd number');
        
    }
}
evenNumber(52);

// Returning an Object

const studentDetails = () =>({Name : 'Robin A', Subject : 'BCA'});
const studentInfo = studentDetails();
console.log(studentInfo.Name);

