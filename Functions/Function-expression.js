// Function Expression
// Without argumentand without return type

var cricketPlayer=function()
{
    console.log('Dhoni is a cricket Player');
}
cricketPlayer();

// With argumentand with return type

let myNative = function(villageName)
{
    return villageName;
}

let nativeName = myNative('Michael puram')
console.log(nativeName);

// With argumentand without return type

const divisionNumber=function(one,two)
{
    answer = one - two
    console.log(answer);    
}
divisionNumber(10,8)