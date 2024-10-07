//Hiher Order Function
// Takes another function as argument

// Take another function as argument
        


function addition(numberOne,numberTwo)
{
    return numberOne+numberTwo;    
}

function adition (one,two,oneFunction)
    {
        return oneFunction(one,two);
    }
    console.log(adition(10,15,addition));

// Return a function

function substraction(oneNumber)
{
    function result(twoNumber)
    {
        return twoNumber - oneNumber;
    }
    return result;
}

let Answer= substraction(50);
console.log(Answer(85));


// Take another function as argument and return a function

let multiplyOne = a => a*5;
let multiplyTwo = a => a*7;


function aditionMethod(oneFunction,twoFunction)
{
    function getResult(newNumber)
    {
        return oneFunction(twoFunction(newNumber));
    }
    return getResult;
}
let getAns = aditionMethod(multiplyOne,multiplyTwo);
console.log(getAns(4));

