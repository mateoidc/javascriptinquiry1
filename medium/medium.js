// Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally. //


// Function

function volume(userInput){
    var level;
    if(userInput === userInput.toUpperCase()){
        level = 'shouting'
    }
    else if(userInput === userInput.toLowerCase()){
        level = 'whispering'
    }
    else{
        level='normal'
    }
    return level;
}


// Execting the function
var user = prompt('enter sentence');
alert(user);

console.log('user is' + ' '+ volume(user));


