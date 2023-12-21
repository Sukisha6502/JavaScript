// Question :1
// Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true


console.log(Array.isArray('w3resource'));
console.log(Array.isArray([1, 2, 4, 0]));

// OR

function is_array(arr){
    return Array.isArray(arr);
}  
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

// Question :2
// Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

function array_Clone(arr){
    return arr.slice();
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// Question :3
// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

function first(arr,n){
    if (!n)
    {
        return arr[0] ;
    }
    else if (n<=0){
        return [];
    }
    else{
        return arr.slice(0,n);
    }
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


// Question : 4
// Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

function last(arr,n){
        if (!n)
        {
            i=arr.length -1;
            return arr[i];
        }
        else if (n<=0){
            return [];
        }
        else{
            return arr.slice(-n);
        }
    }
    console.log(last([7, 9, 0, -2]));
    console.log(last([7, 9, 0, -2],3));
    console.log(last([7, 9, 0, -2],6));


// Question : 5
// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

const myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString(""));
console.log(myColor.join(","));
console.log(myColor.join("+"));

// Question : 6
// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

function dashes(val){
    const result = val.toString();
    const output = [];
    for (let i=0;i<result.length;i++)
    {
        if(Number(result[i-1]%2==0) && Number(result[i]%2==0)){
           output.push('-',result[i]);
        }
        else{
           output.push(result[i]);
        }
    }console.log(output.join(''));
}
dashes(236486578);


// Question : 7
// Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

const arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
const result = arr.sort((a,b) => a-b);
const output =result.toString();
console.log(output);

// Question : 8
// Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];  
// Sample Output : a ( 5 times )

const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var count = 0;
var max = 1;
var val;
for (let i = 0; i < arr1.length; i++) {
  count = 1; 
  for (let j = i + 1; j < arr1.length; j++) {
    if (arr1[i] === arr1[j]) {
      count++;
    }}
  if (count > max) {
    max = count;
    val = arr1[i];
  }
}
console.log(`${val} (${max}times)`);

// Question : 9
// Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function swap_case(str) {
    var result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char == char.toUpperCase()) {
            result+=char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    console.log(result);
}
swap_case(" Welcome To JAVASCRIPT");

// Question : 10
// Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------

const arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    for(let i=0;i<arr.length;i++)
    {   
        console.log("row "+i);
        for(let j=0;j<arr[i].length;j++)
        {
        console.log(arr[i][j]);
        }
    }

// Question : 11
// Write a JavaScript program to find the sum of squares of a numerical vector.

function sumOfSquares(vector){
    var sum=0;
    for (let i=0;i<vector.length;i++)
    {
        sum+=vector[i]**2;
    }
    console.log(sum);
}
sumOfSquares([2,45,56,8,42]);

// Question : 12
// Write a JavaScript program to compute the sum and product of an array of integers

function sumAndProduct(arr){
        var sum=0;
        var product=1;
        for (let i=0;i<arr.length;i++)
        {
            sum+=arr[i];
            product*=arr[i];
        }
        console.log("SUM:",sum);
        console.log("PRODUCT:",product);
    }
    sumAndProduct([2,45,56,8,42]);


// Question : 13
// Write a JavaScript program to add items to a blank array and display them.

const array=[];
array.push("Sukisha");
array.push("Maya")
array.push("Priya");
array.push("Ananya");
console.log(array);


// Question : 14
// Write a JavaScript program to remove duplicate items from an array.

  function removeDuplicates(arr){
    const result=[];
        for (let i=0;i<arr.length;i++)
        {
                if(!result.includes(arr[i]))
                {
                    result.push(arr[i])
                }
        }
        console.log(result);
  }
removeDuplicates([6,"suki",2,4,2,23,"suki",6,2]);


// Question : 15
// Write a JavaScript program to find the leap years in a given range of years

function leapYears(start,end) {
    const leap_years = [];
    for (let y=start;y<=end;y++) {
        if ((y%4===0 && y%100!==0) || (y%400===0)) 
        {
            leap_years.push(y);
        }
    }
    console.log(leap_years);
}
leapYears(1900,2020);


// Question : 16
// Write a JavaScript program to shuffle an array

function shuffle(arr) {
const result =arr.slice();
for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
console.log(result);
}
shuffle([23, 35, 42, 46, 1, 23, 19]);


// Question : 17
// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

const array1 = [1,0,2,3,4];
const array2 = [3,5,6,7,8,13];
const result = array2.map((ele,index) => {
    if(index <array1.length){
        return ele+array1[index];
    }
    else{  
        return ele;  
    }
    });
console.log(result);

// Question : 18
// Write a JavaScript program to find duplicate values in a JavaScript array.

function duplicates(arr){
    const result=[];
    const output=[];
    for (let i=0;i<arr.length;i++)
    {
        if(!result.includes(arr[i]))
        {
            result.push(arr[i]);
        }
        else if (result.includes(arr[i]) && !output.includes(arr[i])){
            output.push(arr[i]);
        }
    }
    console.log(output);
}duplicates([23,44,21,23,6,12,11,6,32,23]);


// Question : 19
// Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]

function flatten(arr,value){
    var result=[];
    if (value===true){
        result=arr.flat();
    }else{
        result=arr.flat(Infinity);
    }
    console.log(result);
}
flatten([1, [2], [3, [[4]]],[5,6]]);
flatten([1, [2], [3, [[4]]],[5,6]], true);

// Question : 20
// Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

function union(arr1,arr2){
    const array=arr1.concat(arr2);
    const output=array.sort((a,b) => (a-b));
    const result=[];
    for (let i=0;i<output.length;i++)
    {
       if(!result.includes(output[i]))
       {
        result.push(output[i]);
       } 
    }console.log(result);
}
union([1, 2, 3], [100, 2, 1, 10])


// Question : 21
// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

Array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
const result=Array.filter((ele) => {
        return ele!==null && ele!==0 &&  ele!=='' &&  ele!==false && ele!== undefined && !isNaN(ele);   
    });
console.log(result);


// Question : 22
// Write a JavaScript function to sort the following array of objects by title value.
// Sample object :
// var library = [ 
//    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//    ];

var library = [ { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}];
const result= library.sort((a,b) => {
    if(a.title<b.title){
        return -1
    }else {
        return 1
    }
}); 
console.log(result);


// Question : 23
// Write a JavaScript function to find an array containing a specific element.
// Test data :
// arr = [2, 5, 9, 6];
// console.log(contains(arr, 5));
// [True]

function element(arr,ele) {
    for(let i=0;i<arr.length;i++) {
        if(arr[i]===ele) {
            return true; 
        }
    }return false;
}
console.log(element([2, 5, 9, 6],5));


//Question : 24
// Write a JavaScript script to empty an array while keeping the original.

const arr1=[1,2,3,4,5];
console.log(arr1);
const arr2=arr1.slice();
arr2.length=0;
console.log(arr2);

// Question : 25
// Write a JavaScript function to get the nth largest element from an unsorted array.
// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89

function nthlargest(arr,n) {
    const sortedArray=arr.sort((a,b) => b-a);
    console.log(sortedArray[n-1]);   
}
nthlargest([43, 56, 23, 89, 88, 90, 99, 652],4);

