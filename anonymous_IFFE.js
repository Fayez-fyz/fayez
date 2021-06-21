//Print Odd numbers 
let Arr = [1,2,3,4,5,6];

let Odd = (function (){
    for ( var i =0 ; i<Arr.length ; i++)

    {
                                                   
      if (Arr[i]%2 == 1) {
        console.log('Odd numbers :'+Arr[i]);
      }
      
    }
    
})();

//  Convert all the strings to title caps in a string array

var caps = ['fayez','fawaz','nawaz']

var tit_caps = (function () {
    for ( j=0 ; j<caps.length; j++){
   var a= caps[j][0].toUpperCase() + caps[j].substring(1);
   console.log('TITLE CAPS : ' +a);
    }
   
})();

//sum of all numbers in an array
let num1 = [5,10,20,30,40];
const sumOf = num1.reduce(function (a , b ) {
   return a+b;

},0);

console.log('SUM OF NUMBERS : '+sumOf);
 //return all prime numbers in an array

 var pr = [2, 3, 4, 5, 6, 7, 8, 9, 10]

var prm = pr.filter(function(number)  {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) 
    return false;
  }
  return true;
});

console.log('PRIME NUMBERS : '+prm);

// return all palindromes

let arr2 = ["amma", "appa", "aayaa",'mairu' , "lusu","akka",'paithiyam '];
let pali = arr2.filter(function(w) {
  let len = w.length;
  for (let i = 0; i < len / 2; i++) {
    if (w[i] == w[len - i - 1]) {
      return true;
    } else {
      return false;
    }
  }
});
console.log('PALLINDROME : ' + pali)

//Print duplicates from an array
var a = ['fayez','fawaz','nawaz','fayez','bayas','nawaz','fayez'];


let dup = a.filter(function(value, index)
{ 
    return a.indexOf(value) == index 
});
console.log("DUPLICATES : " + dup);