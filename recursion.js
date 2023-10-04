/** product: calculate the product of an array of numbers. */

// [1,2,3]
function product(nums) {
  if (nums.length === 0) {
    return 1;
  }

  return nums[0] * product(nums.slice(1));

}

/** longest: return the length of the longest word in an array of words. */
//["hello", "hi", "hola"]
function longest(words) {
  if (words.length === 0) {
    return 0;
  }

  let currWordLength = words[0].length;

  return Math.max(currWordLength, longest(words.slice(1)));

}

/** everyOther: return a string with every other letter. */

//["hello"] => "hlo"
function everyOther(str) {
  if (str.length === 0) {
    return "";
  }

  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */
//["duck", "cat", "pony"], "cat" => true
//["duck", "cat", "pony"] "porcupine" => false
function find(arr, val) {

  if (arr.length === 0) {
    return false;
  }

  if (arr[0] === val) {
    return true;
  }

  return find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */
//abczcba
function isPalindrome(str) {
  if(str.length === 1) return true
  if(str === "") return true

  if(str[0].toLowerCase() !== str.slice(-1).toLowerCase()){
    return false
  } else{
    return isPalindrome(str.slice(1,-1))
  }
}

/** revString: return a copy of a string, but in reverse. */
//"happy" ==> "yppah"
function revString(str) {
  if(str.length === 0){
    return "";
  }

  let reverse = revString(str.slice(1));
  return reverse + str[0];
}

//GOING UP
// function revString(str, res=""){
//   if(str.length === 0){
//     return res;
//   }

//   res += str.slice(-1);

//   return revString(str.slice(0,-1), res);
// }


/** findIndex: return the index of val in arr (or -1 if val is not present). */
//['water','keys','phone']    'keys'
function findIndex(arr, val) {
  if(arr.length === 0) return -1;
  if(arr[0] === val) return 0;

  //truthy/falsy check to make sure we pass -1 down the stack if -1 + 1 (0) occurs
  return findIndex(arr.slice(1),val) + 1 || -1

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for(let key in obj){
    if (typeof obj[key] === "object"){
      return gatherStrings(obj[key]);
      //solution has strings.push(...gatherStrings(obj[key]));
    }
    if (typeof obj[key] === "string"){
        strings.push(obj[key]);
    }
  }
  return strings;
  }




// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {

}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
