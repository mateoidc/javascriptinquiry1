var x = 'Mateo'
var y = 'Daniel'
var greater;
var less;
var difference;

if( x.length > y.length){
    greater = x;
    less = y;
    difference = x.length-y.length;
}

else{
    greater = y;
    less = x;
    difference = y.length-x.length;
}

console.log(`The name ${greater} is longer than ${less} by ${difference} characters`)


    
