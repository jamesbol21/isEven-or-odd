//jamesibiza.js
//function is to check if a number is even or odd

function isEven(num){
    if (num % 2 === 0 ) {
     return true;
    }else{
        return false;
    }
}
//test to check if it works
console.log(isEven(3));
console.log(isEven(4));
console.log(isEven(6));
console.log(isEven(8));