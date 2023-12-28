/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let charMap=new Map();
  str1=str1.toLowerCase().replace(/\s/,'');
  str2=str2.toLowerCase().replace(/\s/,'');
  for(let i=0;i<str1.length;i++){
    charMap.set(str1[i],(charMap.get(str1[i])??0)+1);
  }
  for(let i=0;i<str2.length;i++){
    charMap.set(str2[i],(charMap.get(str2[i])??0)-1);
  }
  let flag=true;
  charMap.forEach((value,key)=>{
    if(value!=0){
      flag=false;
      return;
    }
  })
  return flag;
}
module.exports = isAnagram;
