// IIFE function
// It will create a private space
// it will not distrubthe Global EC
// It will execute imediately no need to call the function
// once the function executed the variabels will be destroyed  

var name='Robin';

(function(){
    var name = "Robin Hood"
    console.log('Welcome to JS Class '+ name);
    
})();

(function(mark){
    if (mark>=80)
    {
        console.log('Pass');
    }
    else
    {
        console.log('Fail');
    }
})(92);

console.log(name);
