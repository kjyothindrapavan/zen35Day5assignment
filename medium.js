// 1. Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number.

var num = 10;
function addFive(num) { 
    return num+5;
}
var result = addFive(num);
console.log("Adding 5 to "+num+" ->"+result);

// Write a function called “getOpposite”.
// Given a number, return its opposite
// Input:

// getOpposite(5);
// getOpposite(0);
// getOpposite(-5);
// getOpposite(“5a”);
// getOpposite(5.5);

// Output:

// -5
// 0
// 5
// -1
// -1


var num = 5;
function getOpposite(num) {

}
var result = getOpposite(num);


// Fill in your code that takes an number minutes and converts it to seconds.
var min = 5;
function toSeconds(min) {
    return min*60;
}
var secs = toSeconds(min);
console.log(min+" in seconds = "+secs);


//Create a function that takes a string and returns it as an integer

var mystr = "5";
function toInteger(mystr) {
    return parseInt(mystr);
}
var myint = toInteger(mystr);
console.log(typeof myint);

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

var myint = 0;
function nextNumber(myint) {
    return myint+1;
}
var myNextint = nextNumber(myint);
console.log(myNextint);

//Create a function that takes an array and returns the first element.

var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0];
}
var data = getFirstElement(arr);

// Convert Hours into Seconds

var hours = 2;
function hourToSeconds(arr) {
    return hours*3600;
}
var data = hourToSeconds(hours);

// Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.

function findPerimeter(num1,num2) {
    return 2*(num1+num2);
}
var peri = findPerimeter(6,7);


// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(num1,num2) {
    return (num1+num2)<100;
}
var res = lessThan100(22,15);
console.log("sum of "+22+" and "+15+" less than 100 "+res);

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainder(num1,num2) {
    return num1%num2;
}
var res = remainder(1,3);
console.log("remainder of 1 divided by 3 "+res);


// Old macdonald had a farm:

// MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs

// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

function CountAnimals(tur,horse,pigs) {
    return (2*tur)+(4*(horse+pigs));
}
var legs = CountAnimals(2,3,5);
console.log("total no of legs "+legs);

// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// Examples
// frames(1, 1) ➞ 60

// frames(10, 1) ➞ 600

// frames(10, 25) ➞ 15000

function frames(num1,num2) {
    let secs = toSeconds(num2);
    return num1*secs;
}
var fps = frames(1,2);
console.log("frames per second is 1 displayed for 2 minutes total frames = "+fps);


// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.


function divisibleByFive(num1) {
    return remainder(num1,5) === 0;
}
var divisible = divisibleByFive(5);



// Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.
function isEven(num1) {
    if(typeof num1 != "number") {
        return -1;
    }
    if(parseInt(num1)!=num1) {
        return -1;
    }

    return remainder(num1,2)===0;
}
var even = isEven(5);



// Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

function areBothOdd(num1, num2){
    return (num1%2===0) && (num2%2===0);
}


// Write a function called “getFullName”.
// Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

function getFullName(firstName, lastName){
    // your code here
    if(firstName === undefined && lastName === undefined) {
        return "";
    }
    else if(firstName === undefined || firstName === "") {
        return lastName;
    }
    else if(lastName === undefined || lastName==="") {
        return firstName;
    }
    else {
        return firstName+" "+lastName;
    }
}



// Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.

function getLengthOfWord(word1){
    if(typeof word1 != "string") {
        return -1;
    }
    return word1.length;
}

// Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given words have the same length.
function isSameLength(word1, word2){
    return getLengthOfWord(word1) === getLengthOfWord(word2);
}


// Create a function to calculate the distance between two points defined by their x, y coordinates

console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{
    return Math.sqrt((x2-x1)**2+(y2-y1)**2);
}

// Write a function called “getNthElement”.
// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.

function getNthElement(array,n){
    if(n>=array.length || n<0) {
        return undefined;
    }

    return array[n];
}

// Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’

function getLastElement(array){
    if(array.length === 0) {
        return -1;
    }
    return array[array.length-1];
}


// Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.

var obj = {
    mykey:"value"
   };
function getProperty(obj, key) {
    return obj[key];
}


// Write a function called “addProperty”.
// Given an object and a key, “addProperty” adds a new property on the given object with a value of true.

function addProperty(obj, key){
    obj[key] = true;
}


// Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object.

function removeProperty(obj, key){
    delete obj[key];
}

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    let negSum=0;
    let posCount=0;
    for(let ele of arr) {
        if(ele < 0) {
            negSum+=ele;
        }
        else {
            count++;
        }
    }
    return new Array(negSum,posCount);
}
console.log(ar2);


// Create a function that receives an array of numbers and returns an array containing only the positive numbers

function getPositives(ar)
{
    let posArr = [];
    for(let ele of ar) {
        if(ele >= 0) {
            posArr.push(ele);
        }
    }
    return posArr;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);


// Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).

function powersOfTwo(n){
  let res = [1];
  let currExe = 1;
  for(let i=1;i<=n;i++) {
      currExe*=2;
      res.push(currExe);
  }
    return res;
  }

//   Find the maximum number in an array of numbers

function findMax(ar)
{
    let max = ar[0];
    for(let ele of ar) {
        if(ele > max) {
            max = ele;
        }
    }
    return max;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);


// Print the first 100 prime numbers

printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " → ", i);
 n++;
 }
 
 i++;
 }
}
// Returns true if a number is prime
function isPrime(n)
{
    let prime = true;
    for(let i=2;i<n;i++) {
        if(n%i===0) {
            prime = false;
            break;
        }
    }
    return prime;
}


// Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”


console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt)
{
// your code here
var n = 0;
var i = startAt;

while(n < nPrimes)
{
if (isPrime(i))
{
console.log(n, " → ", i);
n++;
}

i++;
}
}

// Reverse a string

var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
    let arr = [];
    let i=0;
   for(let j=s.length;j>=0;j--) {
       arr[i++] = s[j];
   }
   return arr.join("");
}

// Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);


// Create a function that will merge two arrays and return the result as a new array
function mergeArrays(ar1, ar2)
{
 var result = [...ar1,...ar2];
 return result;
}

// Calculate the sum of numbers received in a comma delimited string

console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
    let arr = s.split(',');
    let sum =0;
    arr.forEach((ele) => {
        sum+=(+(ele));
    });
    return sum;
}



