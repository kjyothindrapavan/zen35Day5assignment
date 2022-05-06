//1. Do the below programs in anonymous function & IIFE
// a. Print odd numbers in an array
(function(numarr) {
    let oddnums=[];
    for(let num of numarr) {
        if(num%2==1) {
            oddnums.push(num);
        }
    }
    console.log("odd numbers in array ",oddnums.join(','));
})([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,19,21,22,23,25,24,27,29,26]);

//b.Convert all the strings to title caps in a string array
(function(stringarr) {
    let capitalStrings=[];
    for(let string of stringarr) {
        capitalStrings.push(string.toUpperCase());
    }
    console.log("string in upper case");
    console.log(capitalStrings.join(","));
})(["pavan","Hello","How","are","you","doing","i","will","be","converted","to","capital"]);

//c. Sum of all numbers in an array
(function(numarr) {
    let sum=0;
    for(let num of numarr) {
        sum+=num;
    }
    console.log(`sum of the array is ${sum}`);
})([1,2,22,33,45,67,876,2,3,45,1,54]);

//d. Return all the prime numbers in an array
(function(numarr) {
    let primeNumbers=[];
    for(let num of numarr) {
        let isprime=true;
        for(let i=2;i<num;i++) {
            if(num%i===0) {
                isprime=false;
                break;
            }
        }
        if(isprime && num!=1) {
            primeNumbers.push(num);
        }
    }
    console.log("prime numbers in array");
    console.log(primeNumbers.join(","));
})([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,255,273,267,35,45,46,71,27]);


//e. Return all the palindromes in an array
(function(stringarr) {
    let palindromes=[];
    for(let str of stringarr) {
        let ispalindrome = true;
        for(let i=0,j=str.length-1;i<=j;i++,j--) {
            if(str[i]!=str[j]) {
                ispalindrome=false;
                break
            }
        }
        if(ispalindrome) {
            palindromes.push(str);
        }
    }
    console.log("palindromes");
    console.log(palindromes.join(","));
})(["pavan","hi","dad","pebble","aabaa"]);

//f. Return median of two sorted arrays of the same size
(function(numarr1,numarr2) {
    let len1 = numarr1.length;
    let medianpoint = len1;
    let i=0,j=len1-1;
    let p=0,m=len1-1;
    while(i<=j || p<=m) {
        let mid1 = parseInt(i+((j-i)/2));
        let mid2 = parseInt(p+((m-p)/2));
        if(numarr1[mid1]<=numarr2[mid2]) {
            if((mid1+mid2+1)<medianpoint) {
                i=mid1+1;
                p=mid2;
            }
            else {
                j=mid1;
                m=mid2-1;
            }
        }
        else {
            if((mid1+mid2+1)<medianpoint) {
                i=mid1;
                p=mid2+1;
            }
            else {
                j=mid1-1;
                m=mid2;
            }
        }

        if((i===j) && (p===m)) {
            break;
        }
        
    }
    let result1,result2;
    if(numarr1[i]>=numarr2[p]) {
        result1 = numarr1[i];
    }
    else {
        result1 = numarr2[p];
    }

    if(i === numarr1.length-1) {
        result2 = numarr2[p+1];
    }
    else if(p === numarr2.length-1) {
        result2 = numarr1[i+1];
    }
    else if(numarr1[i+1] < numarr2[p+1]) {
        result2 = numarr1[i+1];
    }
    else {
        result2 = numarr2[p+1];
    }
    console.log("median of",numarr1," ",numarr2);
    console.log((result1+result2)/2);
})([1,12,15,26,38],[2,13,17,30,45]);

