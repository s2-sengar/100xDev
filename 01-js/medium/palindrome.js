/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let temp=str.toLowerCase().replace(/[^a-z]/g,''); // remove all chars except a-z
  let left=0,right=temp.length-1;
  while(left<=right){
    if(temp[left]!=temp[right]) return false;
    left++;
    right--;
  }
  return true;
}
module.exports = isPalindrome;
