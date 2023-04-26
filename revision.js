// Create a function that prints all even numbers from 0 – 10
function evenNumbers(){
    for(let i=0; i<=10;i++){
        if(i%2==0){
            console.log(i)
    }
}

}
evenNumbers()
    
// Print a table containing multiplication tables from 1-10

//Calculate the sum of numbers within an array
let nums = [45,67,23,90];
function addition (nums){
    let sum = 0;
    let i = 0;
    while (i< nums.length){
        sum +=nums[i]
        i++
    }
  console.log({sum})
}
addition(nums)

//Create a function that reverses an array
let fruits = ["mango","banana","apple","passion"];
function reverse(fruits){
    console.log(fruits.slice("").sort().join(" "))
}
reverse(fruits )

//Sort an array from lowest to highest
 let numb = [23,6,78,1,24];
 let numb2 = numb.sort((a,b)=> b-a);
 console.log(numb2);

 //Create a function that filters out negative numbers
 let numerals = [3,5,-1,7,-9,-10];
 function filter(numerals){
for(i=0; i<numerals.length; i++){
    if(i < numerals[i]){
        console.log(numerals[i])
    }
}
 }
 filter(numerals)


 //Remove the spaces found in a string
 let word1 = " Grace ";
 console.log (word1.trim())


 //Return a Boolean if a number is divisible by 10
 let numerics = [23,60,78,1,24,20,90];

for (i= 0; i<numerics.length; i++){
    if (numerics[i] %10==0){
        console.log(true)
    }
}
 
 //Return the number of vowels in a string 
 let word = "Gracee";
 let count1= word.match(/[a,e,i,o,u]/gi).length
 console.log(count1);

 let x = "Grace";
 let y = x.slice(2,4);
 console.log(y);


 let stmt = "i love grace";
 console.log(stmt.search("i"))
 let state = stmt.split(' ,').map(x=>x[0].toUpperCase() + x.substring(1));
 console.log(state)

 const num = Math.floor(Math.random () *11 ) // creates random number between 0 and 10
console.log(num)

// Extract the last four characters from the string below;
let words = "beautiful";
let word2 = words.slice(-4);
console.log([word2]);

// Insert the following string at the fourth index of the below variable:
// "eat"
const food = "I was feeling hungry today";
let food2 = food.slice(0,5) + " eat";
let food3= food.insert
console.log(food2);

// Count how many times the following string appears in the string variable: 1. "the" 2."brown"
const story= "The quick brown fox jumps over the lazy dog";
let count = story.match(/the/gi || []).length;
console.log(count);

let counts = story.match(/brown/g || []).length;
console.log(counts);

// Using JavaScript, find the following words from the following strings: "now" "sitting"

const string1 = "We are now going to school";
let string = string1.includes("now");
console.log(string);
const string2 = "The child was sitting on the table before it fell";
let strings = string2.includes("sitting");
console.log(strings);

// Convert the following strings into the specified format:  / 1. UpperCase: "wonderful"// 2. LowerCase: "amazing", "BEneath"// 3. Title case "A beautiful wedding
let a = "wonderful";
let b = a.toUpperCase();
let c = "BEneath";
let d = c.toLowerCase();
console.log(b,d);

let e = "A beautiful wedding";
let f = e.split(' ').map(a => a[0].toUpperCase() + a.slice(1));
console.log(f);

let grace = "i love javaScript";
let wambui = grace.split(' ').map(c => c[0].toUpperCase() + c.substring(1));
console.log(wambui);

let word3 = "happy birthday victor";
let word4 = word3.split(' ').map(x=> x[0].toUpperCase() + x.substring(1));
console.log(word4)

// Find the last element of the following arrays.
let arr1 = [3,7,34,90,12];
let arr = arr1.slice(-1);
console.log(arr);

//  a JS program that will join the following array elements into a string
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let pets = myPets.join();
console.log(pets);

// Write a JS script to sort the following array items
let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let numbs = arr3.sort((a,b)=> b-a);
console.log(numbs);

let fruits2 =  ["orange","banana","passion","mango"];
fruits2.sort();
console.log(fruits2);


// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
let arr4= ["apple", "mango", "apple",
            "orange", "mango", "mango"];
let notDups = [...new Set(arr4) ];
console.log(notDups);
let duplicates = arr4.filter((value,index)=> arr4.indexOf(value)!== index);
console.log(duplicates);

let arr5 = [23,7,98,90];
let sum =0
for(i=0;i<arr5.length;i++){
    sum+=arr5[i]
}
console.log(sum);

let myStr = ["me","you","we","I"];
let getlen = myStr.length;
console.log(getlen);

// Write a function that takes an array of strings as input and returns a new array containing only the strings that have a length greater than 5
function getArr(){
 return  thestr.filter(x=>x.length>5 )
}
let thestr = ["Grace","wambui","Njuguna","joel","Shad"];
let long=getArr();
console.log(long);

// Write a function that takes an array of numbers as input and returns a new array containing only the even numbers from the original array.
function evenNum(){
    for(i=0; i<numbs.length; i++){
        if(numbsA[i]%2==0){
            console.log(numbsA[i])
        }
    }
}
let numbsA = [23,8,10,5,20];
evenNum();

// Write a function that takes a string as input and returns a new string with all the vowels removed.
let _arr = ["boy","apple","Adam","alpha","dig"];

function getChar(_arr){
    return _arr.filter(x=> x[0]=="a")
}
let get = getChar(_arr)
console.log(get)


// Write a function that takes an array of numbers as input and returns the largest number in the array.
let mathNum= [34,23,101,90,67];
function getMax(mathNum){
return Math.max(...mathNum)
}
let getM = getMax(mathNum);
console.log(getM)

let stri = "grace"
console.log(stri.toUpperCase());

// Write a function that takes an array of strings as input and returns a new array containing only the unique strings from the original array 
let oldStr = ["grace","vicky","grace","liz","joe","joe"];
function dups (oldStr){
    return [... new Set(oldStr)]
}
let du = dups(oldStr)
console.log(du)

// Write a function that takes an array of numbers as input and returns a new array with the numbers sorted in descending order.
let myNums = [45,54,6,90,23,100,2];
let themNums = myNums.sort((x,y) => y-x);
console.log(themNums);

// Write a function that takes in the following array and consoles the target if it is found else
// null
// Target = 23
//mergesort first
function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }
    let mid = Math.floor(arr.length/2);
    let leftArr = arr.slice(0,mid);
    let rightArr = arr.slice(mid);

    return mergingSort(mergeSort(leftArr),mergeSort(rightArr))
}
    function mergingSort(leftArr,rightArr){
        let emptyArr = [];
        while(leftArr.length && rightArr.length){
            if(leftArr[0] <= rightArr[0]){
                emptyArr.push(leftArr.shift())
            }
            else{
                emptyArr.push(rightArr.shift())
            }
        }   
    return [...emptyArr,...leftArr,...rightArr]
}
let numb3 = [2,8,0,23,5,45,76];
console.log(mergeSort(numb3));

function binary(arr,target){
    let leftArr = 0;
    let rightArr = arr.length-1
    while(leftArr<=rightArr){
        let mid= Math.floor((leftArr+rightArr)/2)
        if(arr[mid]==target){
            return mid
        }
        else if (arr[mid]<=target){
            leftArr=mid+1
        }
        else{
            rightArr=mid-1
        }
    }
    return null
}
console.log(binary(numb3,23))

// merge sort then find the target 89
function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
  }
  function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return [...result, ...left, ...right];
  }
  let arrA = [123, 89, 5, 23, 9, 56];
  arr = mergeSort(arrA);
  console.log(arr); 

  function binarySearch(arr,target){
    let left= 0;
    let right= arr.length-1;

    while(left<=right){
        let mid= Math.floor((left+right)/2);
        if(arr[mid]==target){
            return mid
        }
        else if(arr[mid]>=target){
            right=mid-1
        }
        else{
            left =mid+1
        }
    }
    return null
  }
  console.log(binarySearch(arrA,89));
  
